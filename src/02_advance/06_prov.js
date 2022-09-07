import React, {Component} from "react";
import Cinema from "../01_base/mov/Cinema.js";

const GlobalContext = React.createContext()

class App extends Component{
    render() {
        return (
             <GlobalContext.Provider value={{abc:"123"}}>
             </GlobalContext.Provider>
        )
    }
}

class CinemaDetail extends Component {
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default App;
