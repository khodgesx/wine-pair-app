import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../App.css'
import Footer from '../footerContainer/footer'
import apiUrl from '../../apiConfig'

const Login =(props)=>{
    let navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        username:'',
        password:''
    })
        const inputChange = (e)=>{
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }
        const submitLogin = async (e)=>{
            e.preventDefault()
            loginUser(userLogin)
            // console.log('on submit login:', userLogin.username)
        }

    const loginUser = async (possibleUser) =>{

        try {
            const loginResponse = await fetch (`${apiUrl}/users/login`,{
                method: "POST",
                body: JSON.stringify(possibleUser),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await loginResponse.json()
        
            if(parsedResponse.success){
               localStorage.setItem('currentUser', JSON.stringify(parsedResponse.data))
                setUserLogin(localStorage.getItem('currentUser'))
                let userInfo = JSON.parse(localStorage.getItem('currentUser'))
                let displayName = userInfo.displayName
                
                props.setLoggedIn(true)
                navigate('/')
            }else if(parsedResponse.success === false){
                console.log('no success?', parsedResponse.data)
                window.location.reload()
            }
        } catch (err) {
            console.log(err)
        }
    }
    const remove = ()=>{
        localStorage.removeItem('props.currentUser')
        console.log('logged out:', localStorage.getItem('props.currentUser'))
        setUserLogin({
            username:'',
            password:''
        })
        props.setLoggedIn(false)
        window.location.reload()
      }

      const user = JSON.parse(localStorage.getItem('props.currentUser'))
      if(user !== null){
          return(
            <section>
                <h2>are you sure you want to logout?</h2>
            <button id="logout"onClick={remove}>Logout</button>
        </section>
          )
      }else{
        return(
            <div id="login-form">
                <section className="login-form-container">
                    <form onSubmit={submitLogin} className="login-form-container">
                        
                        <div id="login-form-row-container">
                            <label htmlFor="username">Username:</label>
                            <input onChange={inputChange} type="text" name="username" value={userLogin.username}required/>
                        </div>
    
                        <div id="login-form-row-container">
                            <label htmlFor="password">Password:</label>
                            <input onChange={inputChange} type="password" name="password" value={userLogin.password}required/>
                        </div>
                        <div id="login-form-row-container">
                            <input id="login-button" type="submit" value="Login"/>
                        </div>
                    </form>
                </section>
    
                <div id="footer">
                    <Footer></Footer>
                </div>
            </div>
        )
    }
      }
    

export default Login