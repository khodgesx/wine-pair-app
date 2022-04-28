import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import '../../../App.css'
import apiUrl from '../../../apiConfig'

const NewWine = (props)=>{
    let navigate = useNavigate()

    const [showError, setShowError] = useState(false)
    const toggleError = () => setShowError(!showError)

    const [newWine, setNewWine] = useState({
        name: '',
        varietal: '',
        img: '',
        type:'',
        notes: '',
        apiId:'',
        rating: null,
        user:''
    })
    const [image, setImage] = useState()
    const createNew = async (newWine) =>{
        try {
            if(image){
                const data = new FormData()
            data.append('file', image)
            data.append('upload_preset', 'nvmc5zgt')
            
            const imageUpload = await fetch('https://api.cloudinary.com/v1_1/dmc4kghoi/image/upload', {
                method: "POST",
                body: data
            })
    
            const parsedImg = await imageUpload.json()
            newWine.img = await parsedImg.url
    
            }else{
                newWine.img = 'https://i.imgur.com/yNIVijD.jpg'
            }
            const user = JSON.parse(localStorage.getItem('currentUser'))
            const createResponse = await fetch (`${apiUrl}/wines/new/${user._id}`,{
                method: "POST",
                body: JSON.stringify(newWine),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await createResponse.json()
            console.log(parsedResponse)
            if(parsedResponse.success){
                console.log(parsedResponse.data.apiId)
                props.setWineCellar([parsedResponse.data, ...props.wineCellar])
                navigate(`/saved-wines/user/${user._id}`)
            }else{
                console.log(parsedResponse.data)
                toggleError()
            }
        } catch (err) {
            console.log(err)
        }
    }
    const inputChange = (e)=>{
        setNewWine({
            ...newWine,
            [e.target.name]: e.target.value,
            apiId: newWine.name
        })
    }

    const submitNew = async (e)=>{
        e.preventDefault()
        createNew(newWine) 
    }

    return(
        <div id="new-wine-box">
            <form id="new-wine-form"onSubmit={submitNew} encType="multipart/form">
                <div className="form-row">
                    <label htmlFor="name"> Wine Name:</label>
                    <input onChange ={inputChange} type="text" name="name" value={newWine.name}></input>
                </div>

                <div className="form-row">
                    <label htmlFor="name">Varietal/Grape:</label>
                    <input onChange ={inputChange}type="text" name="varietal" value={newWine.varietal}></input>
                </div>
                
               
        
                <div id="radio-row-container">
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="type" defaultValue='red' required></input>
                                <label htmlFor="type">Red</label>
                            </div>
                            <div className="radio-option-container">
                                <input onChange ={inputChange}type="radio" name="type" defaultValue='white'></input>
                                <label htmlFor="type">White</label>
                            </div>
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="type" defaultValue='sparkling'></input>
                                <label htmlFor="type">Sparkling</label>
                            </div>
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="type" defaultValue='other'></input>
                                <label htmlFor="type">Dessert/Other</label>
                            </div>
                           
                 
                </div>  
                <div className="form-row">
                                <label htmlFor="type">Notes: </label>
                                <input onChange ={inputChange} type="text" name="notes" ></input>
                            </div>
                            <div className="form-row">
                                <input hidden type="text" name="apiId" ></input>
                            </div>

                <div className="form-row">
                    <label htmlFor="rating">Rating: </label>
                    <select onChange ={inputChange} type="number" name="rating" >
                        <option placeholder="rating"></option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="4">4</option>
                        <option value="4.5">4.5</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-row" id="photo-row">
                    <label htmlFor="name">Photo:</label>
                    <input onChange ={(e)=>setImage(e.target.files[0])} type="file" name="img" id="upload-pic"accept="image/png, image/jpeg"></input>
  
                </div>
                <button id="submit" type="submit">add to cellar</button>
                </form>
                <div>
                                    <Modal id="save-modal-border" show={showError} onHide={toggleError}>
                                        <Modal.Header closeButton></Modal.Header>
                                        <Modal.Body id="save-modal">
                                            <h3 id="save-success"> Looks like you've already added a wine with that name. 
                                            <br></br><br></br>You must really love it!</h3> 
                                        </Modal.Body>
                                    </Modal>
                                </div>
        </div>
    )
}

export default NewWine