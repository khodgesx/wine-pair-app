import '../App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Pair = ()=>{
    const [mealInput, setMealInput] = useState('')
    const [winepairs, setWinePairs] = useState([])
    const [text, setText] = useState('')

    const getWinePair = async()=>{
        const apiResponse = await fetch (`https://api.spoonacular.com/food/wine/pairing?food=${mealInput}&number=2&apiKey=cb507c45184a417d93e6e96bb372f637`)
        const parsedResponse = await apiResponse.json()
        // console.log(parsedResponse.pairedWines)
        setWinePairs(parsedResponse.pairedWines)
        setText(parsedResponse.pairingText)

        const data = new FormData()
        data.append('meal', mealInput.meal)
    }
    const inputChange=(e)=>{
        setMealInput([e.target.name]=e.target.value)
    }
    const submitMeal = async(e)=>{
        e.preventDefault()
        getWinePair()
    }

    return(
        <div>
            <h2>pair here</h2>
            <form onSubmit={submitMeal}>
                <label htmlFor="meal">Meal: </label>
                <input onChange={inputChange}type="text" name="meal" placeholder="main ingredient or cuisine type"></input>
            </form>
            <button onSubmit={getWinePair}>get pair</button>
            { winepairs.map ((wine)=>{
                return(
                    <h2>{wine}</h2>
                )
            })}
            <p>{text}</p>
        </div>
    )
}

export default Pair