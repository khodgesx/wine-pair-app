import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import '../../App.css'


const SavedWines = (props)=>{
    useEffect(() =>{
        getWines();
    }, [])
    let navigate = useNavigate()
    const [wineCellar, setWineCellar] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [results, setResults] = useState([])

    const [show, setShow] = useState(false)
    const toggleShow = ()=>setShow(!show)

    const user = JSON.parse(localStorage.getItem('props.currentUser'))
    const displayName = user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)

    // wine cellar index:
    const getWines = async ()=>{
        try{
            //get wines by user id = all saved wines for that user in mongodb
            const wines = await fetch (`http://localhost:3001/wines/user/${user._id}`)
            const parsedWines = await wines.json()
            setWineCellar(parsedWines.data)

        }catch(err){
            console.log(err)
        }
    }
  

    const deleteWine = async(wine)=>{
       
        try{
            const deleteResponse = await fetch(`http://localhost:3001/wines/${(wine)}`,{
                method:"DELETE"
            })
            const newList = wineCellar.filter((wine)=>wine._id !==(wine))
                setWineCellar(newList)
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
            const filtered = wineCellar.filter((wine)=>{
                return Object.values(wine).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
            setResults(filtered)
        }else{
            setResults(wineCellar)
        }
        
    }

    return(
        <div id="cellar-page">
            <h5>Choose a wine by type</h5>
            <div id="links-to-types">
                <Link to={'/saved-wines/red'}><img className="glass" alt="red wine glass"src="https://i.imgur.com/dl3mHFY.jpg"></img></Link>
                <Link to={'/saved-wines/white'}><img className="glass"alt="white wine glass" src="https://i.imgur.com/d43ykBO.jpg"></img></Link>
                <Link to={'/saved-wines/sparkling'}><img className="glass" alt="sparkling wine glass"src="https://i.imgur.com/nd8unGv.jpg"></img></Link>
                <Link to={'/saved-wines/other'}><img className="glass" alt="dessert wine glass"src="https://i.imgur.com/94mPFSW.jpg"></img></Link>
            </div>

            <div id="search-cellar">
                <h2>Search Cellar:</h2>
                <input icon='search' placeholder='search' value={searchInput}
                onChange={(e)=>searchSaved(e.target.value)} />     
            </div>

            <div>
                <img onClick={toggleShow}className="glass" src="https://i.imgur.com/Kb4obeQ.png"></img>
                <h3 >add wine to your cellar</h3>
                <Modal show={show} onHide={toggleShow}>
                    <Link to="/pair">Search digital universe by varietal</Link>
                    <Link to="/new">add new wine manually</Link>
                </Modal>
            </div>
        
            <div id="search-cellar-results">
                    {results.map((wine)=>{
                        return(
                            <div id="each-search"key={wine._id}>
                                <h3>{wine.name}</h3>
                                <img alt="wine label
                                "src={wine.img}/>
                            </div>
                        )
                        
                    })}
            </div>

            <h2 id="cellar-title">{displayName}'s Wine Cellar: </h2>
            <div id="cellar-list">   
            
            { wineCellar.map((wine)=>{
                return(
                    <div id="each-wine"key={wine._id}>
                        <h3>{wine.name}</h3>
                        <Link to={`/saved-wines/${wine._id}`}><img alt="wine label"src={wine.img}></img></Link>
                        <h4>{wine.varietal}</h4>
                        <h4>type:{wine.type}</h4>
                        <button onClick={()=>{deleteWine(wine._id)}}>Delete</button>
                        
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