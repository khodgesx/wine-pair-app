import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import '../../App.css'
import Footer from "../footerContainer/footer";



const SignUp = () =>{
    let navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({
        displayName:'',
        username: '',
        password: '',
        faveVarietal:'',
        img: ''
    })

const [image, setImage] = useState('')
//state of the image url from cloudinary
const [url, setUrl] = useState('')

//create user:
    const createUser = async (newUser) =>{
  
    
        try {
            if(image){
                const data = new FormData()
            console.log("image prop", image)
            data.append('file', image)
            data.append('upload_preset', 'nvmc5zgt')
    
            const imageUpload = await fetch('https://api.cloudinary.com/v1_1/dmc4kghoi/image/upload', {
                method: "POST",
                body: data
            })
    
            const parsedImg = await imageUpload.json()
            newUser.img = await parsedImg.url
            }else{
                newUser.img = 'https://i.imgur.com/91Bk3WG.png'
            }
            
            await console.log("new user\n", newUser)
            // newPlace.img = await url
            const createResponse = await fetch (`http://localhost:3001/users`,{
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await createResponse.json()
            console.log('resp from backend', parsedResponse)
            if(parsedResponse.success){
                setUsers([parsedResponse.data, ...users])
                console.log('user created:', parsedResponse.data)
    
            }else{
                console.log('no success?', parsedResponse.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const inputChange = (e)=>{
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    const submitNew = async (e)=>{
        e.preventDefault()
        createUser(newUser)
        console.log('on submit create:', newUser)
        navigate('/login')
    }


    return(
        <div id="new-user-form"> 

            <section className="user-form-container">
                <form onSubmit ={submitNew} className="new-user-form-container" encType="multipart/form-data">

                    <div id="user-form-row-container">
                        <label htmlFor="displayName">Display Name:</label>
                        <input onChange ={inputChange}type="text" name="displayName" />
                    </div>

                    <div id="user-form-row-container">
                        <label htmlFor="username">Username:</label>
                        <input onChange ={inputChange} type="text" name="username" />
                    </div>

                    <div id="user-form-row-container">
                        <label htmlFor="password">Password:</label>
                        <input onChange ={inputChange} type="password" name="password" />
                    </div>
                    <div id="user-form-row-container">
                        <label htmlFor="faveVarietal">Favorite Wine Varietal:</label>
                        <input onChange ={inputChange} type="text" name="faveVarietal" />
                    </div>

                    <div id="user-form-row-container">
                        <label htmlFor="img">Profile Photo:</label>
                        <input onChange ={(e)=>setImage(e.target.files[0])} type="file" name="img" id="rest-pic"accept="image/png, image/jpeg" placeholder='upload image'></input>
                    </div>
                    <div id="user-form-row-container">
                        <input id="reg-button"type="submit" value="Register"/>
                    </div>
                </form>
            </section>

            <div id="footer">
                <Footer></Footer>
            </div>

        </div>
    )
}

export default SignUp