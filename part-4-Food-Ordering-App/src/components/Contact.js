import React from "react";
import { useState, useEffect } from "react";

const Contact = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Hello React")
        }, 1000)
        console.log("useEffect");
        return () => {
            clearInterval(timer);
            console.log("Contact return");
        }
    }, [])

    console.log(" render");
    return (
        <div>

            <h1>This is Contact page</h1>
        </div>
    )
}


// import React from "react";

// class Contact extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//         console.log("Contact constructor");
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             console.log("Hello React")
//         }, 1000)
//         console.log("Contact componentDidMount");
//     }
//     componentDidUpdate(prevProps, prevState) {
//         console.log("Contact componentDidUpdate");
//     }
//     componentWillUnmount() {
//         clearInterval(this.timer);
//         console.log("Contact componentWillUnmount");
//     }
//     render() {
//         console.log("Contact render");
//         return (
//             <div>
//                 <h1>This is Contact page</h1>
//             </div>
//         )
//     }
// }

export default Contact;