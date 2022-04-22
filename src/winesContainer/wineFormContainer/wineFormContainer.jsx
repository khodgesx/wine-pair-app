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
                    <option value="agiorgitiko">agiorgitiko</option>
                    <option value="aglianico">aglianico</option>
                    <option value="baco noir">baco noir</option>
                    <option value="bairrada">bairrada</option>
                    <option value="barbera wine">barbera  wine</option>
                    <option value="bonarda">bonarda</option>
                    <option value="bordeaux">bordeaux</option>
                    <option value="cabernet franc">Cabernet Franc</option>
                    <option value="cabernet sauvignon">Cabernet Sauvignon</option>
                    <option value="carignan">carignan</option>
                    <option value="carmenere">carmenere</option>
                    <option value="cesanese">cesanese</option>
                    <option value="concord wine">concord</option>
                    <option value="corvina">Corvina</option>
                    <option value="cotes du rhone">cotes du rhone</option>
                    <option value="dolcetto">dolcetto</option>
                    <option value="dornfelder">dornfelder</option>
                    <option value="gamay">gamay</option>
                    <option value="grenache">grenache</option>
                    <option value="malbec">malbec</option>
                    <option value="marsala">marsala</option>
                    <option value="merlot">merlot</option>
                    <option value="mourvedre">mourvedre</option>
                    <option value="nebbiolo">nebbiolo</option>
                    <option value="negroamaro">negroamaro</option>
                    <option value="nero d avola">nero d avola</option>
                    <option value="petite sirah">petite sirah</option>
                    <option value="pinot noir">pinot noir</option>
                    <option value="pinotage">pinotage</option>
                    <option value="port">port</option>
                    <option value="primitivo">primitivo</option>
                    <option value="red burgundy">red burgundy</option>
                    <option value="rioja">rioja</option>
                    <option value="rose wine">rose</option>
                    <option value="sangiovese">sangiovese</option>
                    <option value="shiraz">shiraz</option>
                    <option value="sparkling red wine">sparkling red wine</option>
                    <option value="tannat">tannat</option>
                    <option value="tempranillo">tempranillo</option>
                    <option value="zinfandel">zinfandel</option>
                    <option value="zweigelt">zweigelt</option>
                </select>
                <button type="submit">get wines</button>
            </form>

            <form onSubmit={submitWine}>
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
                <button type="submit">get wines</button>
            </form>

            <form onSubmit={submitWine}>
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
                <button type="submit">get wines</button>
            </form>

            <form onSubmit={submitWine}>
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
                <button type="submit">get wines</button>
            </form>
        </div>
    )
}
export default WineFormContainer