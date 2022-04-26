import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import EditOneWine from '../editOneWineContainer/editOneWine'
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
    const [mealPairs, setMealPairs] =useState([])
    const [mealText, setMealText] =useState('')

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
    const getMealPair = async()=>{
        console.log(wine)
        const apiResponse = await fetch (`https://api.spoonacular.com/food/wine/dishes?wine=${wine}&apiKey=cb507c45184a417d93e6e96bb372f637`)
        const parsedResponse = await apiResponse.json()
        if(parsedResponse.code === 400 || parsedResponse.status === 'failure'){

            setMealPairs([''])
            setMealText(`${wine} goes with everything, but try it with pizza first.`)
        }else{
       
            setMealPairs(parsedResponse.pairings)
            setMealText(parsedResponse.text)
        }
        
    }

  
    const submitWine = async(e)=>{
        e.preventDefault()
        getMealPair()
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
                <button onClick={submitWine}>Get foodzzzzzzzz</button>
                <div>
                    <p>{mealText}</p>
                </div>
        </div>
        :
        null}
         </>
       
    )
}
export default SavedWineShow