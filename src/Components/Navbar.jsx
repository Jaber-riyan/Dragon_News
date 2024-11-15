import { Link, NavLink, useNavigate } from "react-router-dom";
import userLogo from '../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../Authentication/Authentication";
import { toast } from "react-toastify";

const Navbar = () => {
    const { signOutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOutUser()
            .then(result => {
                console.log(result);
                toast.success("Logout Successful.");
                navigate('/auth/login');
            })
            .catch(error => {
                const errorCode = error.code.split("auth/")[1];
                const formattedError = errorCode
                    .split("-")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                toast.error(formattedError);
            })
    }

    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="space-x-4">
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? "text-[#706F6F] font-black" : "text-[#706F6F] font-semibold"}>Home</NavLink>
                <NavLink to={'/about'} className={({ isActive }) =>
                    isActive ? "text-[#706F6F] font-black" : "text-[#706F6F] font-semibold"}>About</NavLink>
                <NavLink to={'/career'} className={({ isActive }) =>
                    isActive ? "text-[#706F6F] font-black" : "text-[#706F6F] font-semibold"}>Career</NavLink>
            </div>
            <div className="flex justify-center items-center gap-4">

                {
                    user ?
                        <div className="avatar cursor-pointer">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                <img className="rounded-full w-12 border-2 h-12 object-cover" src={user ? user.photoURL : userLogo} alt="" />

                            </div>
                        </div>
                        :
                        <img className="rounded-full w-12 border-2 h-12 object-cover" src={userLogo} alt="" />
                }

                {
                    user ? <Link onClick={handleLogout} className="px-7 font-semibold py-2 bg-[#403F3F] text-white">Logout</Link> : <Link to={'/auth/login'} className="px-7 font-semibold py-2 bg-[#403F3F] text-white">Login</Link>
                }


            </div>
        </div >
    );
};

export default Navbar;