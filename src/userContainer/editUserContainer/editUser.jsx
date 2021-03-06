import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../../homeContainer/footerContainer/footer";
import apiUrl from "../../apiConfig";


const EditUser = () =>{
    let navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('currentUser'))

//set state of place to prior values, unless changed
    const [ edit, setEdit ] = useState({
        username: user.username,
        displayName: user.displayName,
        faveVarietal: user.faveVarietal,
        img: user.img,
        
    })


// //edit user (everything but photo)
const editUser= async (idToEdit, userToEdit)=>{
    try{

        const editResponse = await fetch(`${apiUrl}/users/${idToEdit}`, {
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
        navigate(`/user-profile/${user._id}`)
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

        <h3 id="pic-label">Profile Picture:</h3>
        <div id='image-to-edit'>
            <img id="user-pic"src={user.img}/>
            <Link id="button-link" to="/edit-userphoto"><button id="edit-photo-button">Edit Photo</button></Link>
            <div id='message'>
                <h4>Edit photo?</h4>
                <Link to="/edit-userphoto"><button>Click here!</button></Link>
             </div>
        </div>

        <form onSubmit={submitEdit}>
            <div id="form-container">
                <label htmlFor="displayName">Display Name:</label>
                <input onChange={inputChange}type="text" name="displayName" defaultValue={user.displayName} />
               
                <label htmlFor="favoriteVarietal">Favorite Wine Varietal:</label>
                <input onChange={inputChange}type="text" name="faveVarietal" defaultValue={user.faveVarietal} />

                <button id="submit"type="submit">Submit</button>
            </div>
        </form>
       
        <div id="footer">
            <Footer></Footer>
        </div>
    </div>
    
)

}

export default EditUser