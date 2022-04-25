import { Link } from 'react-router-dom'
import '../../App.css'

const WineFormChoice = () =>{
    return(
        <div>
            <Link to='/pair/wine-for'><h3>Find wines to pair with your meal</h3></Link>
            <Link to='/pair/meal-for'><h3>Find meal suggestions for your favorite wine</h3></Link>
            <Link to='/wines'><h3>Find wine by type</h3></Link>
        </div>
    )
}

export default WineFormChoice