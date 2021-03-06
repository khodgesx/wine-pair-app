import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Pagination } from 'react-bootstrap'
import '../App.css'
import WineFormContainer from './wineFormContainer/wineFormContainer'
import Footer from '../homeContainer/footerContainer/footer'
import apiUrl from '../apiConfig'

const Wines = ()=>{
    const myRef = useRef()
    const scrollToResults = () => myRef.current.scrollIntoView()

    //input of wine varietal
    const [wineInput, setWineInput] = useState('')
    //type - set on submit from varietal drop down
    const [type, setType] = useState()
    //wines response from api based on input
    const [wines, setWines] = useState([])
    //saved wines array
    const [savedWines, setSavedWines] = useState([])
    //state of new wine before inputs 
    const [newWine, setNewWine] = useState({
        name: '',
        varietal: '',
        img: '',
        type:'',
        notes: '',
        apiId:'',
        mealPairs:[],
        user:''
    })
    const [show, setShow] = useState(false)
    const toggleShow = () => setShow(!show)
    
    const [showError, setShowError] = useState(false)
    const toggleError = () => setShowError(!showError)

    const getWines = async()=>{
        try{
            const apiResponse = await fetch (`https://api.spoonacular.com/food/wine/recommendation?wine=${wineInput}&number=100&apiKey=cb507c45184a417d93e6e96bb372f637`)
            const parsedResponse = await apiResponse.json()
            if(parsedResponse.code === 400){
                setWines(['oops try again!'])
            }else{
                setWines(parsedResponse.recommendedWines)
                getMealPair()
            }
        }catch(err){
            console.log(err)
        } 
    }
    ////////////////////////////////////////////////////////////////////////
    const [pairText, setPairText] = useState('')
    const [meals, setMeals] = useState([])
    ////////////////////////////////////////////////////////////////////////
    const getMealPair = async()=>{
        const apiResponse = await fetch (`https://api.spoonacular.com/food/wine/dishes?wine=${wineInput}&apiKey=cb507c45184a417d93e6e96bb372f637`)
        const parsedResponse = await apiResponse.json()
        if(parsedResponse.code === 400 || parsedResponse.status === 'failure'){
            setMeals([`${wineInput} goes well with everything! Though, I'd start with a pizza pairing.`])
            setPairText('Try again - check the drop down below for suggested varietals')
        }else{
            setMeals(parsedResponse.pairings)
            setPairText(parsedResponse.text)
        }
        
    }
    ////////////////////////////////////////////////////////////////////////

    const user = JSON.parse(localStorage.getItem('currentUser'))

  
    //create:
    const saveWine = async (wineName, wineImage, wineType, wineId) =>{
        try {
            const user = JSON.parse(localStorage.getItem('currentUser'))
            // console.log(wineId)
            const createResponse = await fetch(`${apiUrl}/wines/${user._id}`,{
                method: "POST",
                body: JSON.stringify({
                    name: wineName,
                    varietal: wineInput,
                    img: wineImage,
                    type: wineType,
                    notes: '',
                    apiId: wineId,
                    mealPairs:meals,
                    rating: null
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await createResponse.json()
            if(parsedResponse.success){
                setSavedWines([parsedResponse.data, ...savedWines])
                toggleShow()
                
            }else{
                console.log(parsedResponse)
                toggleError()
            }
         
        } catch (err) {
            console.log(err)
        }
    }
        const submitSave = async(e)=>{
            e.preventDefault()
            saveWine(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value) 
        }

    return(
        <div id="wines-component">
             <section id="wines">
                 
            
                <WineFormContainer 
                    setType={setType}
                    setWineInput={setWineInput}
                    getWines={getWines}
                    scrollToResults={scrollToResults}
                ></WineFormContainer>

                 <div ref={myRef}></div>
                 <div id="footer">
                        <Footer></Footer>
                </div>
            
                { wines.map ((wine)=>{
                    return(
                        
                        <div id="wine-search-map"key={wine.id}>
                            <h2 id="wine-search-title">{wine.title ? wine.title : wineInput }</h2>
    
                            <img src={wine.imageUrl}/>
                            <h3 id="wine-search-price">{wine.price}</h3>
                            <h4 id="wine-rating">score: {Math.round(wine.score*100)}%</h4>
                            <h4 id="wine-rating-count">number of ratings: {wine.ratingCount}</h4>
                            <p id="wine-search-description">{wine.description}</p>

                            { user === null ? <p><b>Login to save!</b></p> 
                            : 
                            <section key={wine.id}>
                                <form onSubmit={submitSave} encType="multipart/form">
                                <div id="form-row">
                            
                                    <input hidden type="text" name="name" 
                                    defaultValue={wine.title ? wine.title : wineInput}></input>
                                </div>

                                
                                <div id="form-row">
    
                                    <input hidden type="text" name="img"  defaultValue={wine.imageUrl}></input>
                
                                </div>  
                                <div id="form-row">
    
                                    <input hidden type="text" name="type"  defaultValue={type}></input>

                                </div>  
                                <div id="form-row">
    
                                    <input hidden type="text" name="apiId"  defaultValue={wine.id}></input>

                                </div>  
                                <div id="form-row">
    
                                    <input hidden type="text" name="mealPairs"  defaultValue={meals}></input>

                                </div>  
                           
                                <button id="submit-save"type="submit">Save</button> 
                                </form>
                                
                               
                            </section> }
                                <button id="back-totop"><a href="#wines-component">Back to Top</a></button>
                               
                                <div>
                                    <Modal id="save-modal-border" show={show} onHide={toggleShow}>
                                        <Modal.Body id="save-modal">
                                            <h3 id="save-success"> save successful!</h3> 
                                            <h3 id="save-success-options"><a id="close"onClick={toggleShow}>Close </a> to keep browsing, or 
                                            { user ? <Link id="link" to={`/saved-wines/user/${user._id}`}> Click here </Link> 
                                            :
                                            null}
                                            
                                                to see wines in your wine cellar</h3>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                                <div>
                                    <Modal id="save-modal-border" show={showError} onHide={toggleError}>
                                        <Modal.Header closeButton></Modal.Header>
                                        <Modal.Body id="save-modal">
                                            <h3 id="save-success"> Looks like you've already saved that wine. You must really love it!</h3> 
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            
                        </div> 
                    )
                })}
              
             </section>
        </div>
         
    )
}

export default Wines