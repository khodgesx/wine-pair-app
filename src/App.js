import logo from './logo.svg'
import './App.css'
import {useState} from 'react'
import Nav from './nav'
import Home from './homeContainer/home'
import SignUp from './homeContainer/signUpComponent/signUp'
import Login from './homeContainer/loginComponent/login'
import Wines from './winesContainer/wines'
import Pair from './winesContainer/pair';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

const App =()=> {
  const [currentUser, setCurrentUser] = useState({
    displayName:''
  })

  return (
    <Router>
      <div className="App">
        
          
        <Nav />
          <Routes>
            <Route exact path="/" element={< Home />}/>
            <Route exact path ="/sign-up" element={< SignUp />} />
            <Route exact path="/login" element={ < Login currentUser={currentUser} />}/>
            <Route  path="/wines" element={ < Wines />}/>
            <Route path="/pair" element={<Pair/>}/>
            {/* <Route exact path="/items/:id" element={ <SingleItemRoute items={items} setItems={setItems} />} /> 
            <Route exact path="/items/update/:id" element = { <EditItemRoute items={items}setItems={setItems}/>}/> */}
            <Route path="*" element={<Navigate to="/" replace/> }/>
          </Routes>
      </div>
      
    </Router>
  );
}

export default App;
