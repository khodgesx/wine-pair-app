import { useState, useEffect } from 'react'
import '../App.css'
import WineFormContainer from './wineFormContainer/wineFormContainer'

const Wines = (props)=>{
    //input of wine varietal
    const [wineInput, setWineInput] = useState('')
    //wines response from api based on input
    const [wines, setWines] = useState([])
    //saved wines array
    const [savedWines, setSavedWines] = useState([])
    //state of new wine before inputs 
    const [newWine, setNewWine] = useState({
        name: '',
        // type: '',
        varietal:'', 
        img:'',
        notes:'',
        user:''
    })

    const getWines = async()=>{
        try{
            const apiResponse = await fetch (`https://api.spoonacular.com/food/wine/recommendation?wine=${wineInput}&number=100&apiKey=cb507c45184a417d93e6e96bb372f637`)
            const parsedResponse = await apiResponse.json()
            if(parsedResponse.code === 400){
                window.location.reload()
                alert("oops not a valid input!")
            }else{
                // console.log(parsedResponse)
                setWines(parsedResponse.recommendedWines)
            }
        }catch(err){
            console.log(err)
        } 
    }
    
    const user = JSON.parse(localStorage.getItem('props.currentUser'))

  
    //create:
    const saveWine = async (wineName, wineImage) =>{
        try {
            const user = JSON.parse(localStorage.getItem('props.currentUser'))
            // console.log(wineName, wineInput)
            const createResponse = await fetch(`http://localhost:3001/wines/${user._id}`,{
                method: "POST",
                body: JSON.stringify({
                    name: wineName,
                    varietal: wineInput,
                    img: wineImage,
                    notes: ''
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await createResponse.json()
            if(parsedResponse.success){
                setSavedWines([parsedResponse.data, ...savedWines])
                console.log(parsedResponse.data.name)
                testSet()
                
            }else{
                console.log(parsedResponse.data)
            }
         
        } catch (err) {
            console.log(err)
        }
    }
    const testSet=()=>{
        props.setWineCellar(savedWines)
    }

        const submitSave = async(e)=>{
            e.preventDefault()
            saveWine(e.target[0].value, e.target[1].value) 
        }

    return(
        <div id="wines-component">
             <section id="wines">
                <h2>Find wines by type:</h2>

                <WineFormContainer 
                    setWineInput={setWineInput}
                    getWines={getWines}
                ></WineFormContainer>
              
            
                { wines.map ((wine)=>{
                    return(
                        <div key={wine.id}>
                            <h2>{wine.title}</h2>
                            <img src={wine.imageUrl}/>
                            <h3>{wine.price}</h3>
                            <h4>rating count: {wine.ratingCount}</h4>
                            <h4>score: {wine.score}</h4>
                            <p>{wine.description}</p>
                            { user === null ? <p>login to save!</p> 
                            : 
                            <section key={wine.id}>
                                <form onSubmit={submitSave} encType="multipart/form">
                                <div id="form-row">
                            
                                    <input hidden type="text" name="name" defaultValue={wine.title}></input>
                                </div>

                                {/* <div id="form-row">
                                    <label htmlFor="name">Varietal</label>
                                    <input onChange ={inputSave}type="text" name="varietal" value={wineInput}></input>
                                </div> */}
                                
                                <div id="form-row">
    
                                    <input hidden type="text" name="img"  defaultValue={wine.imageUrl}></input>
                
                                </div>  
                                {/* <div id="form-row"> 
                                    <label htmlFor="name">Notes:</label>
                                    <input onChange ={inputSave} type="text" name="notes"value=''></input>
                                </div> */}
                                <button type="submit">Save</button> 
                                </form>
                                
                                </section> }
                                <button><a href="#wines-component">Back to Top</a></button>
                        </div>
                    )
                })}
                
             </section>
        </div>
    )
}

export default Wines