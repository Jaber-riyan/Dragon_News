import { Link, NavLink } from "react-router-dom";
import userLogo from '../assets/user.png';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="space-x-4">
                <NavLink  to='/' className={({ isActive }) =>
                    isActive ? "text-[#706F6F] font-black" : "text-[#706F6F] font-semibold"}>Home</NavLink>
                <NavLink to={'/about'} className={({ isActive }) =>
                    isActive ? "text-[#706F6F] font-black" : "text-[#706F6F] font-semibold"}>About</NavLink>
                <NavLink to={'/career'} className={({ isActive }) =>
                    isActive ? "text-[#706F6F] font-black" : "text-[#706F6F] font-semibold"}>Career</NavLink>
            </div>
            <div className="flex justify-center items-center gap-4">
                <img src={userLogo} alt="" />
                <Link to={'/auth/login'} className="px-7 font-semibold py-2 bg-[#403F3F] text-white">Login</Link>
            </div>
        </div >
    );
};

export default Navbar;