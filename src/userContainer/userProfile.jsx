import {Link} from 'react-router-dom'
const UserProfile = (props)=>{
    
    const user = JSON.parse(localStorage.getItem('props.currentUser'))
    //make first letter of displayName uppercase:
    const displayName = user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)
    return(
        <div>
            <h1>{displayName}'s Pour Page:</h1>
            <img src={user.img}></img>
            <Link to={'/saved-wines'}>{displayName}'s Wines!</Link>
        </div>
    )
}

export default UserProfile