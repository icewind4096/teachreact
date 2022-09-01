import React, {Component} from "react";

class App extends Component{
    a = 100;

    render() {
        return (
            <div>
                <input/>
                <button onClick={()=>{
                    console.log("add click", this.a)
                }}>添加</button>
                <button onClick= { ()=>{this.handleClear()} } >清除</button>
            </div>
        )
    }

    handleClear(){
        console.log("clear click", this.a)
    }
}

export default App;
