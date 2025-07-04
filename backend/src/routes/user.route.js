import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { 
    getRecommendedUsers, 
    getMyFriends, 
    sendFriendRequest, 
    acceptFriendRequest, 
    rejectFriendRequest, 
    getFriendRequests, 
    getOutgoingFriendRequests, 
    removeFriend 
} from "../controllers/user.controller.js";

const router = express.Router();

// apply middleware to all routes
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.post("/friend-request/:id/accept", acceptFriendRequest);
router.post("/friend-request/:id/reject", rejectFriendRequest);

router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendRequests);

router.delete("/friend/:id", removeFriend);

export default router;