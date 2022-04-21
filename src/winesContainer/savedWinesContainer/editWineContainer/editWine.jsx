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
return(
    <>
    { editWine ?
        <div>
        
        <h3>edit</h3>
        <form onSubmit={props.onSubmit}>
                    <input onChange={props.inputChange}type="text" name="notes" defaultValue={editWine.notes}/>
                    <button type="submit" value="submit">Submit</button>
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