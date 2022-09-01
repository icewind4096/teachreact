import React, {Component} from "react";

class NavBarChild extends Component{
    render() {
        return <div>NarBar的子组件</div>
    }
}

class NavBar extends Component{
    render() {
        return (
            <div>
                NavBar
                <NavBarChild></NavBarChild>
                <NavBarChild></NavBarChild>
                <NavBarChild></NavBarChild>
            </div>
        )
    }
}

class Swiper extends Component{
    render() {
        return <div>Swiper</div>
    }
}

class TabBar extends Component{
    render() {
        return <div>TabBar</div>
    }
}

class App extends Component{
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Swiper></Swiper>
                <TabBar></TabBar>
            </div>
        )
    }
}

export default App
