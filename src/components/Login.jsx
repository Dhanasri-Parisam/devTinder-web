import axios from "axios";
import { use, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const [email, setEmail] = useState("will@gmail.com");
    const [password, setPassword] = useState("Will@123");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login", {
                emailId: email,
                password,
            }, { withCredentials: true });
            console.log(res.data);
            dispatch(addUser(res.data));
            return navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-10 mx-auto">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email ID : {email}</label>
        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
        </fieldset>
    )
}

export default Login;
