import {Component} from "react";
import IndexRouter from "./router/IndexRouter.js";
import Tabbar from "./component/Tabbar";

export default class App extends Component{
    render() {
        return (
            <div>
                <IndexRouter>
                    <Tabbar></Tabbar>
                </IndexRouter>
            </div>
        )
    }
}
