import {useEffect, useRef, useState} from "react";
import {store} from "../redux/store";
import getCinemasAction from "../actionCreateor/getCinemasAction";

export default function Cinemasearch(){
    let searchRef = useRef();
    const [cinemas, setCinemas] = useState(store.getState().CinemaReducer.cinemas)

    useEffect(()=>{
        if (store.getState().CinemaReducer.cinemas.length === 0){
            store.dispatch(getCinemasAction())
        } else {
            setCinemas(store.getState().CinemaReducer.cinemas)
        }

        let unsubscribe = store.subscribe(()=>{
            setCinemas(store.getState().CinemaReducer.resultData)
        })

        return () => {
            console.log("移除订阅??????????????????????????????")
            unsubscribe()
        }
    }, [])

    return (
        <div>
            <input ref={searchRef} type="text" style={{width: "200px"}}></input>
            <button onClick={()=>{
                store.dispatch({
                    type:'searchCinema',
                    value: searchRef.current.value,
                })
            }}>查询</button>
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