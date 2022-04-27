import '../../App.css'


const WineFormContainer = (props)=>{
    const inputChange=(e)=>{
        props.setWineInput([e.target.name]=e.target.value)
    }
    const submitRed = async(e)=>{
        e.preventDefault()
        props.getWines()
        props.setType('red') 
        props.scrollToResults()
    }
    const submitWhite = async(e)=>{
        e.preventDefault()
        props.getWines()
        props.setType('white')
        props.scrollToResults() 
    }
    const submitSparkling = async(e)=>{
        e.preventDefault()
        props.getWines()
        props.setType('sparkling') 
        props.scrollToResults()
    }

    const submitOther = async(e)=>{
        e.preventDefault()
        props.getWines()
        props.setType('other') 
        props.scrollToResults()
    }
    return(
        <div id="search-wines">
            <h2>Search wines by grape:</h2>
        <div id="search-reds">
             <form onSubmit={submitRed}>
                <label id="label" htmlFor="varietal">Reds:</label>
                <select onChange={inputChange} type="text" name="wine" required>
                    <option placeholder="wine"></option>
                    <option value="Agiorgitiko">Agiorgitiko</option>
                    <option value="Aglianico">Aglianico</option>
                    <option value="Baco Noir">Baco Noir</option>
                    <option value="Bairrada">Bairrada</option>
                    <option value="Barbera wine">Barbera</option>
                    <option value="Bonarda">Bonarda</option>
                    <option value="Bordeaux">Bordeaux</option>
                    <option value="Cabernet Franc">Cabernet Franc</option>
                    <option value="Cabernet Sauvignon">Cabernet Sauvignon</option>
                    <option value="Carignan">Carignan</option>
                    <option value="Carmenere">Carmenere</option>
                    <option value="Cesanese">Cesanese</option>
                    <option value="Concord wine">Concord</option>
                    <option value="Corvina">Corvina</option>
                    <option value="Cotes du Rhone">Cotes Du Rhone</option>
                    <option value="Dolcetto">Dolcetto</option>
                    <option value="Dornfelder">Dornfelder</option>
                    <option value="Gamay">Gamay</option>
                    <option value="Grenache">Grenache</option>
                    <option value="Malbec">Malbec</option>
                    <option value="Marsala">Marsala</option>
                    <option value="Merlot">Merlot</option>
                    <option value="Mourvedre">Mourvedre</option>
                    <option value="Nebbiolo">Nebbiolo</option>
                    <option value="Negroamaro">Negroamaro</option>
                    <option value="Nero d Avola">Nero d Avola</option>
                    <option value="Petite Sirah">Petite Sirah</option>
                    <option value="Pinot Noir">Pinot Noir</option>
                    <option value="Pinotage">Pinotage</option>
                    <option value="Port">Port</option>
                    <option value="Primitivo">Primitivo</option>
                    <option value="Red Burgundy">Red Burgundy</option>
                    <option value="Rioja">Rioja</option>
                    <option value="Rose wine">Rose</option>
                    <option value="Sangiovese">Sangiovese</option>
                    <option value="Shiraz">Shiraz</option>
                    <option value="Sparkling Red Wine">Sparkling Red</option>
                    <option value="Tannat">Tannat</option>
                    <option value="Tempranillo">Tempranillo</option>
                    <option value="Zinfandel">Zinfandel</option>
                    <option value="Zweigelt">Zweigelt</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
           
        <div id="search-whites">   
            <form onSubmit={submitWhite}>
                <label htmlFor="varietal">Whites:</label>
                <select onChange={inputChange} type="text"id="varietals" name="wine" required>
                    <option placeholder="wine"></option>
                    <option value="Albarino">Albarino</option>
                    <option value="Arneis">arneis</option>
                    <option value="Assyrtiko">Assyrtiko</option>
                    <option value="Catarratto">Catarratto</option>
                    <option value="Chardonnay">Chardonnay</option>
                    <option value="Chenin Blanc">Chenin Blanc</option>
                    <option value="Cortese">Cortese</option>
                    <option value="Dry Riesling">Dry Riesling</option>
                    <option value="Frascati">Frascati</option>
                    <option value="Gavi">Gavi</option>
                    <option value="Gewurztraminer">Gewurztraminer</option>
                    <option value="Grechetto">Grechetto</option>
                    <option value="Greco">Greco</option>
                    <option value="Gruener Veltliner">Gruener Veltliner</option>
                    <option value="L Acadie Blanc">L Acadie Blanc</option>
                    <option value="Lillet Blanc">Lillet Blanc</option>
                    <option value="Marsanne">Marsanne</option>
                    <option value="Moschofilero">Moschofilero</option>
                    <option value="Mueller Thurgau">Mueller Thurgau</option>
                    <option value="Muscadet">Muscadet</option>
                    <option value="Pinot Blanc">Pinot Blanc</option>
                    <option value="Pinot Grigio">Pinot Grigio</option>
                    <option value="Riesling">Riesling</option>
                    <option value="Roussanne">Roussanne</option>
                    <option value="Sauternes">Sauternes</option>
                    <option value="Sauvignon Blanc">Sauvignon Blanc</option>
                    <option value="Semillon">Semillon</option>
                    <option value="Soave">Soave</option>
                    <option value="Sylvaner">Sylvaner</option>
                    <option value="Torrontes">Torrontes</option>
                    <option value="Trebbiano">Trebbiano</option>
                    <option value="Verdejo">Verdejo</option>
                    <option value="Verdicchio">Verdicchio</option>
                    <option value="Vermentino">Vermentino</option>
                    <option value="Viognier">Viognier</option>
                    <option value="White Bordeaux">White Bordeaux</option>
                    <option value="White Burgundy">White Burgundy</option>
                    <option value="White Rioja">White Rioja</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>         
        <div id="search-sparkling"> 
            <form onSubmit={submitSparkling}>
                <label htmlFor="varietal">Sparkling:</label>
                <select onChange={inputChange} type="text"id="varietals" name="wine" required>
                    <option placeholder="wine"></option>
                    <option value="Cava">Cava</option>
                    <option value="Cremant">Cremant</option>
                    <option value="Champagne">Champagne</option>
                    <option value="Prosecco">Prosecco</option>
                    <option value="Spumante">Spumante</option>
                    <option value="Sparkling Rose">Sparkling Rose</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
        
        <div id="search-other">  
            <form onSubmit={submitOther}>
                <label htmlFor="varietal">Dessert & Other:</label>
                <select onChange={inputChange} type="text"id="varietals" name="wine" required>
                    <option placeholder="wine"></option>
                    <option value="Banyuls">Banyuls</option>
                    <option value="Fruit Wine">Fruit Wine</option>
                    <option value="Ice Wine">Ice Wine</option>
                    <option value="Late Harvest">Late Harvest</option>
                    <option value="Lambrusco Dolce">Lambrusco Dolce</option>
                    <option value="Madeira">Madeira</option>
                    <option value="Mead">Mead</option>
                    <option value="Moscato">Moscato</option>
                    <option value="Pedro Ximenez">Pedro Ximenez</option>
                    <option value="Port">Port</option>
                    <option value="Sherry">Sherry</option>
                    <option value="Cream Sherry">Cream Sherry</option>
                    <option value="Dry Sherry">Dry Sherry</option>
                    <option value="Vermouth">Vermouth</option>
                    <option value="Dry Vermouth">Dry Vermouth</option>
                    <option value="Vin Santo">Vin Santo</option>
                    <option value="White Port">White Port</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
        </div>
    )
}
export default WineFormContainer