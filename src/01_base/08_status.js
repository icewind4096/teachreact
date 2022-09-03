import {Component} from "react";

class App extends Component{
    constructor() {
        super();
        this.state = {
            saved: false,
        }
    }

    render() {
        return (
            <div>
                <h1>欢迎来到react开发</h1>
                <button onClick={()=>{this.saveHandler()}} >{this.state.saved === false ? "收藏" : "取消收藏"}</button>
            </div>
        )
    }

    saveHandler(){
        this.setState(
      {
                saved: !this.state.saved,
            }
        )
    }
}

export default App;
