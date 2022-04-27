import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
const UserProfile = (props)=>{
    const [wineCellar, setWineCellar] = useState([])

    useEffect(() =>{
      getWines()
  }, [])
    const getWines = async ()=>{
      try{
          //get wines by user id = all saved wines for that user in mongodb
          const wines = await fetch (`http://localhost:3001/wines/user/${user._id}`)
          const parsedWines = await wines.json()
          setWineCellar(parsedWines.data)
      }catch(err){
          console.log(err)
      }
  }
    
    const user = JSON.parse(localStorage.getItem('currentUser'))
    //make first letter of displayName uppercase and the rest lowercase:
    const displayName = user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1).toLowerCase()
    return(
        <div id="user-profile">
            <section id="user-info">
                <h1>{displayName}'s Pour Page:</h1>
                
            </section>
            <section id="user-img-container">
                 <img src={user.img}></img>
                 <Link to="/edit-user"><h4 id="edit-link">edit user</h4></Link>
                 <h3><Link to={`/saved-wines/user/${user._id}`}>Your Wine Cellar:</Link> {wineCellar.length} wines</h3>
                 
            </section>
            
        </div>
    )
}

export default UserProfile