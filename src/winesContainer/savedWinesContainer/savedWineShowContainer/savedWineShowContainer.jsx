import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EditWine from '../editWineContainer/editWine'
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../App.css'


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

    const [wine, setWine] = useState()


    //wine cellar show one:
    const getWine = async ()=>{
        try{
            const wine = await fetch (`http://localhost:3001/wines/${id}`)
            const parsedWine = await wine.json()
            setCurrentWine(parsedWine.data)
            setEditWine(parsedWine.data)
            setWine(parsedWine.data.varietal)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
        { currentWine ? 
            <div id="one-wine-show">
                <h2>{currentWine.name}</h2>
                <img src={currentWine.img}/>
                 {currentWine.rating?<h3>Rating: {currentWine.rating}/5 </h3>: <h3>No rating</h3>}
                 {currentWine.notes?<h3>Notes: {currentWine.notes} </h3>: <h3>No notes</h3>}
                
                <button onClick={setShowModal}>click to edit </button>

                <Modal show={showModal} onHide={toggleShow}>
                    <Modal.Body>
                            <EditWine 
                                id={id}
                                currentWine={currentWine}
                                editWine={editWine}
                                wineCellar={props.wineCellar}
                                setWineCellar={props.setWineCellar}
                                toggleShow={toggleShow}>
                            </EditWine>
                    </Modal.Body>
                </Modal>
                <div id="saved-wine-meals">
                    <h4>recommended meal pairing:</h4>
                    { currentWine.mealPairs.map((meal)=>{
                        return(
                            <li>{meal}</li>
                        )
                    })}
                </div>
        </div>
        :
        null}
         </>
       
    )
}
export default SavedWineShow