import {useState, useEffect} from 'react'

const SavedWines = (props)=>{
    const [wines, setWines] = useState([])

    const getWines = async ()=>{
        try{
            const userId = JSON.parse(localStorage.getItem('props.currentUser'))._id
            const wines = await fetch (`http://localhost:3001/wines/${userId}`)
            const parsedWines = await wines.json()
            console.log(parsedWines.data)
            setWines(parsedWines.data)
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(() =>{
        getWines();
    }, [])
    return(
        <div>
            <h2>saved wines:</h2>
            { wines.map((wine)=>{
                return(
                    <div key={wine._id}>
                    <h3>{wine.name}</h3>
                    <h4>{wine.varietal}</h4>
                    <img src={wine.img}></img>
                    </div>
                )
                
            })}
        </div>
    )
}
export default SavedWines