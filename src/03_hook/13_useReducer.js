import {useReducer} from "react";

const initState = {
    count: 0,
}

function actUseReducer(prevState, action){
    let nowState = {...prevState}
    switch (action.type){
        case "inc": nowState.count = nowState.count + 1; break;
        case "dec": nowState.count = nowState.count - 1; break;
    }
    console.log(nowState)
    return nowState
}

export default function App(){
    const [state, dispatch] = useReducer(actUseReducer, initState)

    return(
        <div>
            <button onClick={()=>{dispatch({type: "inc"})}}>+</button>
            {state.count}
            <button onClick={()=>{dispatch({type: "dec"})}}>-</button>
        </div>
    )
}
