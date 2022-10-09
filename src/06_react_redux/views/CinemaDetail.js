import {useEffect} from "react";
import {store} from "../redux/store.js";

export default function CinemaDetail(props){
    useEffect(()=>{
        console.log("cinema detail create")

        store.dispatch({
            type: "hideTabbar",
        })

        return () => {
            console.log("cinema detail destory")
            store.dispatch({
                type: "showTabbar",
            })
        }
    }, [])

    return (
        <div>
            detail
            <h1>
                {props.match.params.id}
            </h1>
            {/*<h1>{props.location.query.id}</h1>*/}
            {/*<h2>{props.location.query.descript}</h2>*/}
        </div>
    )
}
