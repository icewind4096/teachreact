//1.引入redux
//2.createStore(reducer)

import {applyMiddleware, combineReducers, createStore} from "redux";
import TabberReducer from "./reducers/TabberReducer.js";
import CityReducer from "./reducers/CityReducer.js";
import CinemaReducer from "./reducers/CinemaReducer";
import reduxThunk from "redux-thunk"

const reducer = combineReducers({
    TabberReducer: TabberReducer,
    CityReducer: CityReducer,
    CinemaReducer: CinemaReducer,
})

const store = createStore(reducer, applyMiddleware(reduxThunk))

export default store
