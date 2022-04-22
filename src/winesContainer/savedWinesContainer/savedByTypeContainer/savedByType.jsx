import { useState, useEffect } from 'react'

const SavedByType = (props)=>{
    useEffect(() =>{
        wineCellarMatch();
        sortWines();
    }, [])
    const [wines, setWines] = useState([])
    const [reds, setReds] = useState([])
    const [whites, setWhites] = useState([])
    const [sparkling, setSparkling] = useState([])
    const [other, setOther] = useState([])

    const wineCellarMatch = ()=>{
        setWines(props.wineCellar)
        console.log(wines)
    }

    const sortWines =()=>{
        const redArray = wines.filter((wine)=>{
            return wine.type === 'red'
        })
        setReds(redArray) 
        console.log(reds)
        const whiteArray = wines.filter((wine)=>{
            return wine.type === 'white'
        })
        setWhites(whiteArray)
        const sparklingArray = wines.filter((wine)=>{
            return wine.type === 'sparkling'
        })
        setSparkling(sparklingArray)
        const otherArray = wines.filter((wine)=>{
            return wine.type === 'other'
        })
        setOther(otherArray)
    }
    
    return(
        <div>
            <div id="reds">
            <h2>Red:</h2>
                { reds.map ((red)=>{
                    return(
                        <div>
                            <h3>{red.name}</h3>
                            <img src={red.img}></img>
                        </div>
                    )
                })}
            </div>
            <div id="whites">
            <h2>White:</h2>
                { whites.map ((white)=>{
                    return(
                        <div>
                            <h3>{white.name}</h3>
                            <img src={white.img}></img>
                        </div>
                    )
                })}
            </div>
            <div id="sparkling">
                <h2>Sparkling:</h2>
                { sparkling.map ((sparkling)=>{
                    return(
                        <div>
                            <h3>{sparkling.name}</h3>
                            <img src={sparkling.img}></img>
                        </div>
                    )
                })}
            </div>
            <div id="other">
            <h2>Dessert & Other:</h2>
                { other.map ((other)=>{
                    return(
                        <div>
                            <h3>{other.name}</h3>
                            <img src={other.img}></img>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default SavedByType