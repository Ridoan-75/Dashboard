import React, { useRef, useState, useEffect } from "react";
import { HiOutlineCamera } from "react-icons/hi";

const defaultProfile = {
  photo: "",
  name: "",
  email: "",
  phone: "",
  bio: "",
  website: "",
  location: "",
};

const Profile = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  // Load saved profile from localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile") || "{}");
    if (savedProfile && Object.keys(savedProfile).length) {
      setProfile(savedProfile);
    }
  }, []);

  const handleChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfile((prev) => ({ ...prev, photo: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile)); // Save to browser
    setIsEditing(false);
    alert("Profile updated!");
  };

  const photoUrl = profile.photo || "https://ui-avatars.com/api/?name=User&background=ddd&color=555";

  return (
    <div className="bg-white/30 backdrop-blur-lg shadow-lg rounded-xl p-8 max-w-md w-full mx-auto">
      {/* Profile Image */}
      <div className="flex flex-col items-center relative">
        <div className="relative">
          <img
            src={photoUrl}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-md object-cover cursor-pointer"
            onClick={() => isEditing && fileInputRef.current.click()}
          />
          {isEditing && (
            <div
              className="absolute bottom-0 right-0 bg-blue-600 p-1 rounded-full cursor-pointer flex items-center justify-center"
              onClick={() => fileInputRef.current.click()}
            >
              <HiOutlineCamera className="text-white w-5 h-5" />
            </div>
          )}
        </div>

        {isEditing && (
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: "none" }}
            onChange={handlePhotoChange}
          />
        )}

        <h2 className="mt-4 text-2xl font-bold text-primary1">
          {isEditing ? (
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="border-2 border-blue-500 rounded px-2 py-1 text-lg"
              placeholder="Your Name"
            />
          ) : (
            profile.name || "Your Name"
          )}
        </h2>

        <p className="text-primary1 text-sm mt-1">
          {isEditing ? (
            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="border-2 border-blue-500 rounded px-2 py-1 w-full"
              placeholder="Email address"
            />
          ) : (
            profile.email || "Email address"
          )}
        </p>
      </div>

      {/* Other Info */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center border-b pb-2">
          <span className="font-semibold text-black mr-2">Phone:</span>
          {isEditing ? (
            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="border-2 border-blue-500 rounded px-2 py-1 flex-1"
              placeholder="Phone number"
            />
          ) : (
            <span className="flex-1">{profile.phone || "Not Set"}</span>
          )}
        </div>

        <div className="flex items-center border-b pb-2">
          <span className="font-semibold text-black mr-2">Bio:</span>
          {isEditing ? (
            <input
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="border-2 border-blue-500 rounded px-2 py-1 flex-1"
              placeholder="Write something about yourself..."
            />
          ) : (
            <span className="flex-1">{profile.bio || "Not Set"}</span>
          )}
        </div>

        <div className="flex items-center border-b pb-2">
          <span className="font-semibold text-black mr-2">Website:</span>
          {isEditing ? (
            <input
              name="website"
              value={profile.website}
              onChange={handleChange}
              className="border-2 border-blue-500 rounded px-2 py-1 flex-1"
              placeholder="Your website URL"
            />
          ) : (
            <span className="flex-1">{profile.website || "Not Set"}</span>
          )}
        </div>

        <div className="flex items-center border-b pb-2">
          <span className="font-semibold text-black mr-2">Location:</span>
          {isEditing ? (
            <input
              name="location"
              value={profile.location}
              onChange={handleChange}
              className="border-2 border-blue-500 rounded px-2 py-1 flex-1"
              placeholder="Your location"
            />
          ) : (
            <span className="flex-1">{profile.location || "Not Set"}</span>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        {isEditing ? (
          <>
            <button
              className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-all duration-300 cursor-pointer"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-5 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-secondary hover:text-black transition-all duration-300 cursor-pointer"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-secondary hover:text-black transition-all duration-300 cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
