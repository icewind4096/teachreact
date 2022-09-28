const CinemaReducer = (preState = {
    cinemas: [],
}, action) =>{
    let newState = {...preState}

    switch (action.type) {
        case 'reloadCinemas': {
            newState.cinemas = action.value
            break
        }
        default: break
    }

    return newState
}

export default CinemaReducer