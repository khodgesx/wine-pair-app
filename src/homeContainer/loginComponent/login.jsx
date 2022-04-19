import {useState} from 'react'
import { Navigate, Link } from 'react-router-dom'
import '../../App.css'

const Login =(props)=>{
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
            console.log('on submit login:', userLogin.username)
        }

    const loginUser = async (possibleUser) =>{

        try {
            const loginResponse = await fetch (`http://localhost:3001/users/login`,{
                method: "POST",
                body: JSON.stringify(possibleUser),
                headers: {
                    "Content-Type": "application/json"
                    // "accept": "application/json"
                }
            })
            const parsedResponse = await loginResponse.json()
        
            if(parsedResponse.success){
               localStorage.setItem('props.currentUser', JSON.stringify(parsedResponse.data))
               console.log(localStorage.getItem('props.currentUser'))
            //    window.location.reload()
            }else{
                console.log('no success?', parsedResponse.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const remove = ()=>{
        localStorage.removeItem('props.currentUser')
        console.log('logged out:', localStorage.getItem('props.currentUser'))
        // window.location.reload()
      }

    return(
        <div id="login-form">
            <section className="form-container">
                <form onSubmit={submitLogin} className="login-form-container">
                    
                    <div id="form-row-container">
                        <label htmlFor="username">Username:</label>
                        <input onChange={inputChange} type="text" name="username" value={userLogin.username}required/>
                    </div>

                    <div id="form-row-container">
                        <label htmlFor="password">Password:</label>
                        <input onChange={inputChange} type="password" name="password" value={userLogin.password}required/>
                    </div>
                    <div id="form-row-container">
                        <input id="login-button" type="submit" value="Login"/>
                    </div>
                </form>
            </section>
            
            <section>
                <button onClick={remove}>Logout</button>
            </section>
            
        </div>
    )
}

export default Login