const TabberReducer = (preState = {
    showTabber: true,
}, action)=>{
    let newState = {...preState}

    switch (action.type){
        case 'hideTabbar': {
            newState.showTabber = false
            console.log(newState)
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

export default TabberReducer
