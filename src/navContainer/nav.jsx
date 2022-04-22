import '../App.css';
import { Link } from 'react-router-dom'

const Nav=(props)=> {
  const user = JSON.parse(localStorage.getItem('props.currentUser'))
  if(user !== null){
    return (
      <div>
         <nav className="top-nav">
             <Link to="/"><h3 id='logo'>Pour Pair</h3></Link>
             <ul className='nav-links'>
                 <Link to="/pair"><li className="links">Pair Portal</li></Link>
                 <Link to="/user-profile"><li className="links">Profile</li></Link>
                 <Link to="/login"><li className="links">Logout</li></Link>
             </ul>
          </nav>
    
      </div>
    );
  }else{
    return (
      <div>
         <nav className="top-nav">
             <Link to="/"><h3 id='logo'>Pour Pair</h3></Link>
             <ul className='nav-links'>
                 <Link to="/sign-up"><li className="links">Register</li></Link>
                 <Link to="/login"><li className="links">Login</li></Link>
                 <Link to="/pair"><li className="links">Pair Portal</li></Link>
             </ul>
          </nav>
    
      </div>
    );
  }

}

export default Nav;
