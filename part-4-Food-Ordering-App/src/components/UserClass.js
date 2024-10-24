import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "India",
            }
        }

        // console.log(this.props.name + "child constructor")
        console.log("constructor")
    }
    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/akshaysakinam")
        const json = await data.json();

        this.setState({
            userInfo: json

        });
        console.log(json)
        // console.log(this.props.name + "child componentDidMount")
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }
    render() {
        // console.log(this.props.name + "child render")
        console.log("child render")
        const { login, avatar_url } = this.state.userInfo
        return (

            < div className="userclass-card" >
                <img style={{ width: "50px", height: "50px" }} src={avatar_url} alt="user" />
                <h2>{login}</h2>
                <h3>{this.props.location}</h3>
                <h4>{this.props.contact}</h4>
            </div >
        )
    }
}

export default UserClass;