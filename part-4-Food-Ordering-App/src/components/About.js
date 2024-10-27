import React from "react";
import User from "./User";
// import UserClass from "./UserClass";
import React, { useEffect } from "react";
// import UserClass from "./UserClass";
import User from "./User";

const About = () => {
    // Equivalent to componentDidMount in class components
    useEffect(() => {
        // console.log("Parent componentDidMount");
    }, []); // Empty dependency array ensures this only runs once after the first render

    return (
        <div className="about-container">
            <User name={"First"} location={"Hyderabad"} contact={"@akshay_sakinam_"} />
            {/* <UserClass name={"Second"} location={"Hyderabad"} contact={"@akshay_sakinam_"} /> */}
        </div>
    );
};




//CLASS COMPONENT

// class About extends React.Component {
//     constructor(props) {
//         super(props);
//         // console.log("Parent constructor");
//     }
//     componentDidMount() {
//         // console.log("Parent componentDidMount");
//     }
//     render() {
//         // console.log("Parent render");
//         return (<div className="about-container">

//             <UserClass name={"First"} location={"Hyderabad"} contact={"@akshay_sakinam_"} />
//             {/* <UserClass name={"Second"} location={"Hyderabad"} contact={"@akshay_sakinam_"} /> */}
//         </div>)
//     }
// }
export default About;