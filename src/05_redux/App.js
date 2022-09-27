import {Component, useState} from "react";
import IndexRouter from "./router/IndexRouter.js";
import Tabbar from "./component/Tabbar";
import "./views/css/app.css"
import store from "./redux/store.js";

export default class App extends Component{
    state = {
        showTabber: true
    }

    componentDidMount() {
        store.subscribe(()=>{
            this.setState(
                {
                    showTabber: store.getState().TabberReducer.showTabber,
                }
            )
        })
    }

    render() {
        return (
            <div>
                <IndexRouter>
                    {this.state.showTabber === true ? <Tabbar></Tabbar> : ''}
                </IndexRouter>
            </div>
        )
    }
}
