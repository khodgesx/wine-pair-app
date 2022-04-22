import { useState, useEffect } from 'react'

const SavedByType = (props)=>{
    useEffect(() =>{
       getAndSort();
    }, [])
    const [wines, setWines] = useState([])
    const [reds, setReds] = useState([])
    const [whites, setWhites] = useState([])
    const [sparkling, setSparkling] = useState([])
    const [other, setOther] = useState([])

    const getAndSort =async()=>{
        const wines = await getWines();
        sortWines(wines);
       } 
    // const wineCellarMatch = ()=>{
    //     setWines(props.wineCellar)
    //     console.log(wines)
    // }
    const user = JSON.parse(localStorage.getItem('props.currentUser'))
    const getWines = async ()=>{
      try{
          const wineFetch = await fetch (`http://localhost:3001/wines/user/${user._id}`)
          const parsedWines = await wineFetch.json()
          setWines(parsedWines.data)
          return parsedWines.data
      }catch(err){
          console.log(err)
      }
    }

    const sortWines =(wines)=>{
        const redArray = wines.filter((wine)=>{
            return wine.type === 'red'
        })
        setReds(redArray) 

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
                        <div key={red._id}>
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
                        <div key={white.id}>
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
                        <div key={sparkling._id}>
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
                        <div key={other._id}>
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