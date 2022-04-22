import '../../App.css'


const WineFormContainer = (props)=>{
    const inputChange=(e)=>{
        props.setWineInput([e.target.name]=e.target.value)
    }
    const submitRed = async(e)=>{
        e.preventDefault()
        props.getWines()
        props.setType('red') 
    }
    const submitWhite = async(e)=>{
        e.preventDefault()
        props.getWines()
        props.setType('white') 
    }
    const submitSparkling = async(e)=>{
        e.preventDefault()
        props.getWines()
        props.setType('sparkling') 
    }

    const submitOther = async(e)=>{
        e.preventDefault()
        props.getWines()
        props.setType('other') 
    }
    return(
        <div id="search-wines">
            <h2>Find wines by type:</h2>
        <div id="search-reds">
             <form onSubmit={submitRed}>
                <label id="label" htmlFor="varietal">Reds:</label>
                <select onChange={inputChange} type="text" name="wine">
                    <option placeholder="wine"></option>
                    <option value="agiorgitiko">Agiorgitiko</option>
                    <option value="aglianico">Aglianico</option>
                    <option value="baco noir">Baco Noir</option>
                    <option value="bairrada">Bairrada</option>
                    <option value="barbera wine">Barbera</option>
                    <option value="bonarda">Bonarda</option>
                    <option value="bordeaux">Bordeaux</option>
                    <option value="cabernet franc">Cabernet Franc</option>
                    <option value="cabernet sauvignon">Cabernet Sauvignon</option>
                    <option value="carignan">Carignan</option>
                    <option value="carmenere">Carmenere</option>
                    <option value="cesanese">Cesanese</option>
                    <option value="concord wine">Concord</option>
                    <option value="corvina">Corvina</option>
                    <option value="cotes du rhone">Cotes Du Rhone</option>
                    <option value="dolcetto">Dolcetto</option>
                    <option value="dornfelder">Dornfelder</option>
                    <option value="gamay">Gamay</option>
                    <option value="grenache">Grenache</option>
                    <option value="malbec">Malbec</option>
                    <option value="marsala">Marsala</option>
                    <option value="merlot">Merlot</option>
                    <option value="mourvedre">Mourvedre</option>
                    <option value="nebbiolo">Nebbiolo</option>
                    <option value="negroamaro">Negroamaro</option>
                    <option value="nero d avola">Nero d Avola</option>
                    <option value="petite sirah">Petite Sirah</option>
                    <option value="pinot noir">Pinot Noir</option>
                    <option value="pinotage">Pinotage</option>
                    <option value="port">Port</option>
                    <option value="primitivo">Primitivo</option>
                    <option value="red burgundy">Red Burgundy</option>
                    <option value="rioja">Rioja</option>
                    <option value="rose wine">Rose</option>
                    <option value="sangiovese">Sangiovese</option>
                    <option value="shiraz">Shiraz</option>
                    <option value="sparkling red wine">Sparkling Red</option>
                    <option value="tannat">Tannat</option>
                    <option value="tempranillo">Tempranillo</option>
                    <option value="zinfandel">Zinfandel</option>
                    <option value="zweigelt">Zweigelt</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
           
        <div id="search-whites">   
            <form onSubmit={submitWhite}>
                <label htmlFor="varietal">Whites:</label>
                <select onChange={inputChange} type="text"id="varietals" name="wine">
                    <option placeholder="wine"></option>
                    <option value="albarino">Albarino</option>
                    <option value="arneis">arneis</option>
                    <option value="assyrtiko">Assyrtiko</option>
                    <option value="catarratto">Catarratto</option>
                    <option value="chardonnay">Chardonnay</option>
                    <option value="chenin blanc">Chenin Blanc</option>
                    <option value="cortese">Cortese</option>
                    <option value="dry riesling">Dry Riesling</option>
                    <option value="frascati">Frascati</option>
                    <option value="gavi">Gavi</option>
                    <option value="gewurztraminer">Gewurztraminer</option>
                    <option value="grechetto">Grechetto</option>
                    <option value="greco">Greco</option>
                    <option value="gruener veltliner">Gruener Veltliner</option>
                    <option value="l acadie blanc">L Acadie Blanc</option>
                    <option value="lillet blanc">Lillet Blanc</option>
                    <option value="marsanne">Marsanne</option>
                    <option value="moschofilero">Moschofilero</option>
                    <option value="mueller thurgau">Mueller Thurgau</option>
                    <option value="muscadet">Muscadet</option>
                    <option value="pinot blanc">Pinot Blanc</option>
                    <option value="pinot grigio">Pinot Grigio</option>
                    <option value="riesling">Riesling</option>
                    <option value="roussanne">Roussanne</option>
                    <option value="sauternes">Sauternes</option>
                    <option value="sauvignon blanc">Sauvignon Blanc</option>
                    <option value="semillon">Semillon</option>
                    <option value="soave">Soave</option>
                    <option value="sylvaner">Sylvaner</option>
                    <option value="torrontes">Torrontes</option>
                    <option value="trebbiano">Trebbiano</option>
                    <option value="verdejo">Verdejo</option>
                    <option value="verdicchio">Verdicchio</option>
                    <option value="vermentino">Vermentino</option>
                    <option value="viognier">Viognier</option>
                    <option value="white bordeaux">White Bordeaux</option>
                    <option value="white burgundy">White Burgundy</option>
                    <option value="white rioja">White Rioja</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>         
        <div id="search-sparkling"> 
            <form onSubmit={submitSparkling}>
                <label htmlFor="varietal">Sparkling:</label>
                <select onChange={inputChange} type="text"id="varietals" name="wine">
                    <option placeholder="wine"></option>
                    <option value="cava">Cava</option>
                    <option value="cremant">Cremant</option>
                    <option value="champagne">Champagne</option>
                    <option value="prosecco">Prosecco</option>
                    <option value="spumante">Spumante</option>
                    <option value="sparkling rose">Sparkling Rose</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
        
        <div id="search-other">  
            <form onSubmit={submitOther}>
                <label htmlFor="varietal">Dessert & Other:</label>
                <select onChange={inputChange} type="text"id="varietals" name="wine">
                    <option placeholder="wine"></option>
                    <option value="banyuls">Banyuls</option>
                    <option value="fruit wine">Fruit Wine</option>
                    <option value="ice wine">Ice Wine</option>
                    <option value="late harvest">Late Harvest</option>
                    <option value="lambrusco dolce">Lambrusco Dolce</option>
                    <option value="madeira">Madeira</option>
                    <option value="mead">Mead</option>
                    <option value="moscato">Moscato</option>
                    <option value="pedro ximenez">Pedro Ximenez</option>
                    <option value="port">Port</option>
                    <option value="sherry">Sherry</option>
                    <option value="cream sherry">Cream Sherry</option>
                    <option value="dry sherry">Dry Sherry</option>
                    <option value="vermouth">Vermouth</option>
                    <option value="dry vermouth">Dry Vermouth</option>
                    <option value="vin santo">Vin Santo</option>
                    <option value="white port">White Port</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
        </div>
    )
}
export default WineFormContainer