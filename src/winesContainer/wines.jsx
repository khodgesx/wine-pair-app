import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import '../App.css'
import WineFormContainer from './wineFormContainer/wineFormContainer'


const Wines = (props)=>{
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
        user:''
    })
    const [show, setShow] = useState(false)
    const toggleShow = () => setShow(!show)
 

    const getWines = async()=>{
        try{
            const apiResponse = await fetch (`https://api.spoonacular.com/food/wine/recommendation?wine=${wineInput}&number=100&apiKey=cb507c45184a417d93e6e96bb372f637`)
            const parsedResponse = await apiResponse.json()
            if(parsedResponse.code === 400){
                setWines(['oops try again!'])
            }else{
                setWines(parsedResponse.recommendedWines)

                console.log(parsedResponse)
            }
        }catch(err){
            console.log(err)
        } 
    }

    const user = JSON.parse(localStorage.getItem('props.currentUser'))

  
    //create:
    const saveWine = async (wineName, wineImage, wineType) =>{
        try {
            const user = JSON.parse(localStorage.getItem('props.currentUser'))
            console.log(type)
            const createResponse = await fetch(`http://localhost:3001/wines/${user._id}`,{
                method: "POST",
                body: JSON.stringify({
                    name: wineName,
                    varietal: wineInput,
                    img: wineImage,
                    type: wineType,
                    notes: '',
                    rating: null
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await createResponse.json()
            if(parsedResponse.success){
                setSavedWines([parsedResponse.data, ...savedWines])
                // console.log(parsedResponse.data)
                // alert('wine saved!')
                toggleShow()
                
            }else{
                console.log(parsedResponse.data)
            }
         
        } catch (err) {
            console.log(err)
        }
    }
        const submitSave = async(e)=>{
            e.preventDefault()
            saveWine(e.target[0].value, e.target[1].value, e.target[2].value) 
        }

    return(
        <div id="wines-component">
             <section id="wines">

                <WineFormContainer 
                    setType={setType}
                    setWineInput={setWineInput}
                    getWines={getWines}
                ></WineFormContainer>
              
            
                { wines.map ((wine)=>{
                    return(
                        <div id="wine-search-map"key={wine.id}>
                            <h2 id="wine-search-title">{wine.title ? wine.title : wineInput }</h2>
    
                            <img src={wine.imageUrl}/>
                            <h3 id="wine-search-price">{wine.price}</h3>
                            <h4 id="wine-rating-count">rating count: {wine.ratingCount}</h4>
                            <h4 id="wine-rating">score: {wine.score}</h4>
                            <p id="wine-search-description">{wine.description}</p>
                            { user === null ? <p>login to save!</p> 
                            : 
                            <section key={wine.id}>
                                <form onSubmit={submitSave} encType="multipart/form">
                                <div id="form-row">
                            
                                    <input hidden type="text" name="name" 
                                    defaultValue={wine.title ? wine.title : wineInput}></input>
                                </div>

                                {/* <div id="form-row">
                                    <label htmlFor="name">Varietal</label>
                                    <input onChange ={inputSave}type="text" name="varietal" value={wineInput}></input>
                                </div> */}
                                
                                <div id="form-row">
    
                                    <input hidden type="text" name="img"  defaultValue={wine.imageUrl}></input>
                
                                </div>  
                                <div id="form-row">
    
                                    <input hidden type="text" name="type"  defaultValue={type}></input>

                                </div>  
                                {/* <div id="form-row"> 
                                    <label htmlFor="name">Notes:</label>
                                    <input onChange ={inputSave} type="text" name="notes"value=''></input>
                                </div> */}
                                <button id="submit-save"type="submit">Save</button> 
                                </form>
                                
                                </section> }
                                <button id="back-totop"><a href="#wines-component">Back to Top</a></button>
                                <div>
                            <Modal show={show} onHide={toggleShow}>
                                save successful! close to keep browsing, or <Link to="/saved-wines">click here</Link> to see saved wines in your wine cellar
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