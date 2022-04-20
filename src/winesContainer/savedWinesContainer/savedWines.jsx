import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../App.css'

const SavedWines = (props)=>{
    useEffect(() =>{
        getWines();
    }, [])
    let navigate = useNavigate()
    const [wines, setWines] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [results, setResults] = useState([])

    const user = JSON.parse(localStorage.getItem('props.currentUser'))
    const displayName = user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)

    const getWines = async ()=>{
        try{
            const wines = await fetch (`http://localhost:3001/wines/${user._id}`)
            const parsedWines = await wines.json()
            setWines(parsedWines.data)
        }catch(err){
            console.log(err)
        }
    }

    const deleteWine = async(wine)=>{
       
        try{
            const deleteResponse = await fetch(`http://localhost:3001/wines/${(wine)}`,{
                method:"DELETE"
            })
            const newList = wines.filter((wine)=>wine._id !==(wine))
                setWines(newList)
                getWines()
            if(deleteResponse.status === 204){
                navigate ("/saved-wines")
            } 
                
        }catch(err){
            console.log(err)
        }
    }

    const searchSaved = (searchValue)=>{
        setSearchInput(searchValue)
        console.log(searchValue)
        if(searchInput !== ''){
            const filtered = wines.filter((wine)=>{
                return Object.values(wine).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
            setResults(filtered)
        }else{
            setResults(wines)
        }
        
    }

    return(
        <div id="cellar-page">
            <Link to={'/saved-wines/type'}>See Cellar by Wine Type</Link>
            <div id="search-cellar">
                <h2>Search Cellar:</h2>
                <input icon='search' placeholder='search' value={searchInput}
                onChange={(e)=>searchSaved(e.target.value)} />     
            </div>
        
            <div id="search-cellar-results">
                    {results.map((wine)=>{
                        return(
                            <div id="each-search"key={wine._id}>
                                <h3>{wine.name}</h3>
                                <img src={wine.img}/>
                            </div>
                        )
                        
                    })}
            </div>

            <h2 id="cellar-title">{displayName}'s Wine Cellar: </h2>
            <div id="cellar-list">   
            
            { wines.map((wine)=>{
                return(
                    <div id="each-wine"key={wine._id}>
                        <h3>{wine.name}</h3>
                        <img src={wine.img}></img>
                        <h4>{wine.varietal}</h4>
                    {/* <button onClick={()=>{deleteWine(wine._id)}}>Delete</button> */}
                    </div>
                )
                
            })}

            </div>
            <div id="to-top">
               <a href="#cellar-page">back to top</a>
            </div>
            
         
        </div>
    )
}
export default SavedWines