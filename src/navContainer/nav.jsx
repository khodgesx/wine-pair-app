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
          <img id="logo"src='https://i.imgur.com/sN3mdMB.jpg'></img>
            <Navbar.Toggle id='toggle'aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav id="nav-link-holder">
                
                <Nav.Link id="white"className='nav-links'href='/'>Home</Nav.Link>
                <Nav.Link id="white"className='nav-links'href='/wine-form-choice'>Pair Portal</Nav.Link>
                <Nav.Link id="white"className='nav-links'href='/saved-wines'>Wine Cellar</Nav.Link>
                <Nav.Link id="white"className='nav-links'href='/user-profile'>Profile</Nav.Link>
                <Nav.Link id="logout-link"className='nav-links'onClick={remove}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
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
    
      </div>
    );
  }

}

export default NavBar;
