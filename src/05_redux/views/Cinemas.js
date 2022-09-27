import {useState} from "react";
import store from "../redux/store.js";

export default function Cinemas(props){
    const [cityName, setCityName] = useState(store.getState().CityReducer.cityName)

    return (
        <div>
            Cinemas
            {
            }
            <h1 onClick={()=>{props.history.push('/city')}}>{cityName}</h1>
        </div>
    )
}
