import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnReact, setBtnReact] = useState("Login")

    //if there is no dependency array then useEffect called on every render
    //If dependency array is emoty =[]=> useEffect is called on initial render(just once)
    //if we have something as dependency like[btnReact] then useEffect is called everytime btnReact is updated
    useEffect(() => {

    }, [])
    const isOnline = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <div>{isOnline ? "Online🟢" : "Offline🔴"}</div>
                    </li>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="btn-login"
                        onClick={() => {
                            btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")
                        }}>{btnReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;