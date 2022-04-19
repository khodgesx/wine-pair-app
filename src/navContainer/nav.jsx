import '../App.css';
import {Link} from 'react-router-dom'

const Nav=()=> {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  if(user !== null){
    return (
      <div>
         <nav>
             <Link to="/"><h3 id='logo'>Pour Pair</h3></Link>
             <ul className='nav-links'>
                 <Link to="/login"><li className="links">Logout</li></Link>
                 <Link to="/pair"><li className="links">Pair</li></Link>
             </ul>
          </nav>
    
      </div>
    );
  }else{
    return (
      <div>
         <nav>
             <Link to="/"><h3 id='logo'>Pour Pair</h3></Link>
             <ul className='nav-links'>
                 <Link to="/login"><li className="links">Login</li></Link>
                 <Link to="/pair"><li className="links">Pair</li></Link>
             </ul>
          </nav>
    
      </div>
    );
  }

}

export default Nav;
