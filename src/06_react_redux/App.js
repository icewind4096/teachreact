import {Component, useState} from "react";
import IndexRouter from "./router/IndexRouter.js";
import Tabbar from "./component/Tabbar";
import "./views/css/app.css"
import {connect} from 'react-redux'

class App extends Component{
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <IndexRouter>
                    {this.props.showTabber === true ? <Tabbar></Tabbar> : ''}
                </IndexRouter>
            </div>
        )
    }
}

export default connect((state)=>{
    console.log(state)
    return {
        showTabber: state.TabberReducer.showTabber,
    }
})(App)