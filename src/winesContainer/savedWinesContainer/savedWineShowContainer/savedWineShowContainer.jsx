import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import EditOneWine from '../editOneWineContainer/editOneWine'
import EditWine from '../editWineContainer/editWine'
import { Modal } from 'react-bootstrap'


const SavedWineShow = (props)=>{
    let params = useParams()
    const id = params.id
    useEffect(() =>{
        getWine();
    }, [])
    const [currentWine, setCurrentWine] = useState()

    const [showModal, setShowModal] = useState(false)
    const toggleShow=()=>setShowModal(!showModal)
    const [editWine, setEditWine] = useState({})
    //wine cellar show one:
    const getWine = async ()=>{
        try{
            const wine = await fetch (`http://localhost:3001/wines/${id}`)
            const parsedWine = await wine.json()
            setCurrentWine(parsedWine.data)
            // console.log(currentWine)
            // console.log(currentWine._id)
            setEditWine(parsedWine.data)
        }catch(err){
            console.log(err)
        }
    }
     //edit:
     const editOneWine = async (idToEdit, wineToEdit)=>{
        try{

            const editResponse = await fetch(`http://localhost:3001/${idToEdit}`, {
                method:"PUT",
                body:JSON.stringify(wineToEdit),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedEdit = await editResponse.json()
            if(parsedEdit.success){
                const newArray = props.wineCellar.map(wine => wine._id === idToEdit ? wineToEdit : wine)
                props.setWineCellar(newArray)
                console.log(props.wineCellar)
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
        editOneWine(currentWine._id, editWine)
        
    }
 
    return(
        <>
        { currentWine ? 
            <div id="one-wine-show">
            <h2>{currentWine.name}</h2>
            <img src={currentWine.img}/>
            <h3>notes: {currentWine.notes}</h3>
            {/* <Link to={`/saved-wines/${currentWine._id}/edit`}>
                </Link> */}
                
                <button onClick={setShowModal}>click to add notes </button>
         
                <Modal show={showModal} onHide={toggleShow}>
                    {/* <Modal.Header closeButton>X</Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <EditWine 
                            id={id}
                            editWine={editWine}
                            wineCellar={props.wineCellar}
                            setWineCellar={props.setWineCellar}
                            toggleShow={toggleShow}></EditWine>
                        </div>
                        
                    </Modal.Body>
                    
                </Modal>

            
                {/* <form >
                    <input onChange={inputChange}type="text" name="notes" value={editWine.notes}/>
                    <button type="submit" value="submit"/>
                </form> */}
          
        </div>
        :
        null}
         </>
       
    )
}
export default SavedWineShow