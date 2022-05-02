import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import '../../App.css'
import Footer from '../../homeContainer/footerContainer/footer'
import apiUrl from '../../apiConfig'


const SavedWines = ()=>{
    useEffect(() =>{
        getWines();
        getUserInfo()
    }, [])
    let navigate = useNavigate()
    
    let params = useParams()
    let id = params.id

    const [wineCellar, setWineCellar] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [results, setResults] = useState([])

    const [show, setShow] = useState(false)
    const toggleShow = ()=>setShow(!show)

    //current user who is logged in:
    const user = JSON.parse(localStorage.getItem('currentUser'))
    
    //user whose cellar it is:
    const [cellarOwner, setCellarOwner] = useState({})

    // wine cellar index:
    const getWines = async ()=>{
        try{
            //get wines by user id = all saved wines for that user in mongodb
            const wines = await fetch (`${apiUrl}/wines/user/${id}`)
            const parsedWines = await wines.json()
            setWineCellar(parsedWines.data.reverse())
        }catch(err){
            console.log(err)
        }
    }
    //get info about whose cellar this is:
    const getUserInfo = async ()=>{
        try{
            const user = await fetch (`${apiUrl}/users/${id}`)
            const parsedUser = await user.json()
            setCellarOwner(parsedUser.data)
            // console.log(parsedUser.data)
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

    if(user._id === id){

    
    return(
        <div id="cellar-page">
         
              <div id="add-new-links">
                <img onClick={toggleShow}className="glass" src="https://i.imgur.com/Kb4obeQ.png"></img>
                <h3 id="add">add wine to your cellar</h3>
              
                <Modal id="add-modal"show={show} onHide={toggleShow}>
                    <img id="add-img"src="https://i.imgur.com/Kb4obeQ.png"></img>
                    <Link className="add-links" to="/wine-form-choice"><li >Search digital universe by varietal</li></Link>
                    <Link className="add-links"to="/new"><li >add new wine manually</li></Link>
                    <button onClick={toggleShow}>Close</button>
                </Modal>
            </div>
           
    
    
            <h5 id="choose">Choose a wine by type:</h5>
          
            
         
            <div id="links-to-types">
                <Link to={`/saved-wines/red`}><img className="glass" alt="red wine glass"src="https://i.imgur.com/dl3mHFY.jpg"></img></Link>
                <Link to={'/saved-wines/white'}><img className="glass"alt="white wine glass" src="https://i.imgur.com/d43ykBO.jpg"></img></Link>
                <Link to={'/saved-wines/sparkling'}><img className="glass" alt="sparkling wine glass"src="https://i.imgur.com/nd8unGv.jpg"></img></Link>
                <Link to={'/saved-wines/other'}><img className="glass" alt="dessert wine glass"src="https://i.imgur.com/94mPFSW.jpg"></img></Link>
            </div>
     
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
                                <img alt="wine label
                                "src={wine.img}/>
                            </div>
                        )
                        
                    })}
            </div>

            <h2 id="cellar-title">{cellarOwner.displayName}'s Wine Cellar: </h2>

            <div id="cellar-list">   
            
                { wineCellar.map((wine)=>{
                    return(
                        <div id="each-wine"key={wine._id}>
                            <Link to={`/saved-wines/${wine._id}`}><img alt="wine label"src={wine.img}></img></Link>
                            <h4>{wine.varietal}</h4>
                        </div>
                    )
                    
                })}

            </div>
            <div id="to-top">
               <a href="#cellar-page">back to top</a>
            </div>
            
            <div id="footer">
            <Footer></Footer>
        </div>
        </div>
    )}else{
        return(
            <div id="cellar-page">
    
   
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
                              <img alt="wine label
                              "src={wine.img}/>
                          </div>
                      )
                      
                  })}
          </div>

          <h2 id="cellar-title">{cellarOwner.displayName}'s Wine Cellar: </h2>

          <div id="cellar-list">   
          
              { wineCellar.map((wine)=>{
                  return(
                      <div id="each-wine"key={wine._id}>
                          <Link to={`/saved-wines/${wine._id}`}><img alt="wine label"src={wine.img}></img></Link>
                          <h4>{wine.varietal}</h4>
                      </div>
                  )
                  
              })}

          </div>
          <div id="to-top">
             <a href="#cellar-page">back to top</a>
          </div>
          
          <div id="footer">
          <Footer></Footer>
      </div>
      </div>
        )
    }
}
export default SavedWines