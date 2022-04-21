import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Modal } from 'react-bootstrap'

const EditWine =(props)=>{
  const [editWine, setEditWine] = useState({
        name: props.editWine.name,
        varietal: props.editWine.varietal,
        img: props.editWine.img,
        notes: props.editWine.notes
    })
    const close=()=>{
        props.toggleShow()
    }
      //edit:
      const editOneWine = async (idToEdit, wineToEdit)=>{
        try{

            const editResponse = await fetch(`http://localhost:3001/wines/${idToEdit}`, {
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
        <div>
        
        <h3>edit</h3>
        <form onSubmit={submitEdit}>
                    <input onChange={inputChange}type="text" name="notes" />
                    <button type="submit">Submit</button>
                </form>
        <button onClick={close}>Close</button>
       
        
    </div>
    :
    null
    }
    </>
)
}

export default EditWine