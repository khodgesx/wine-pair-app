import '../App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Wines from './wines'

const Pair = ()=>{
    const [mealInput, setMealInput] = useState('')
    const [winepairs, setWinePairs] = useState([])
    const [text, setText] = useState('')

    const [wineInput, setWineInput] = useState('')
    const [mealpairs, setMealPairs] = useState([])
    const [mealText, setMealText] = useState('')

    const getWinePair = async()=>{
        const apiResponse = await fetch (`https://api.spoonacular.com/food/wine/pairing?food=${mealInput}&number=2&apiKey=cb507c45184a417d93e6e96bb372f637`)
        const parsedResponse = await apiResponse.json()
        console.log(parsedResponse.pairedWines)
        setWinePairs(parsedResponse.pairedWines)
        setText(parsedResponse.pairingText)
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
        setMealPairs(parsedResponse.pairings)
        setMealText(parsedResponse.text)
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
             <section id="wine-for-meal">
                <h2>find wine for meal:</h2>
                <form onSubmit={submitMeal}>
                    <label htmlFor="meal">Meal: </label>
                    <input onChange={inputChange}type="text" name="meal" placeholder="main ingredient or cuisine type" required/>
                    <button type="submit">get pair</button>
                </form>
            
                { winepairs.map ((wine)=>{
                    return(
                        <h2>{wine}</h2>
                    )
                })}
                <p>{text}</p>
             </section>
             <section id="meal-for-wine">
                <h2>find meal for wine:</h2>
                <form onSubmit={submitWine}>
                    <label htmlFor="wine">Wine: </label>
                    <input onChange={inputWineChange}type="text" name="wine" placeholder="wine varietal" required/>
                    <button type="submit">get pair</button>
                </form>
            
                { mealpairs.map ((meal)=>{
                    return(
                        <h2>{meal}</h2>
                    )
                })}
                <p>{mealText}</p>
             </section>
             <section>
                 <Wines></Wines>
             </section>

        </div>
       
    )
}

export default Pair