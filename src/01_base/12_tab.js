import {Component} from "react";
import Movies from "./mov/Movies.js";
import Cinema from "./mov/Cinema.js";
import Me from "./mov/Me.js";
import "./css/12_tab.css"
import Tabbar from "./Tabbar/Tabbar.js"

class Navbar extends Component{
    render() {
        return (
            <div style={{background: "yellowgreen", display: "flex", flexDirection:"row-reverse"}}>
                <span>卖座电影</span>
                <button style={{marginRight: "10px"}} onClick={this.props.showMeEvent}>我的</button>
            </div>
        )
    }
}

class App extends Component{
    state = {
        activateIdx: 1,
    }

    render() {
        return (
            <div>
                <Navbar showMeEvent={()=>{this.showMe()}}></Navbar>
                {this.switchComponent(this.state.activateIdx)}
                <Tabbar activateIdx={this.state.activateIdx} changActivateTab={(activateIdx)=>{this.changeActivateTab(activateIdx)}}></Tabbar>
            </div>
        )
    }

    switchComponent(activateIdx) {
        switch (activateIdx) {
            case 1: return <Movies></Movies>
            case 2: return <Cinema></Cinema>
           default: return <Me></Me>
        }
    }

    showMe() {
        this.setState({
            activateIdx: 3,
        })
    }

    changeActivateTab(activateIdx) {
        this.setState({
            activateIdx: activateIdx,
        })
    }
}

export default App;
