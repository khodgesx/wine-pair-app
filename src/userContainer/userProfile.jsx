const UserProfile = (props)=>{
    
    const user = JSON.parse(localStorage.getItem('props.currentUser'))
    const displayName = user.displayName
    return(
        <div>
            <h1>welcome {displayName}</h1>
            <img src={user.img}></img>
        </div>
    )
}

export default UserProfile