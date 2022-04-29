import { Link } from 'react-router-dom'
import '../../App.css'
import Footer from '../../homeContainer/footerContainer/footer'

const WineFormChoice = () =>{
    return(
        <div id="portal-background">

        <h3>Pairing & Search Options:</h3>
        <div id="portal-choice-page">
            <div className="option">
              <Link className='link' to='/pair/wine-for'>
                  <img className="form-img" alt="portal door to wine suggestions"src="https://i.imgur.com/bRvwjnP.png"></img>
                  <h4>Find Wines for Food</h4>
            </Link>
            </div>
            
           <div className="option">
            <Link className='link' to='/pair/meal-for'> 
                <img className="form-img"alt="portal door to meal suggestions"src="https://i.imgur.com/ow9duCU.pngg"></img>
                <h4>Find Meal Ideas for Wine</h4>
            </Link>
            </div>

            <div id="last-choice" className="option">    
            <Link className='link' to='/wines'>
                <img className="form-img"alt="portal door to wine search"src="https://i.imgur.com/5tApgPX.png"></img>
                <h4>Find Wines by Grape</h4>
            </Link>
            </div>
        </div>
        <div id='portal-footer'>
        <Footer></Footer>
        </div>
        
        </div>

    )
}

export default WineFormChoice