import React, {Component} from 'react';
import propValid from "prop-types";

class Navbar extends Component{
    render() {
        return (
            <div style={{background: "red"}}>
                navbar
                <button onClick={()=>{this.setSildeBarStyle(this.props.event)}}>Click</button>
            </div>
        )
    }

    setSildeBarStyle(event) {
        event();
    }
}

class Sidebar extends Component{
    render() {
        return (
            <div style={{background: "yellow"}}>
                sidebar
            </div>
        )
    }
}

class App extends Component {
    state = {
        sideBarExpend: true,
    }

    render() {
        return (
            <div>
                <Navbar event={()=>{this.setState({sideBarExpend: !this.state.sideBarExpend})}}></Navbar>
                {this.state.sideBarExpend === true ? <Sidebar></Sidebar> : null}
            </div>
        );
    }
}

export default App;
