import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const SavedWineShow = (props)=>{
    let params = useParams()
    let id = params.id
    useEffect(() =>{
        getWine();
    }, [])
    const [currentWine, setCurrentWine] = useState()
    // const [editWine, setEditWine] = useState({
    //     name: currentWine.name,
    //     varietal: currentWine.varietal,
    //     img: currentWine.img,
    //     notes: currentWine.notes
    // })
    //wine cellar show one:
    const getWine = async ()=>{
        try{
            const wine = await fetch (`http://localhost:3001/wines/${id}`)
            const parsedWine = await wine.json()
            console.log(parsedWine.data.name)
            setCurrentWine(parsedWine.data)
        }catch(err){
            console.log(err)
        }
    }
     //edit:
    //  const editOneWine = async (idToEdit, wineToEdit)=>{
    //     try{

    //         const editResponse = await fetch(`http://localhost:3001/${idToEdit}`, {
    //             method:"PUT",
    //             body:JSON.stringify(wineToEdit),
    //             headers:{
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //         const parsedEdit = await editResponse.json()
    //         if(parsedEdit.success){
    //             const newArray = props.wineCellar.map(wine => wine._id === idToEdit ? wineToEdit : wine)
    //             props.setWineCellar(newArray)
    //         }

    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // const inputChange=(e)=>{
    //     setEditWine({
    //         ...editWine,
    //         [e.target.name]: e.target.value
    //     })
    // }
    // const submitEdit =(e)=>{
    //     e.preventDefault();
    //     editOneWine(currentWine._id, editWine)
        
    // }
 
    return(
        <div id="one-wine-show">
            <h2>{currentWine.name}</h2>
            <img src={currentWine.img}/>
            <h3>notes: {currentWine.notes}</h3>
            <button>click to add notes</button>
            <div>
                <form >
                    {/* <input onChange={inputChange}type="text" name="notes" value={editWine.notes}/>
                    <button type="submit" value="submit"/> */}
                </form>
            </div>
           
        </div>
    )
}
export default SavedWineShow