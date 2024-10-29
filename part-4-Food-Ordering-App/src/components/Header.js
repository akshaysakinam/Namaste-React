import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import DarkModeContext from "../utils/DarkModeContext";

const Header = () => {
    const [btnReact, setBtnReact] = useState("Login");
    const isOnline = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div className={`flex justify-between items-center py-2 px-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md sticky top-0 z-50 transition-colors duration-300`}>
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
                        {/* <div>
                            {isOnline ? (
                                <div className={`font-semibold ${isDarkMode ? 'text-green-400' : 'text-gray-800'} text-sm`}>
                                    Online🟢
                                </div>
                            ) : (
                                <div className={`text-sm font-semibold ${isDarkMode ? 'text-red-400' : 'text-gray-700'}`}>
                                    Offline🔴
                                </div>
                            )}
                        </div> */}
                    </li>
                    <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/" className="text-sm font-semibold relative group">
                            Home
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/about" className="text-sm font-semibold relative group">
                            About Us
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/contact" className="text-sm font-semibold relative group">
                            Contact Us
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/grocery" className="text-sm font-semibold relative group">
                            Grocery
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/cart" className="text-sm font-semibold relative group">
                            Cart
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    {/* <li className="relative transition-colors duration-300 hover:text-yellow-500">
                        <Link to="/cart" className="text-sm font-semibold relative group">
                            {loggedInUser}
                            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-yellow-500 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li> */}
                    <button
                        className={`bg-yellow-500 font-semibold text-white border-none py-2 px-5 rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:bg-yellow-600 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700 ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-500'}`}
                        onClick={() => {
                            btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login");
                        }}
                    >
                        {btnReact}
                    </button>
                    {/* Toggle Dark Mode Button */}
                    <button
                        onClick={toggleDarkMode}
                        className="ml-4 p-2 rounded-lg border border-gray-300 bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
