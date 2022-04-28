import { useState } from 'react'
import '../../../App.css' 
import apiUrl from '../../../apiConfig'


const EditWine =(props)=>{
  const [editWine, setEditWine] = useState({
        name: props.editWine.name,
        varietal: props.editWine.varietal,
        img: props.editWine.img,
        notes: props.editWine.notes,
        apiId:props.editWine.apiId,
        rating: props.editWine.rating
    })
    const close=()=>{
        props.toggleShow()
    }
      //edit:
      const editOneWine = async (idToEdit, wineToEdit)=>{
        try{

            const editResponse = await fetch(`${apiUrl}/wines/${idToEdit}`, {
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
    const inputChange=(e)=>{
        setEditWine({
            ...editWine,
            [e.target.name]: e.target.value
        })
    }
    const submitEdit =(e)=>{
        e.preventDefault();
        editOneWine(props.id, editWine)
        props.toggleShow()
        
    }
return(
    <>
    { editWine ?
        
        <div id="edit-wine">
            <h3>Edit {editWine.name}:</h3>
            <form onSubmit={submitEdit}>
            <div id="form-row">
                    <label htmlFor="name">Name:</label>
                    <input onChange={inputChange}type="text" name="name" defaultValue={editWine.name}/>
                </div>

                <div id="form-row">
                    <label htmlFor="notes">Notes:</label>
                    <input onChange={inputChange}type="text" name="notes" />
                </div>
                <div id="form-row">    
                    <label htmlFor="rating">Rating:</label>
                    <select onChange ={inputChange} type="number" name="rating" >
                        <option placeholder="rating"></option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="4">4</option>
                        <option value="4.5">4.5</option>
                        <option value="5">5</option>
                    </select>
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

export default EditWine