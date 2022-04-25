import '../App.css'
import { Link } from 'react-router-dom'

const Home = () =>{
    const user = JSON.parse(localStorage.getItem('props.currentUser'))
    if(user !== null){
        return(
            <div id="home">
                <div id="home-taglines">
                    <h1>Pour Pair</h1>
                    <h2>Find & save wines to your <Link to="/saved-wines">wine cellar</Link></h2>
                    <h2>Look up wines to <Link to="/pair">pair</Link> with your meals <br></br>or meal suggestions for your favorite wines</h2>
                </div>
                
                <img id="home-img"src="https://media.giphy.com/media/JsbqCNmqYGZ62t8mPJ/giphy-downsized-large.gif"></img>
            </div>
            )  
    }else{
        return(
            <div id="home">
                <div id="home-taglines">
                    <h1>Pour Pair</h1>
                    <h2>Find & save wines to your  digital wine cellar</h2>
                    <h2>Look up wines to <Link to="/pair">pair</Link> with your meals <br></br>or meal suggestions for your favorite wines</h2>
                </div>
                
                <img id="home-img"src="https://media.giphy.com/media/JsbqCNmqYGZ62t8mPJ/giphy-downsized-large.gif"></img>
            </div>
            )  
    }
   
}
  

  export default Home
  