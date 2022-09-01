import React, {Component} from "react";
import './css/index.css'

class App extends Component{
    render() {
        return (
            <div className="active">
                 {10 + 20}
                 <div style={{color: 'red', fontSize: '10pt', background: "darkred"}}>
                     {30+40}
                 </div>
            </div>
        )
    }
}

export default App;
