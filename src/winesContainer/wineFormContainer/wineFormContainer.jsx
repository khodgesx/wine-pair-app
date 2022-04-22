import '../../App.css'


const WineFormContainer = (props)=>{
    const inputChange=(e)=>{
        props.setWineInput([e.target.name]=e.target.value)
    }
    const submitWine = async(e)=>{
        e.preventDefault()
        props.getWines()
    }
    return(
        <div>
            <h2>Find wines by type:</h2>

            <form onSubmit={submitWine}>
                {/* <label htmlFor="name">Varietal: </label>
                <input onChange={inputChange}type="text" name="wine" placeholder="input varietal" required></input> */}
                <label htmlFor="varietal">Reds:</label>
                <select onChange={inputChange} type="text"id="varietals" name="wine">
                    <option placeholder="wine"></option>
                    <option value="pinot noir">Pinot Noir</option>
                    <option value="cabernet franc">Cabernet Franc</option>
                    <option value="cabernet sauvignon">Cabernet Sauvignon</option>
                </select>
                <button type="submit">get wines</button>
            </form>

            <form onSubmit={submitWine}>
                <label htmlFor="varietal">Whites:</label>
                <select onChange={inputChange} type="text"id="varietals" name="wine">
                    <option placeholder="wine"></option>
                    <option value="pinot noir">Pinot Noir</option>
                    <option value="cabernet franc">Cabernet Franc</option>
                    <option value="cabernet sauvignon">Cabernet Sauvignon</option>
                </select>
                <button type="submit">get wines</button>
            </form>
        </div>
    )
}
export default WineFormContainer