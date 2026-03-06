import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const [email, setEmail] = useState("will@gmail.com");
    const [password, setPassword] = useState("Will@123");
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await axios.post(
                BASE_URL + "/login",
                { emailId: email, password },
                { withCredentials: true }
            );

            const res = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true,
            });

            dispatch(addUser(res.data));
            navigate("/feed");

        } catch (err) {
            console.error("Login error:", err);
            setError(err?.response?.data || "Login failed");
        }
    };

    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-10 mx-auto">
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Email</label>
            <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label className="label">Password</label>
            <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

            <button className="btn btn-neutral mt-4" onClick={handleLogin}>
                Login
            </button>
        </fieldset>
    );
};

export default Login;