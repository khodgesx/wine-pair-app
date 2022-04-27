import '../App.css';
import { Link, useNavigate } from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavBar=()=> {
  let navigate=useNavigate()

  const remove = ()=>{
    localStorage.removeItem('currentUser')
    navigate('/')
  }

  const user = JSON.parse(localStorage.getItem('currentUser'))
  if(user !== null){
    return (
      <div>
        <Navbar className='top-nav'collapseOnSelect fixed='top' expand='sm' >
          <Container className='top-nav'>
            <Navbar.Toggle id='toggle'aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link id="white"className='nav-links'href='/'>Home</Nav.Link>
                <Nav.Link id="white"className='nav-links'href='/wine-form-choice'>Pair Portal</Nav.Link>
                <Nav.Link id="white"className='nav-links'href='/saved-wines'>Wine Cellar</Nav.Link>
                <Nav.Link id="white"className='nav-links'href='/user-profile'>Profile</Nav.Link>
                <Nav.Link id="logout-link"className='nav-links'onClick={remove}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
         {/* <nav className="top-nav">
             <Link to="/"><h3 id='logo'>Pour Pair</h3></Link>
             <ul className='nav-links'>
                 <Link to="/wine-form-choice"><li className="links">Pair Portal</li></Link>
                 <Link to="/saved-wines"><li className="links">Wine Cellar</li></Link>
                 <Link to="/user-profile"><li className="links">Profile</li></Link>
                <a id="logout-link"><li onClick={remove}className="links">Logout</li></a>
             </ul>
          </nav> */}
    
      </div>
    );
  }else{
    return (
      
      <div>
        <Navbar className='top-nav'collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
          <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/sign-up'>Register</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
                <Nav.Link href='/wine-form-choice'>Pair Portal</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
         {/* <nav className="top-nav">
             <Link to="/"><h3 id='logo'>Pour Pair</h3></Link>
             <ul className='nav-links'>
                 <Link to="/sign-up"><li className="links">Register</li></Link>
                 <Link to="/login"><li className="links">Login</li></Link>
                 <Link to="/wine-form-choice"><li className="links">Pair Portal</li></Link>
             </ul>
          </nav> */}
    
      </div>
    );
  }

}

export default NavBar;
