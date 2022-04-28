import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from '../homeContainer/footerContainer/footer'
import apiUrl from '../apiConfig'

const UserProfile = (props)=>{
    const [wineCellar, setWineCellar] = useState([])

    useEffect(() =>{
      getWines()
      getUserInfo()
  }, [])
  let params = useParams()
  let id = params.id
  const [userProfile, setUserProfile] = useState({})

    const getWines = async ()=>{
      try{
          //get wines by user id = all saved wines for that user in mongodb
          const wines = await fetch (`${apiUrl}/wines/user/${id}`)
          const parsedWines = await wines.json()
          setWineCellar(parsedWines.data)
      }catch(err){
          console.log(err)
      }
    }
      //get info about whose profile this is:
      const getUserInfo = async ()=>{
        try{
            const user = await fetch (`${apiUrl}/users/${id}`)
            const parsedUser = await user.json()
            setUserProfile(parsedUser.data)
            // console.log(parsedUser.data)
        }catch(err){
            console.log(err)
        }
    }
    
    const user = JSON.parse(localStorage.getItem('currentUser'))
    //make first letter of displayName uppercase and the rest lowercase:
    // const displayName = user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1).toLowerCase()
    return(
        <div id="user-profile">
            <section id="user-info">
                <h1>{userProfile.displayName}'s Pour Page:</h1>
                
            </section>
            <section id="user-img-container">
                 <img src={userProfile.img}></img>
                 {userProfile._id === user._id ?  <Link id="edit-link" to="/edit-user"><button id="edit-link">Edit Profile</button></Link>
                 :
                 null}
                 
                 { userProfile._id === user._id ? 
                 <h3><Link to={`/saved-wines/user/${user._id}`}>Your Wine Cellar:</Link> 
                 {wineCellar.length} wines</h3>
                 :
                 <h3><Link to={`/saved-wines/user/${userProfile._id}`}>
            {userProfile.displayName}'s Wine Cellar:</Link> 
                     {wineCellar.length} wines</h3>
                }
                {userProfile.faveVarietal ? <h3>Fave Wine: {userProfile.faveVarietal}</h3>
                : null }
                
                 
            </section>
            <div id="footer">
                <Footer></Footer>
            </div>
        </div>
    )
}

export default UserProfile