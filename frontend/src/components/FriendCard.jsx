import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";

const FriendCard = ({ friend, removeFriend }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const handleRemove = () => {
    setMenuOpen(false);
    setShowConfirm(true);
  };

  const confirmRemove = () => {
    setShowConfirm(false);
    removeFriend(friend._id);
  };

  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow relative">
      <div className="card-body p-4">
        {/* USER INFO + 3-dot menu */}
        <div className="flex items-center gap-3 mb-3 justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="avatar size-12">
              <img src={friend.profilePic} alt={friend.fullName} />
            </div>
            <h3 className="font-semibold truncate">{friend.fullName}</h3>
          </div>
          {/* 3-dot menu */}
          <div className="dropdown dropdown-right">
            <button
              tabIndex={0}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:shadow-md transition-shadow"
            >
              <span className="text-xl leading-none">&#8942;</span>
            </button>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-36 z-20">
              <li>
                <button className="text-error" onClick={handleRemove}>
                  Remove Friend
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="badge badge-secondary text-xs">
            {getLanguageFlag(friend.nativeLanguage)}
            Native: {friend.nativeLanguage}
          </span>
          <span className="badge badge-outline text-xs">
            {getLanguageFlag(friend.learningLanguage)}
            Learning: {friend.learningLanguage}
          </span>
        </div>

        <Link to={`/chat/${friend._id}`} className="btn btn-outline w-full">
          Message
        </Link>
      </div>

      {/* Confirmation Dialog */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-base-100 p-6 rounded shadow-lg max-w-xs w-full">
            <h3 className="font-semibold mb-4 text-red-500">Remove Friend?</h3>
            <p className="mb-4 text-sm">Are you sure you want to remove {friend.fullName} from your friends?</p>
            <div className="flex justify-end gap-2">
              <button className="btn btn-sm" onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
              <button className="btn btn-error btn-sm" onClick={confirmRemove}>
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FriendCard;

export function getLanguageFlag(language) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[langLower];

  if (countryCode) {
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${langLower} flag`}
        className="h-3 mr-1 inline-block"
      />
    );
  }
  return null;
}