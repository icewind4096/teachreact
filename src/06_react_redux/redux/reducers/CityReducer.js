const CityReducer = (preState = {
    cityName: '北京',
}, action)=>{
    let newState = {...preState}

    switch (action.type){
        case 'changeCity':{
            newState.cityName = action.value
            break
        }
        default: break
    }

    return newState
}

export default CityReducer
