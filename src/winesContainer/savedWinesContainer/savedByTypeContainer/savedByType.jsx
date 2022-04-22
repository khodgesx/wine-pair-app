import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SavedByType = (props)=>{
    useEffect(() =>{
       getAndSort();
    }, [])
    const [wines, setWines] = useState([])
    const [typeShow, setTypeShow] = useState([])
    const [type, setType] = useState()

   

    const getAndSort =async()=>{
        const wines = await getWines();
        sortWines(wines);
        testing()
       } 
   
    const user = JSON.parse(localStorage.getItem('props.currentUser'))
    const getWines = async ()=>{
      try{
          const wineFetch = await fetch (`http://localhost:3001/wines/user/${user._id}`)
          const parsedWines = await wineFetch.json()
          setWines(parsedWines.data)
          return parsedWines.data
      }catch(err){
          console.log(err)
      }
    }

    const sortWines =(wines)=>{
        const arrayByType = wines.filter((wine)=>{
            return wine.type === props.type
        })
        setTypeShow(arrayByType) 
    }
    const testing=()=>{
        setType(props.type)
    }
    
    return(
       
        <div>
            <div id="type">
                <h2>{user.displayName}'s {type} wines:</h2>
                { typeShow.map ((type)=>{
                    return(
                        <div key={type._id}>
                            <h3>{type.name}</h3>
                            <img src={type.img}></img>
                        </div>
                    )
                })}
            </div>
        </div>
       
    )

}
export default SavedByType