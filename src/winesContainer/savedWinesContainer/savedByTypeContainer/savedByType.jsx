import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../../App.css'
import Footer from '../../../homeContainer/footerContainer/footer'
import apiUrl from '../../../apiConfig'

const SavedByType = (props)=>{
    useEffect(() =>{
        getAndSort();
        // getUserInfo();
       
    }, [])
    const [wines, setWines] = useState([])
    const [typeShow, setTypeShow] = useState([])
    const [type, setType] = useState()
////////////////////////////////////
    let params = useParams()
    let cellarId = params.id

    // const [cellarOwner, setCellarOwner] = useState({})
    //  //get info about whose cellar this is:
    //  const getUserInfo = async ()=>{
    //     try{
    //         const user = await fetch (`${apiUrl}/users/${cellarId}`)
    //         const parsedUser = await user.json()
    //         await setCellarOwner(parsedUser.data)
    //         console.log('params', cellarId)
    //         console.log('cellar-owner state id', cellarOwner._id)
    //         getAndSort()
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

/////////////////////////////////////

    const getAndSort =async()=>{
        const wines = await getWines();
        sortWines(wines);
        setWineType()
        // console.log(cellarId)
       } 
   
    const user = JSON.parse(localStorage.getItem('currentUser'))
    
    const getWines = async ()=>{
      try{
          const wineFetch = await fetch (`${apiUrl}/wines/user/${user._id}`)
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
    const setWineType=()=>{
        setType(props.type)
    }
    
    return(
       
        <div id="type-list">
            <h2 id="type-title">{user.displayName}'s {type === 'red' ? 'Red' : type === 'white' ? 'White' : type === 'sparkling' ?
            'Sparkling' : 'Dessert/Other'} Wines:</h2>
            { typeShow.length === 0 ? 
            <div id="no-wines-by-type">
               
                <div className="no-type-message"> 
                    { type === 'red' ? <img className="glass" alt="red wine glass"src="https://i.imgur.com/dl3mHFY.jpg"/>
                    : type === 'white' ? <img className="glass" alt="white wine glass"src="https://i.imgur.com/d43ykBO.jpg"/> 
                    : type === 'sparkling' ? <img className="glass" alt="sparkling wine glass"src="https://i.imgur.com/nd8unGv.jpg"/> 
                    :  <img className="glass" alt="dessert wine glass"src="https://i.imgur.com/94mPFSW.jpg"/> }
                    <h2>Your cellar does not have any wines in the category, 
                        '{type === 'red' ? 'Red' : type === 'white' ? 'White' : type === 'sparkling' ?
                        'Sparkling' : 'Dessert/Other'} Wines.' <br/><br/> 
                    <Link to='/wines'>Search for some here</Link> or
                    <Link to='/new'> add your own here</Link></h2>
                    
                </div>
           
           
            </div>
            : 
            <div id="type">
                    { typeShow.map ((type)=>{
                        return(
                            <div id="type-each" key={type._id}>
                                <h3>{type.name}</h3>
                                <Link to={`/saved-wines/${type._id}`}><img src={type.img}></img></Link>
                                <h3>{type.varietal}</h3>
                            </div>
                        )
                    })}
            
                </div>
            }
            <div id="footer">
            <Footer></Footer>
        </div>
        </div>
       
    )

}
export default SavedByType