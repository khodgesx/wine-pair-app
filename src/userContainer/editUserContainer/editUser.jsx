import { useState, useEffect } from "react";



const EditUser = () =>{
    const user = localStorage.getItem('currentUser')
//     //set state of place to prior values, unless changed
//     const [ edit, setEdit ] = useState({
//         name: props.place.name,
//         cuisine: props.place.cuisine,
//         img: props.place.img,
//         faveDish: props.place.faveDish,
//         notes: props.place.notes,
//         priceLevel: props.place.priceLevel
//     })


// //edit user (everything but photo)
// const editOnePlace = async (idToEdit, placeToEdit)=>{
//     try{

//         const editResponse = await fetch(`${apiUrl}/restaurants/${idToEdit}`, {
//             method:"PUT",
//             body:JSON.stringify(placeToEdit),
//             headers:{
//                 "Content-Type": "application/json"
//             }
//         })
//         const parsedEdit = await editResponse.json()
//         if(parsedEdit.success){
//             const newArray = visited.map(place => place._id === idToEdit ? placeToEdit : place)
//             setVisited(newArray)
//             const newArrayTwo = toTry.map(place => place._id === idToEdit ? placeToEdit : place)
//             setToTry(newArrayTwo)
//         }

//     }catch(err){
//         console.log(err)
//     }
// }
// const inputChange=(e)=>{
//     setEditPlace({
//         ...editPlace,
//         [e.target.name]: e.target.value
//     })
// }
// const submitEdit =(e)=>{
//     e.preventDefault();
//     props.editOnePlace(props.place._id, editPlace)
//     props.setShowing(false)
    
// }


//     return(
//         <div id="new-user-form"> 

//             <section className="form-container">
//                 <form onSubmit ={submitNew} className="new-user-form-container" encType="multipart/form-data">

//                     <div id="form-row-container">
//                         <label htmlFor="displayName">Display Name:</label>
//                         <input onChange ={inputChange}type="text" name="displayName" />
//                     </div>

//                     <div id="form-row-container">
//                         <label htmlFor="username">Username:</label>
//                         <input onChange ={inputChange} type="text" name="username" />
//                     </div>

//                     <div id="form-row-container">
//                         <label htmlFor="password">Password:</label>
//                         <input onChange ={inputChange} type="password" name="password" />
//                     </div>

//                     <div id="form-row-container">
//                         <label htmlFor="img">Profile Photo:</label>
//                         <input onChange ={(e)=>setImage(e.target.files[0])} type="file" name="img" id="rest-pic"accept="image/png, image/jpeg" placeholder='upload image'></input>
//                     </div>
//                     <div id="form-row-container">
//                         <input id="reg-button"type="submit" value="Register"/>
//                     </div>
//                 </form>
//             </section>
       

//         </div>
    // )
}

export default EditUser