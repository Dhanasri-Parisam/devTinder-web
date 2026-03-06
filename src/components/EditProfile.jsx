import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [skills, setSkills] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setAge(user.age || "");
      setGender(user.gender || "");
      setAbout(user.about || "");
      setPhotoUrl(user.photoUrl || "");
      setSkills(user.skills ? user.skills.join(", ") : "");
    }
  }, [user]);

  const handleSave = async () => {
    try {
      const updatedProfile = {
        firstName,
        lastName,
        age,
        gender,
        about,
        photoUrl,
        skills: skills.split(",").map((skill) => skill.trim()),
      };

      const res = await axios.put(BASE_URL + "/profile/edit", updatedProfile, {
        withCredentials: true,
      });

      dispatch(addUser(res?.data?.data));
      setError("");
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    } catch (err) {
      setError(err?.response?.data || "Failed to update profile");
    }
  };

  const skillsArray = skills
    .split(",")
    .map((skill) => skill.trim())
    .filter((s) => s.length > 0);

  return (
    <div className="w-full px-4 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col lg:flex-row items-stretch gap-8 lg:gap-12">

        {/* FORM */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6 h-full">

          <legend className="fieldset-legend text-lg font-semibold">
            Edit Profile
          </legend>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <label className="label">First Name</label>
          <input
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="label">Last Name</label>
          <input
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className="label">Age</label>
          <input
            type="number"
            className="input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label className="label">Gender</label>
          <input
            className="input"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />

          <label className="label">Photo URL</label>
          <input
            className="input"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />

          <label className="label">Skills (comma separated)</label>
          <input
            className="input"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <label className="label">About</label>
          <textarea
            className="textarea"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />

          <button onClick={handleSave} className="btn btn-neutral mt-4 w-full">
            Save Profile
          </button>
        </fieldset>

        {/* LIVE PREVIEW */}
        <UserCard
          user={{
            firstName,
            lastName,
            age,
            gender,
            about,
            photoUrl,
            skills: skillsArray,
          }}
        />

      </div>
      { toast && (
        <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Profile saved successfully</span>
        </div>
      </div>) }
    </div>
  );
};

export default EditProfile;