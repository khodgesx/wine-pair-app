import { useState } from 'react'
import '../../../App.css' 


const EditWine =(props)=>{
  const [editWine, setEditWine] = useState({
        name: props.editWine.name,
        varietal: props.editWine.varietal,
        img: props.editWine.img,
        notes: props.editWine.notes,
        rating: props.editWine.rating
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