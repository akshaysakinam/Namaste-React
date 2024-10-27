import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnReact, setBtnReact] = useState("Login");
    const isOnline = useOnlineStatus();

    return (
        <div className="flex justify-between items-center py-2 px-10 bg-white shadow-md sticky top-0 z-50 transition-colors duration-300 hover:bg-gray-100">
            <div className="logo-container">
                <img
                    className="w-24 transition-transform duration-300 hover:rotate-[-5deg] hover:scale-110"
                    src={LOGO_URL}
                    alt="Logo"
                />
            </div>
            <div className="nav-items">
                <ul className="flex items-center space-x-6 font-bold">
                    <li>
                        <div>{isOnline ? <div className="font-semibold text-gray-800    text-sm">Online🟢</div> : <div className=" text-sm font-semibold text-gray-700">Offline🔴</div>}</div>

                    </li>
                    <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/" className="text-sm font-semibold text-gray-800 relative group">
                            Home
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/about" className="text-sm text-gray-800 font-semibold relative group">
                            About Us
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/contact" className="text-sm text-gray-800 font-semibold relative group">
                            Contact Us
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/grocery" className="text-gray-800 text-sm font-semibold relative group">
                            Grocery
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/cart" className="text-gray-800 text-sm font-semibold relative group">
                            Cart
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <button
                        className="bg-yellow-500 font-semibold text-white border-none py-2 px-5 rounded-lg  cursor-pointer transition-transform duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:bg-yellow-600 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                        onClick={() => {
                            btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login");
                        }}
                    >
                        {btnReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
