import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import Home from './homeContainer/home'
import Wines from './winesContainer/wines'
import Pair from './winesContainer/pair';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        
          
        <Nav />
          <Routes>
            <Route exact path="/" element={< Home />}/>
            {/* <Route exact path="/about" element={ < About />}/> */}
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
