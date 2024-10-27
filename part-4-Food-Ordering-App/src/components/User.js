import React, { useState, useEffect } from "react";

const User = ({ location, contact }) => {
    const [userInfo, setUserInfo] = useState({
        name: "Dummy name",
        location: "India",
    });

    useEffect(() => {
        // Fetch data when component mounts
        const fetchUserData = async () => {
            const data = await fetch("https://api.github.com/users/akshaysakinam");
            const json = await data.json();

            setUserInfo(json);
            console.log(json);
        };

        fetchUserData();

        console.log("componentDidMount");

        // Cleanup on component unmount
        return () => {
            console.log("Component will unmount");
        };
    }, []); // Empty dependency array ensures this only runs once after the first render

    const { login, avatar_url } = userInfo;

    return (
        <div className="userclass-card bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto my-6">
            <img
                className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 mb-4"
                src={avatar_url}
                alt="user"
            />
            <h2 className="text-2xl font-semibold text-center text-gray-700">{login || "Name Unavailable"}</h2>
            <h3 className="text-lg text-gray-500 text-center">{location || "Location Unavailable"}</h3>
            <h4 className="text-center text-blue-600 font-medium mt-2">{contact || "Contact Unavailable"}</h4>
        </div>
    );
};

export default User;
