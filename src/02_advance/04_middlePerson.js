import {Component} from "react";
import Cinema from "../01_base/mov/Cinema.js";
import CinemaDetail from "../01_base/mov/CinemaDetail.js";

class App extends Component{
    state = {
        detail: {}
    }

    render() {
        return (
            <div style={{display: "flex"}} >
                <Cinema clientEvent={(data)=>{this.getCinemaDetail(data)}}></Cinema>
                <CinemaDetail data={this.state.detail}></CinemaDetail>
            </div>
        )
    }

    getCinemaDetail(data) {
        this.setState({
            detail: data,
        })
    }
}

export default App;
