import User from "../models/User.js";
import FriendRequest from "../models/FriendRequest.js";

export async function getRecommendedUsers(req, res) {
    try {
            const currentUserId = req.user.id;
    const currentUser = req.user;

    const recommendedUsers = await User.find({
        $and: [
            {_id: {$ne: currentUserId}},    // exclude current user
            {_id: {$nin: currentUser.friends}}, // exclude current user's friends
            {isOnboarded: true},
        ],
    }).select("-password");

        res.status(200).json(recommendedUsers);
    } catch (error) {
        console.log("Error in getRecommendedUsers: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getMyFriends(req, res) {
    try {
        const user = await User.findById(req.user.id)
            .select("friends")
            .populate("friends", "fullName profilePic nativeLanguage learningLanguage location");

        res.status(200).json(user.friends);
    } catch (error) {
        console.log("Error in getMyFriends: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function sendFriendRequest(req, res) {
    try {
        const myId = req.user.id;
        const { id:recipientId } = req.params;

        // prevent sending friend request to yourself
        if (myId === recipientId) {
            return res.status(400).json({ message: "You cannot send a friend request to yourself" });
        }

        // check if recipient exists
        const recipient = await User.findById(recipientId);

        if (!recipient) {
            return res.status(404).json({ message: "Recipient not found" });
        }

        // check if user is already friends
        if (recipient.friends.includes(myId)) {
            return res.status(400).json({ message: "You are already friends with this user" });
        }

        // check if friend request already exists
        const existingRequest = await FriendRequest.findOne({
            $or: [
                {sender: myId, recipient: recipientId},
                {sender: recipientId, recipient: myId},
            ],
        });

        if (existingRequest) {
            return res.status(400).json({ message: "Friend request already exists" });
        }

        // create friend request
        const friendRequest = await FriendRequest.create({
            sender: myId,
            recipient: recipientId,
        });
        
        res.status(201).json(friendRequest);
    } catch (error) {
        console.log("Error in sendFriendRequest: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function acceptFriendRequest(req, res) {
    try {
        const { id: requestId } = req.params;
        const friendRequest = await FriendRequest.findById(requestId);

        if (!friendRequest) {
            return res.status(404).json({ message: "Friend request not found" });
        }

        // check if user is the recipient
        if (friendRequest.recipient.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not authorized to accept this friend request" });
        }

        friendRequest.status = "accepted";
        await friendRequest.save();

        // add each user to each other's friends list
        // $addToSet: adds elements to an array only if they don't already exist
        await User.findByIdAndUpdate(friendRequest.sender, {
            $addToSet: {friends: friendRequest.recipient},
        });
        await User.findByIdAndUpdate(friendRequest.recipient, {
            $addToSet: {friends: friendRequest.sender},
        });

        res.status(200).json({ message: "Friend request accepted successfully" });
    } catch (error) {
        console.log("Error in acceptFriendRequest: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function rejectFriendRequest(req, res) {
    try {
        const { id: requestId } = req.params;
        const friendRequest = await FriendRequest.findById(requestId);

        if (!friendRequest) {
            return res.status(404).json({ message: "Friend request not found" });
        }

        // check if user is the recipient
        if (friendRequest.recipient.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not authorized to reject this friend request" });
        }

        // Set status to 'rejected' before deleting (for audit/logging if needed)
        friendRequest.status = "rejected";
        await friendRequest.save();
        await FriendRequest.findByIdAndDelete(requestId);

        res.status(200).json({ message: "Friend request rejected and removed successfully" });
    } catch (error) {
        console.log("Error in rejectFriendRequest: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getFriendRequests(req, res) {
    try {
        const incomingRequests = await FriendRequest.find({
            recipient: req.user.id,
            status: "pending",
        }).populate("sender", "fullName profilePic nativeLanguage learningLanguage location");

        const acceptedRequests = await FriendRequest.find({
            sender: req.user.id,
            status: "accepted",
        }).populate("recipient", "fullName profilePic");

        res.status(200).json({ incomingReqs: incomingRequests, acceptedReqs: acceptedRequests });
    } catch (error) {
        console.log("Error in getFriendRequests: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getOutgoingFriendRequests(req, res) {
    try {
        const outgoingRequests = await FriendRequest.find({
            sender: req.user.id,
            status: "pending",
        }).populate("recipient", "fullName profilePic nativeLanguage learningLanguage location");

        res.status(200).json(outgoingRequests);
    } catch (error) {
        console.log("Error in getOutgoingFriendRequests: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Remove a friend
export async function removeFriend(req, res) {
  try {
    const myId = req.user.id;
    const { id: friendId } = req.params;

    // Remove each other from friends list
    await User.findByIdAndUpdate(myId, { $pull: { friends: friendId } });
    await User.findByIdAndUpdate(friendId, { $pull: { friends: myId } });

    // Remove any friend requests between these users
    await FriendRequest.deleteMany({
      $or: [
        { sender: myId, recipient: friendId },
        { sender: friendId, recipient: myId }
      ]
    });

    res.status(200).json({ message: "Friend removed successfully" });
  } catch (error) {
    console.log("Error in removeFriend:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}