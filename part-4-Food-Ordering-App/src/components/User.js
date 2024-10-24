const User = (props) => {
    const { name, location, contact } = props
    return (

        < div className="user-card" >
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>{contact}</h4>
        </div >
    )
}
export default User;