import logo from './logo.svg'
import './App.css'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './navContainer/nav'
import Home from './homeContainer/home'
import SignUp from './homeContainer/signUpComponent/signUp'
import Login from './homeContainer/loginComponent/login'
import Wines from './winesContainer/wines'
import Pair from './winesContainer/pair';
import NewWine from './winesContainer/savedWinesContainer/newWineContainer/newWine'
import UserProfile from './userContainer/userProfile'
import EditUser from './userContainer/editUserContainer/editUser'
import EditUserPhoto from './userContainer/editUserContainer/editUserPhoto'
import SavedWines from './winesContainer/savedWinesContainer/savedWines'
import SavedByType from './winesContainer/savedWinesContainer/savedByTypeContainer/savedByType'
import SavedWineShow from './winesContainer/savedWinesContainer/savedWineShowContainer/savedWineShowContainer'
import WineFormChoice from './winesContainer/wineFormContainer/wineFromChoice'
import AllUsers from './userContainer/allUsersContainer/allUsers'
import Footer from './homeContainer/footerContainer/footer'



const App =()=> {
  const [currentUser, setCurrentUser] = useState({
    displayName:''
  })
  const [loggedIn, setLoggedIn] = useState(false)
  const [wineCellar, setWineCellar] = useState([])

  useEffect(() =>{
    if(user){
      getWines();
    }
    
}, [])
  const user = JSON.parse(localStorage.getItem('currentUser'))
  
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

const [type, setType] = useState()
const [form, setForm] = useState()

  return (
    <Router>
      <div className="App">
        
          
        <NavBar currentUser={currentUser} loggedIn={loggedIn}/>
          <Routes>
            <Route exact path="/" element={< Home />}/>
            <Route exact path ="/sign-up" element={< SignUp />} />
            <Route exact path="/login" element={ < Login loggedIn={loggedIn}setLoggedIn={setLoggedIn}currentUser={currentUser} />}/>
            <Route exact path="/user-profile/:id" element={ < UserProfile  wineCellar={wineCellar}currentUser={currentUser} />}/>
            <Route exact path="/edit-user" element={ < EditUser currentUser={currentUser} />}/>
            <Route exact path="/edit-userphoto" element={ < EditUserPhoto currentUser={currentUser} />}/>
            <Route exact path="/users" element={ < AllUsers />} />
            <Route exact path="/wine-form-choice" element={ <WineFormChoice />} />
            <Route path="/wines" element={ < Wines currentUser={currentUser} wineCellar={wineCellar} setWineCellar={setWineCellar}/>}/>
            <Route path="/pair/wine-for" element={<Pair form={'find-wine'}/>}/>
            <Route path="/pair/meal-for" element={<Pair form={'find-meal'}/>}/>
            <Route path="/new" element={<NewWine currentUser={currentUser} wineCellar={wineCellar} setWineCellar={setWineCellar}/>}/>
            <Route path="/saved-wines" element={<SavedWines currentUser={currentUser} wineCellar={wineCellar} setWineCellar={setWineCellar}/>}/>
            <Route path="/saved-wines/user/:id" element={<SavedWines currentUser={currentUser} wineCellar={wineCellar} setWineCellar={setWineCellar}/>}/>
            <Route path="/saved-wines/:id" element={<SavedWineShow currentUser={currentUser} wineCellar={wineCellar} setWineCellar={setWineCellar}/>}/>
            <Route path="/saved-wines/red" element={<SavedByType type={'red'}currentUser={currentUser} wineCellar={wineCellar}/>}/>
            <Route path="/saved-wines/white" element={<SavedByType type={'white'}currentUser={currentUser} wineCellar={wineCellar}/>}/>
            <Route path="/saved-wines/sparkling" element={<SavedByType type={'sparkling'}currentUser={currentUser} wineCellar={wineCellar}/>}/>
            <Route path="/saved-wines/other" element={<SavedByType type={'other'}currentUser={currentUser} wineCellar={wineCellar}/>}/>
            <Route path="*" element={<Navigate to="/" replace/> }/>
          </Routes>
         
      </div>
    </Router>

  );
 
}

export default App;
