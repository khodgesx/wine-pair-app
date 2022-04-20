import {useState, useEffect} from 'react'

const SavedByType = (props)=>{
    useEffect(() =>{
        getWines();
    }, [])
    const [wines, setWines] = useState([])
    const [reds, setReds] = useState([])
    const [whites, setWhites] = useState([])

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

    const sortWines =()=>{
        const redArray = wines.filter((wine)=>{
            // return wine.varietal === 'pinot noir' || 'cabernet sauvignon' || 'cabernet franc' || ''
        }) 
    }
    
    return(
        <h1>types!</h1>
    )

}
export default SavedByType