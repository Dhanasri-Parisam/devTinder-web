const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills } = user || {};

  return (
    <div className="card bg-base-100 w-full max-w-md shadow-xl flex flex-col h-full">

      {/* Image */}
      <figure className="h-64">
        <img
          src={photoUrl || "https://via.placeholder.com/400"}
          alt="user"
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body flex flex-col flex-grow">

        {/* Name */}
        <h2 className="card-title text-xl">
          {firstName || "First"} {lastName || "Last"}
        </h2>

        {/* Age + Gender */}
        {(age || gender) && (
          <p className="text-sm text-gray-400">
            {age && `Age: ${age}`} {gender && ` • ${gender}`}
          </p>
        )}

        {/* About */}
        <p className="mt-1">
          {about || "This is default details of users"}
        </p>

        {/* Skills */}
        {Array.isArray(skills) && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill, index) => (
              <span key={index} className="badge badge-outline">
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="card-actions justify-end mt-auto pt-6">
          <button className="btn btn-outline btn-error">
            Ignore
          </button>
          <button className="btn btn-primary">
            Interested
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserCard;