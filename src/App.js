import logo from './logo.svg'
import './App.css'
import {useState, useEffect} from 'react'
import Nav from './navContainer/nav'
import Home from './homeContainer/home'
import SignUp from './homeContainer/signUpComponent/signUp'
import Login from './homeContainer/loginComponent/login'
import Wines from './winesContainer/wines'
import Pair from './winesContainer/pair';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import UserProfile from './userContainer/userProfile'
import SavedWines from './winesContainer/savedWinesContainer/savedWines'
import SavedByType from './winesContainer/savedWinesContainer/savedByTypeContainer/savedByType'
import SavedWineShow from './winesContainer/savedWinesContainer/savedWineShowContainer/savedWineShowContainer'
import EditOneWine from './winesContainer/savedWinesContainer/editOneWineContainer/editOneWine'

const App =()=> {
  const [currentUser, setCurrentUser] = useState({
    displayName:''
  })
  const [loggedIn, setLoggedIn] = useState(false)
  const [wineCellar, setWineCellar] = useState([])

  useEffect(() =>{
    getWines();
}, [])
  const user = JSON.parse(localStorage.getItem('props.currentUser'))
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

  return (
    <Router>
      <div className="App">
        
          
        <Nav currentUser={currentUser} loggedIn={loggedIn}/>
          <Routes>
            <Route exact path="/" element={< Home />}/>
            <Route exact path ="/sign-up" element={< SignUp />} />
            <Route exact path="/login" element={ < Login loggedIn={loggedIn}setLoggedIn={setLoggedIn}currentUser={currentUser} />}/>
            <Route exact path="/user-profile" element={ < UserProfile currentUser={currentUser} />}/>
            <Route path="/wines" element={ < Wines currentUser={currentUser} wineCellar={wineCellar} setWineCellar={setWineCellar}/>}/>
            <Route path="/pair" element={<Pair/>}/>
            <Route path="/saved-wines" element={<SavedWines currentUser={currentUser} wineCellar={wineCellar} setWineCellar={setWineCellar}/>}/>
            <Route path="/saved-wines/:id" element={<SavedWineShow currentUser={currentUser} wineCellar={wineCellar} setWineCellar={setWineCellar}/>}/>
            <Route path="saved-wines/:id/edit" element={ <EditOneWine wineCellar={wineCellar} setWineCellar={setWineCellar}/>} />
            <Route path="/saved-wines/type" element={<SavedByType currentUser={currentUser}/>}/>
            <Route path="*" element={<Navigate to="/" replace/> }/>
          </Routes>
      </div>
      
    </Router>
  );
}

export default App;
