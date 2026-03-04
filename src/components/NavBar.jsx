import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
    const user = useSelector((store) => store.user);
    return (
        <div className="navbar bg-base-300 shadow-sm px-4">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
            </div>

            <div className="flex items-center gap-3">
                {user && (
                    <>
                        <p className="text-sm text-blue-400">
                            Welcome, {user?.firstName}
                        </p>

                        <div className="dropdown dropdown-end">
                            
                            {/* Avatar Button (Trigger) */}
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User avatar"
                                        src={
                                            user?.avatar ||
                                            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        }
                                    />
                                </div>
                            </label>

                            {/* Dropdown Menu */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link to="/profile" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/settings">Settings</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;