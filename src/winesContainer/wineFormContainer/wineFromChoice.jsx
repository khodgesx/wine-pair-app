import { Link } from 'react-router-dom'
import '../../App.css'

const WineFormChoice = () =>{
    return(
        <div id="portal-background">

        <h3>Choose a door:</h3>
        <div id="portal-choice-page">
              <Link to='/pair/wine-for'>
                  <img className="form-img" alt="portal door to wine suggestions"src="https://i.imgur.com/7pdNKgm.jpg"></img>
            </Link>
           
            <Link to='/pair/meal-for'> 
                <img className="form-img"alt="portal door to meal suggestions"src="https://i.imgur.com/Oe5HZHW.jpg"></img>
            </Link>
            
            <Link to='/wines'>
                <img className="form-img"alt="portal door to wine search"src="https://i.imgur.com/Vs0qvba.jpg"></img>
            </Link>
        </div>
        </div>
    )
}

export default WineFormChoice