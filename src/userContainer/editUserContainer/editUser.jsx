import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'


const EditUser = () =>{
    let navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const display = user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)

//set state of place to prior values, unless changed
    const [ edit, setEdit ] = useState({
        username: user.username,
        displayName: user.displayName,
        img: user.img,
        
    })


// //edit user (everything but photo)
const editUser= async (idToEdit, userToEdit)=>{
    try{

        const editResponse = await fetch(`http://localhost:3001/users/${idToEdit}`, {
            method:"PUT",
            body:JSON.stringify(userToEdit),
            headers:{
                "Content-Type": "application/json"
            }
        })
        const parsedEdit = await editResponse.json()
        if(parsedEdit.success){
        console.log(parsedEdit.data)
        
        localStorage.setItem('currentUser', JSON.stringify(parsedEdit.data))
        // console.log(JSON.parse(localStorage.getItem('currentUser')))
        navigate('/user-profile')
        window.location.reload()
        }

    }catch(err){
        console.log(err)
    }
}
const inputChange=(e)=>{
    setEdit({
        ...edit,
        [e.target.name]: e.target.value
    })
}
const submitEdit =(e)=>{
    e.preventDefault();
    editUser(user._id, edit)
}

return(
    <div id="current-profile">
        <h3>Current Profile Settings:</h3>
        <h4>username: {user.username}</h4>
        <h4>Display Name: {display}</h4>
        <h4 id="pic-label">Profile Picture:</h4><Link to="/edit-userphoto"><img id="user-pic"src={user.img}/></Link>

      
        <form onSubmit={submitEdit}>
            <div id="form-container">
                <label htmlFor="displayName">Display Name:</label>
                <input onChange={inputChange}type="text" name="displayName" defaultValue={user.displayName} />
                <button id="submit"type="submit">Submit</button>
            </div>
        </form>
       
      
    </div>
    
)

}

export default EditUser