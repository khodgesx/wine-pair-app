import {Link} from 'react-router-dom'
const UserProfile = (props)=>{
    
    const user = JSON.parse(localStorage.getItem('props.currentUser'))
    const displayName = user.displayName
    return(
        <div>
            <h1>welcome {displayName}</h1>
            <img src={user.img}></img>
            <Link to={'/saved-wines'}>Saved Wines!</Link>
        </div>
    )
}

export default UserProfile