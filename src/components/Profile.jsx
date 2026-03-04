import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector((store) => store.user);

    return (
        <div className="profile">
            <h1>Profile Page</h1>
            <pre className="bg-base-200 p-4 rounded-lg mt-4 overflow-x-auto">
                {/* explain this line - This line is using the JSON.stringify method to convert the user object into a JSON string format. The second argument (null) is used to specify a replacer function, which is not being used here, and the third argument (2) is used to specify the number of spaces for indentation in the resulting JSON string. This makes the output more readable when displayed in the <pre> tag, which preserves whitespace and formatting. */}
                {JSON.stringify(user, null, 2)} 
            </pre>
        </div>
    )
}

export default Profile;
