import {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";

const initState = {
    cinemas: [],
    info: {},
}

function actUseReducer(prevState, action){
    switch (action.type){
        case "changeList": {
            let newState = {...prevState}
            newState.cinemas = action.value
            return newState
        }
        case "getInfo":{
            let newState = {...prevState}
            newState.info = action.value
            return newState
        }
        default: return prevState
    }
}

const GlobalContext = createContext({})

export default function App(){
    const [state, dispatch] = useReducer(actUseReducer, initState)

    useEffect(()=>{
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3815454",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16621954981544637743366145","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list',
            }
        }).then(
            response=>{
                if (response.data.status === 0){
                    dispatch({
                        type: "changeList",
                        value: response.data.data.cinemas,
                    })
                }
            }
        ).catch(err=>{
            console.log(err)
        })
    }, [])

    return (
        <GlobalContext.Provider value={
            {
                state: state,
                dispatch: dispatch,
            }
        }>
            <div>
                <FilmList></FilmList>
                <FilmInfo></FilmInfo>
            </div>
        </GlobalContext.Provider>
    )
}

function FilmList(){
    const context = useContext(GlobalContext)
    const {state, dispatch} = context
    return (
        <div style={{background: "red"}}>
            <ul>
                {
                    state.cinemas.map((item, index)=>{
                        return (
                            <li key={index} onClick={()=>{
                                dispatch({
                                    type: "getInfo",
                                    value: item,
                                })
                            }}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

function FilmInfo(){
    const context = useContext(GlobalContext)
    const {state} = context
    return (
        <div style={{background: "yellowgreen"}}>
            {state.info.address}
        </div>
    )
}
