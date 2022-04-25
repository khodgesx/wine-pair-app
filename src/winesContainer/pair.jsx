import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Wines from './wines'
import { propTypes } from 'react-bootstrap/esm/Image'

const Pair = (props)=>{
    const [mealInput, setMealInput] = useState('')
    const [winepairs, setWinePairs] = useState([])
    const [text, setText] = useState('')
    const [product, setProduct] = useState('')

    const [wineInput, setWineInput] = useState('')
    const [mealpairs, setMealPairs] = useState([])
    const [mealText, setMealText] = useState('')

    const getWinePair = async()=>{
        const apiResponse = await fetch (`https://api.spoonacular.com/food/wine/pairing?food=${mealInput}&number=2&apiKey=cb507c45184a417d93e6e96bb372f637`)
        const parsedResponse = await apiResponse.json()
        if(parsedResponse.pairingText === '' || parsedResponse.status === 'failure'){
            setWinePairs([''])
            setText('Try wording that differently')
        }else{
            console.log(parsedResponse)
            setWinePairs(parsedResponse.pairedWines)
            setText(parsedResponse.pairingText)
            setProduct(parsedResponse.productMatches[0].link)
        }
    }
    const inputChange=(e)=>{
        setMealInput([e.target.name]=e.target.value)
    }
    const submitMeal = async(e)=>{
        e.preventDefault()
        getWinePair()
    }

    const getMealPair = async()=>{
        const apiResponse = await fetch (`https://api.spoonacular.com/food/wine/dishes?wine=${wineInput}&apiKey=cb507c45184a417d93e6e96bb372f637`)
        const parsedResponse = await apiResponse.json()
        if(parsedResponse.code === 400 || parsedResponse.status === 'failure'){
            // window.location.reload()
            // alert("oops, not a valid wine type!")
            setMealPairs([''])
            setMealText('Try again - check the drop down below for suggested varietals')
        }else{
            setMealPairs(parsedResponse.pairings)
            setMealText(parsedResponse.text)
        }
        
    }
    const inputWineChange=(e)=>{
        setWineInput([e.target.name]=e.target.value)
    }
    const submitWine = async(e)=>{
        e.preventDefault()
        getMealPair()
    }

    return(
        <div id="pair-component">

            {props.form === 'find-wine' ?
             <section id="wine-for-meal">
                <h2>find wine for meal:</h2>
                <form onSubmit={submitMeal}>
                    <label htmlFor="meal">Meal: </label>
                    <input onChange={inputChange}type="text" name="meal" placeholder="main or cuisine type" required/>
                    <button type="submit">get pair</button>
                </form>
            
                { winepairs.map ((wine)=>{
                    return(
                        <h2 key={wine.index}>{wine}</h2>
                    )
                })}
                <p key={text.id}>{text}</p>
                {product ? <a href={product} target="_blank">Check this option out!</a> : <p></p>}
             </section>

           :
             <section id="meal-for-wine">
                <h2>find meal for wine:</h2>
                <form onSubmit={submitWine}>
                    <label htmlFor="wine">Wine: </label>
                    <input onChange={inputWineChange}type="text" name="wine" placeholder="wine varietal" required/>
                    <button type="submit">get pair</button>
                </form>
            
                { mealpairs.map ((meal)=>{
                    return(
                        <div key={meal.id}>
                            <h2>{meal}</h2>
                        </div>
                        
                    )
                })}
                <p>{mealText}</p>
             </section>
             }
             {/* <section id="wine-results">
                 <Wines></Wines>
             </section> */}
            
        </div>
            
       
    )
}

export default Pair