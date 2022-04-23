import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../App.css'



const EditUserPhoto = () =>{
    const user = JSON.parse(localStorage.getItem('currentUser'))
    let navigate = useNavigate()
 //set state of place to prior values, unless changed
    const [ edit, setEdit ] = useState({
        username: user.username,
        displayName: user.displayName,
        img: user.img,
    })
    const [editPhoto, setEditPhoto] = useState({
        img: user.img
    })
    const [image, setImage] = useState()

// //edit user photo only
const editUserPhoto= async (idToEdit, userToEdit)=>{
    try{
        const data = new FormData()
            data.append('file', image)
            data.append('upload_preset', 'nvmc5zgt')
            //post to cloudinary
            const imageUpdate = await fetch('https://api.cloudinary.com/v1_1/dmc4kghoi/image/upload', {
                method: "POST",
                body: data
            })
            const parsedImg = await imageUpdate.json()
            userToEdit.img = await parsedImg.url

            // await console.log('updated img', userToEdit.img)

        const editResponse = await fetch(`http://localhost:3001/users/update-photo/${idToEdit}`, {
            method:"PUT",
            body:JSON.stringify(userToEdit),
            headers:{
                "Content-Type": "application/json"
            }
        })
        const parsedEdit = await editResponse.json()
        if(parsedEdit.success){
        localStorage.setItem('currentUser', JSON.stringify(parsedEdit.data))
        console.log(JSON.parse(localStorage.getItem('currentUser')))
        }

    }catch(err){
        console.log(err)
    }
}
const inputChange=(e)=>{
    setEditPhoto({
        ...editPhoto,
        [e.target.name]: e.target.value
    })
}
const submitEditPhoto = (e)=>{
    e.preventDefault();
    editUserPhoto(user._id, image)
}

return(
    <div>
        <h4>Current Profile Picture:</h4><img id="user-pic"src={user.img}/>

      
        <form onSubmit={submitEditPhoto}encType="multipart/form">
            <div id="form-container">
                <label htmlFor="profile-picture">New Profile Picture: </label>
                <input onChange ={(e)=>setImage(e.target.files[0])} type="file" name="img" accept="image/png, image/jpeg"></input>
                <button id="submit" type="submit">Submit</button>
            </div>
        </form>
       
      
    </div>
    
)

}

export default EditUserPhoto