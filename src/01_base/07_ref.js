import Recact, {Component} from "react";

class App extends Component{
    myRef = Recact.createRef();

    render() {
        return (
            <div>
                <input ref={this.myRef}/>
                <button onClick={ ()=> {this.handlerAdd()}}>添加</button>
            </div>
        )
    }

    handlerAdd(){
        console.log("添加 click", this.myRef.current.value)
    }
}

export default App;
