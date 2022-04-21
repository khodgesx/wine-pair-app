import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Modal } from 'react-bootstrap'

const EditOneWine =(props)=>{
  const [editWine, setEditWine] = useState({
        // name: props.currentWine.name,
        // varietal: props.currentWine.varietal,
        // img: props.currentWine.img,
        // notes: props.currentWine.notes
    })
return(
    <>
    { editWine ?
        <div>
        
        <h3>edit</h3>
        <button onClick={props.toggleShow}>Close</button>
       
        
    </div>
    :
    null
    }
    </>
)
}

export default EditOneWine