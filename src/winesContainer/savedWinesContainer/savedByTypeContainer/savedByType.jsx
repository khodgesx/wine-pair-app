import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../../App.css'

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
        setWineType()
       } 
   
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const displayName = user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)

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
        console.log(type)
    }
    const setWineType=()=>{
        setType(props.type)
    }
    
    return(
        <div id="type-list">
            <h2 id="type-title">{displayName}'s {type} wines:</h2>
            { typeShow.length === 0 ? 
            <div>
                { type !== 'other' ?  
                <h2>Your cellar does not have any wines in the category, '{type} wines. ' <Link to='/pair'>Search for some here</Link> or
                <Link to='/new'> add your own here</Link></h2>
                :
                
                <h2>Your cellar does not have any wines in the category, 'dessert/other wines. '<Link to='/pair'>Search for some here</Link> or   
                <Link to='/new'> add your own here</Link></h2>
            }
            </div>
            : 
            <div id="type">
                    { typeShow.map ((type)=>{
                        return(
                            <div id="type-each" key={type._id}>
                                <h3>{type.name}</h3>
                                <Link to={`/saved-wines/${type._id}`}><img src={type.img}></img></Link>
                            </div>
                        )
                    })}
            
                </div>
            }
        </div>
       
    )

}
export default SavedByType