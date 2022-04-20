import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const SavedWines = (props)=>{
    let navigate = useNavigate()
    const [wines, setWines] = useState([])

    const getWines = async ()=>{
        try{
            const userId = JSON.parse(localStorage.getItem('props.currentUser'))._id
            const wines = await fetch (`http://localhost:3001/wines/${userId}`)
            const parsedWines = await wines.json()
            // console.log(parsedWines.data)
            setWines(parsedWines.data)
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(() =>{
        getWines();
    }, [])

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
    return(
        <div>
            <h2>saved wines:</h2>
            { wines.map((wine)=>{
                return(
                    <div key={wine._id}>
                    <h3>{wine.name}</h3>
                    <h4>{wine.varietal}</h4>
                    <img src={wine.img}></img>
                    <button onClick={()=>{deleteWine(wine._id)}}>Delete</button>
                    </div>
                )
                
            })}
        </div>
    )
}
export default SavedWines