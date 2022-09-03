import {Component} from "react";
import Movies from "./mov/Movies.js";
import Cinema from "./mov/Cinema.js";
import Me from "./mov/Me.js";
import "./css/12_tab.css"

class App extends Component{
    state = {
        activateIdx: 1,
        list: [
            {
                id: 1,
                text: "电影"
            },
            {
                id: 2,
                text: "影院"
            },
            {
                id: 3,
                text: "我的"
            },
        ]
    }

    render() {
        return (
            <div>
                {
                    this.switchComponent(this.state.activateIdx)
                }
                <ul>
                    {
                        this.state.list.map((item)=> {
                            return (
                                <li key={item.id} className={this.state.activateIdx === item.id ? "activate" : ""} onClick={()=>{this.handleChangeTab(item.id)}}>
                                    {item.text}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    handleChangeTab(tabId) {
        this.setState({
            activateIdx: tabId,
        })
    }

    switchComponent(activateIdx) {
        switch (activateIdx) {
            case 1: return <Movies></Movies>
            case 2: return <Cinema></Cinema>
           default: return <Me></Me>
        }
    }
}

export default App;
