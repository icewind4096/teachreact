import {Component} from "react";
import Navbar from "./Navbar";

class App extends Component{
    render() {
        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title="首页" leftButtonShow={true}></Navbar>
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title="列表"></Navbar>
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title="购物车"></Navbar>
                </div>
                <div>
                    <h2>默认</h2>
                    <Navbar ></Navbar>
                </div>
            </div>
        )
    }
}

export default App;
