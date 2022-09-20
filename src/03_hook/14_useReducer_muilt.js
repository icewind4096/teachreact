import {useContext, useReducer, createContext} from "react";

let initailState = {
    a: '11111',
    b: '11111',
}

function actUseReducer(prevState, action){
    let nowState = {...prevState}
    switch (action.type){
        case "childA": nowState.a = "我改变了Child 2"; break;
        case "childB": nowState.b = "我改变了Child 3"; break;
        default: break;
    }
    return nowState
}

const GlobalContext = createContext({})

export default function App(){
    const [state, dispatch] = useReducer(actUseReducer, initailState)

    return (
        <GlobalContext.Provider value={
                {
                    state: state,
                    dispatch: dispatch,
                }
            }>
            <div>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1(){
    const context = useContext(GlobalContext)
    const {dispatch} = context
    return (
        <div style={{background: "blue"}}>
            <button onClick={()=>{dispatch({type: "childA"})}}>Child 改变A</button>
            <button onClick={()=>{dispatch({type: "childB"})}}>Child 改变B</button>
        </div>
    )
}

function Child2(){
    const context = useContext(GlobalContext)
    const {state} = context
    return (
        <div style={{background: "red"}}>
            {state.a}
        </div>
    )
}

function Child3(){
    const context = useContext(GlobalContext)
    const {state} = context
    return (
        <div style={{background: "yellowgreen"}}>
            {state.b}
        </div>
    )
}
