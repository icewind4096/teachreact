import {HashRouter, Route} from "react-router-dom";
import Films from "../views/Films.js";
import Cinemas from "../views/Cinemas.js";
import Center from "../views/Center.js";

export default function IndexRouter(){
    return (
        <HashRouter>
            <Route path='/films' component={Films}></Route>
            <Route path='/cinemas' component={Cinemas}></Route>
            <Route path='/center' component={Center}></Route>
        </HashRouter>
    )
}
