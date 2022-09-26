//1.引入redux
//2.createStore(reducer)

import {createStore} from "redux";

const reducer = (preState, action)=>{
    console.log(action)
    let newState = {...preState}

    switch (action.type){
        case 'hideTabbar': {
            newState.showTabber = false
            break
        }
        case 'showTabbar':{
            newState.showTabber = true
            break
        }
        default: break
    }

    return newState
}

const store = createStore(reducer)

export default store
