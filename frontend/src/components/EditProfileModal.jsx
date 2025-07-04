import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../lib/api";
import toast from "react-hot-toast";
import { useThemeStore } from "../store/useThemeStore";

const EditProfileModal = ({ user, onClose }) => {
  const [form, setForm] = useState({
    fullName: user.fullName || "",
    location: user.location || "",
    nativeLanguage: user.nativeLanguage || "",
    learningLanguage: user.learningLanguage || "",
    bio: user.bio || "",
  });
  const queryClient = useQueryClient();
  const { theme } = useThemeStore();

  const { mutate, isPending } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Profile updated!");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      onClose();
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Failed to update profile");
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" data-theme={theme}>
      <div className="bg-base-100 p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name</label>
          <input
            className="input input-bordered w-full"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <label className="block text-sm font-medium mb-1" htmlFor="location">Location</label>
          <input
            className="input input-bordered w-full"
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <label className="block text-sm font-medium mb-1" htmlFor="nativeLanguage">Native Language</label>
          <input
            className="input input-bordered w-full"
            id="nativeLanguage"
            name="nativeLanguage"
            value={form.nativeLanguage}
            onChange={handleChange}
            placeholder="Native Language"
          />
          <label className="block text-sm font-medium mb-1" htmlFor="learningLanguage">Learning Language</label>
          <input
            className="input input-bordered w-full"
            id="learningLanguage"
            name="learningLanguage"
            value={form.learningLanguage}
            onChange={handleChange}
            placeholder="Learning Language"
          />
          <label className="block text-sm font-medium mb-1" htmlFor="bio">Bio</label>
          <textarea
            className="textarea textarea-bordered w-full"
            id="bio"
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Bio"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" className="btn" onClick={onClose} disabled={isPending}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isPending}>
              {isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
