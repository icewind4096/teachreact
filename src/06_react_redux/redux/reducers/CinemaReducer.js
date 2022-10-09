const CinemaReducer = (preState = {
    cinemas: [],
    resultData: [],
}, action) =>{
    let newState = {...preState}

    switch (action.type) {
        case 'reloadCinemas': {
            newState.cinemas = action.value
            break
        }
        case 'searchCinema': {
            newState.resultData = newState.cinemas.filter((item)=>{
                if (item.name.indexOf(action.value) >= 0){
                    return item
                }
            })
            break;
        }
        default: break
    }

    return newState
}

export default CinemaReducer