import { Link } from 'react-router-dom'
const UserProfile = (props)=>{
    
    const user = JSON.parse(localStorage.getItem('props.currentUser'))
    //make first letter of displayName uppercase:
    const displayName = user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)
    return(
        <div id="user-profile">
            <section id="user-info">
                <h1>{displayName}'s Pour Page:</h1>
                <Link to={'/saved-wines'}>Your Wine Cellar</Link>
            </section>
            <section id="user-img-container">
                 <img src={user.img}></img>
            </section>
            
        </div>
    )
}

export default UserProfile