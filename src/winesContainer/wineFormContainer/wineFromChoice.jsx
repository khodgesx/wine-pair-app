import { Link } from 'react-router-dom'
import '../../App.css'

const WineFormChoice = () =>{
    return(
        <div id="portal-choice-page">
              <Link to='/pair/wine-for'>
                  <img className="form-img" alt="portal door to wine suggestions"src="https://i.imgur.com/D43bZxO.jpg"></img>
            </Link>
           
            <Link to='/pair/meal-for'> 
                <img className="form-img"alt="portal door to meal suggestions"src="https://i.imgur.com/FV4zB5d.jpg"></img>
            </Link>
            
            <Link to='/wines'>
                <img className="form-img"alt="portal door to wine search"src="https://i.imgur.com/A8UqKCz.jpg"></img>
            </Link>
        </div>
    )
}

export default WineFormChoice