import { useState } from 'react'
import '../../../App.css' 
import apiUrl from '../../../apiConfig'


const EditWinePhoto =(props)=>{

    const close=()=>{
        props.toggleShowPicMod()
    }
    const [image, setImage] = useState()
      //edit:
      const editPhoto = async (idToEdit, wineToEdit)=>{
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
            console.log(parsedImg.url)
            wineToEdit.img = await parsedImg.url
            

            const editResponse = await fetch(`${apiUrl}/wines/update-photo/${idToEdit}`, {
                method:"PUT",
                body:JSON.stringify(wineToEdit),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedEdit = await editResponse.json()
            if(parsedEdit.success){
                const newArray = props.wineCellar.map(wine => wine._id === idToEdit ? {wineToEdit} : wine)
                props.setWineCellar(newArray)
                window.location.reload()
            }

        }catch(err){
            console.log(err)
        }
    }

    const submitEdit =(e)=>{
        e.preventDefault();
        editPhoto(props.currentWine._id, image)
        props.toggleShowPicMod()
        
    }
return(
    <>
    { props.editWine ?
        
        <div id="edit-wine"encType="multipart/form">
            <h3>Edit {props.editWine.name}:</h3>
            <form onSubmit={submitEdit}>
            <div id="form-row">
               
                    <label htmlFor="photo">Upload New Photo:</label>
                    <input onChange ={(e)=>setImage(e.target.files[0])} type="file" name="img" accept="image/png, image/jpeg"></input>
                </div>
           
                    <button id="submit" type="submit">Submit</button>
                </form>
            <button id="submit" onClick={close}>Close</button>
       
        
        </div>
    :
    null
    }
    </>
)
}

export default EditWinePhoto