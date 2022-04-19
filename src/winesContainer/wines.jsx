import {useState} from 'react'
import '../App.css'

const Wines = (props)=>{
    const [wineInput, setWineInput] = useState('')
    const [wines, setWines] = useState([])

    const getWines = async()=>{
        const apiResponse = await fetch (`https://api.spoonacular.com/food/wine/recommendation?wine=${wineInput}&number=100&apiKey=cb507c45184a417d93e6e96bb372f637`)
        const parsedResponse = await apiResponse.json()
        console.log(parsedResponse)
        setWines(parsedResponse.recommendedWines)
    }
    const inputChange=(e)=>{
        setWineInput([e.target.name]=e.target.value)
    }
    const submitWine = async(e)=>{
        e.preventDefault()
        getWines()
    }
    
    const user = JSON.parse(localStorage.getItem('props.currentUser'))

    const test = (wine)=>{
        console.log(`save ${wine}?`)
    }

    return(
        <div id="wines-component">
             <section id="wines">
                <h2>Find by varietal</h2>
                <form onSubmit={submitWine}>
                    <label htmlFor="wine">Wine: </label>
                    <input onChange={inputChange}type="text" name="wine" placeholder="input varietal" required></input>
                    <button type="submit">get wines</button>
                </form>
            
                { wines.map ((wine)=>{
                    return(
                        <div>
                            <h2>{wine.title}</h2>
                            <p>{wine.description}</p>
                            { user === null ? <p>login to save!</p> 
                            : <button onClick={()=>{test(wine.title)}}>Save</button>  }
                        </div>
                    )
                })}
 
             </section>
        </div>
    )
}

export default Wines