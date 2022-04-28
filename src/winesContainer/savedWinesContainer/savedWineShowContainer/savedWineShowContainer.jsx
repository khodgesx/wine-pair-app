import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import EditWine from '../editWineContainer/editWine'
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../App.css'
import Footer from '../../../homeContainer/footerContainer/footer'
import apiUrl from '../../../apiConfig'


const SavedWineShow = (props)=>{
    let params = useParams()
    const id = params.id
    let navigate = useNavigate()

    useEffect(() =>{
        getWine();
    }, [])
    const [currentWine, setCurrentWine] = useState()

    const [showModal, setShowModal] = useState(false)
    const toggleShow=()=>setShowModal(!showModal)
    const [editWine, setEditWine] = useState({})

    const [wine, setWine] = useState()

    //current user who is logged in:
    const user = JSON.parse(localStorage.getItem('currentUser'))

    //wine cellar show one:
    const getWine = async ()=>{
        try{
            const wine = await fetch (`${apiUrl}/wines/${id}`)
            const parsedWine = await wine.json()
            setCurrentWine(parsedWine.data)
            setEditWine(parsedWine.data)
            setWine(parsedWine.data.varietal)
            //cellar owner id:
            // console.log(parsedWine.data.user)
            //current user logged in id:
            // console.log(user._id)
        }catch(err){
            console.log(err)
        }
    }
    const deleteWine = async(wine)=>{
       
        try{
            const deleteResponse = await fetch(`${apiUrl}/wines/${(wine)}`,{
                method:"DELETE"
            })
            const newList = props.wineCellar.filter((wine)=>wine._id !==(wine))
                props.setWineCellar(newList)
                navigate (`/saved-wines/user/${user._id}`)
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
                <h3>Vatietal: {currentWine.varietal} </h3>
                 {currentWine.rating?<h3>Rating: {currentWine.rating}/5 </h3>: <h3>No rating</h3>}
                 {currentWine.notes?<h3>Notes: {currentWine.notes} </h3>: <h3>No notes</h3>}


                { user._id === currentWine.user ? 
                <div id="show-page-buttons">
                    <button onClick={setShowModal}>Click to Edit </button>
                    <button onClick={()=>{deleteWine(id)}}>Delete</button>
                </div>
                :
                null
                }

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
                            <li key={meal.length + meal.charAt(meal.length-1)}>{meal}</li>
                        )
                    })}
                </div>
        </div>
        :
        null}
        <div id="footer">
            <Footer></Footer>
        </div>
         </>
       
    )
}
export default SavedWineShow