//1.引入redux
//2.createStore(reducer)

import {combineReducers, createStore} from "redux";
import TabberReducer from "./reducers/TabberReducer.js";
import CityReducer from "./reducers/CityReducer.js";

const reducer = combineReducers({
    TabberReducer: TabberReducer,
    CityReducer: CityReducer,
})

const store = createStore(reducer)

export default store
