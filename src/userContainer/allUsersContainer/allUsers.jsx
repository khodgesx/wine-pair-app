import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../homeContainer/footerContainer/footer'

const AllUsers = () =>{
    useEffect(() =>{
        getUsers();
    }, [])
    const [users, setUsers] = useState([])
    const getUsers = async ()=>{
        try{
            const users = await fetch (`http://localhost:3001/users`)
            const parsedUsers = await users.json()
            setUsers(parsedUsers.data)
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div id="all-users">
            {users.map((user)=>{
                return(
                        <div key={user._id} id="user-div">
                            <h3>{user.displayName}</h3>
                            <Link to={`/user-profile/${user._id}`}> <img src={user.img}></img></Link>
                            <Link to={`/saved-wines/user/${user._id}`}>{user.displayName}'s cellar</Link>
                        </div>
                )
            })}
            <div id="all-users-footer">
                <Footer></Footer>
            </div>
            
        </div>
    )
}

export default AllUsers