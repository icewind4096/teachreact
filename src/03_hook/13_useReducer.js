import {useReducer} from "react";

function funcReducer(preState, action){
    console.log(preState, action)
    switch (action.type){
        case
    }

}

const initalState = {
    count: 0,
}

export default function App() {
    const [state, dispatch] = useReducer(funcReducer, initalState)
    return (
        <div>
            <button onClick={()=>{dispatch({
                type: 'inc'
            })}}>+</button>
            {initalState.count}
            <button onClick={()=>{dispatch({
                type: 'dec'
            })}}>-</button>
        </div>
    )
}