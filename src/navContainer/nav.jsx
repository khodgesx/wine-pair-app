import '../App.css';
import { Link, useNavigate } from 'react-router-dom'

const Nav=()=> {
  let navigate=useNavigate()

  const remove = ()=>{
    localStorage.removeItem('currentUser')
    navigate('/')
  }

  const user = JSON.parse(localStorage.getItem('currentUser'))
  if(user !== null){
    return (
      <div>
         <nav className="top-nav">
             <Link to="/"><h3 id='logo'>Pour Pair</h3></Link>
             <ul className='nav-links'>
                 <Link to="/wine-form-choice"><li className="links">Pair Portal</li></Link>
                 <Link to="/saved-wines"><li className="links">Wine Cellar</li></Link>
                 <Link to="/user-profile"><li className="links">Profile</li></Link>
                <a id="logout-link"><li onClick={remove}className="links">Logout</li></a>
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
                 <Link to="/wine-form-choice"><li className="links">Pair Portal</li></Link>
             </ul>
          </nav>
    
      </div>
    );
  }

}

export default Nav;
