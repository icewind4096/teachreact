import {useEffect, useState} from "react";
import store from "../redux/store.js";
import getCinemasAction from "../actionCreateor/getCinemasAction";

export default function Cinemas(props){
    const [cityName, setCityName] = useState(store.getState().CityReducer.cityName)
    const [cinemas, setCinemas] = useState(store.getState().CinemaReducer.cinemas)

    useEffect(()=>{
        if (store.getState().CinemaReducer.cinemas.length === 0){
            store.dispatch(getCinemasAction())
        } else {
            setCinemas(store.getState().CinemaReducer.cinemas)
        }

        store.subscribe(()=>{
            setCinemas(store.getState().CinemaReducer.cinemas)
        })

        return () => {
            console.log("移除订阅??????????????????????????????")
        }
    }, [])

    return (
        <div>
            Cinemas
            <h1 onClick={()=>{props.history.push('/city')}}>{cityName}</h1>
            <ul>
                {
                    cinemas.map((item)=>{
                        return(
                            <li key={item.cinemaId}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
