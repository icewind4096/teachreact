//1.引入redux
//2.createStore(reducer)

import {applyMiddleware, combineReducers, createStore} from "redux";
import TabberReducer from "./reducers/TabberReducer.js";
import CityReducer from "./reducers/CityReducer.js";
import CinemaReducer from "./reducers/CinemaReducer";
import reduxThunk from "redux-thunk"
import reduxPromise from "redux-promise"
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
    TabberReducer: TabberReducer,
    CityReducer: CityReducer,
    CinemaReducer: CinemaReducer,
})

const persistConfig = {
    key: 'windvalley',
    storage,
    whitelist:['CityReducer'],
}

const persistededucer = persistReducer(persistConfig, reducer)
const store = createStore(persistededucer, applyMiddleware(reduxThunk, reduxPromise))

let persistor = persistStore(store)

// const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))

// export default store
export {store, persistor}