import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
// const About = () => {
//     return (
//         <div className="about-container">

//             <UserClass name={"Akshay Kumar"} location={"Hyderabad"} contact={"@akshay_sakinam_"} />
//         </div>
//     )
// }

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Parent constructor");
    }
    componentDidMount() {
        // console.log("Parent componentDidMount");
    }
    render() {
        // console.log("Parent render");
        return (<div className="about-container">

            <UserClass name={"First"} location={"Hyderabad"} contact={"@akshay_sakinam_"} />
            {/* <UserClass name={"Second"} location={"Hyderabad"} contact={"@akshay_sakinam_"} /> */}
        </div>)
    }
}
export default About;