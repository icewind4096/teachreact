import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Films from "../views/Films.js";
import Cinemas from "../views/Cinemas.js";
import Center from "../views/Center.js";
import NotFound from "../views/NotFound";

export default function IndexRouter(props){
    return (
        <HashRouter>
            {props.children}
            <Switch>
                <Route path='/films' component={Films}></Route>
                <Route path='/cinemas' component={Cinemas}></Route>
                <Route path='/center' component={Center}></Route>

                {/*精确匹配，如果只是/,那个跳转到/films, 否则继续向下运行*/}
                <Redirect from="/" to="/films" exact></Redirect>

                {/*如果匹配不上回到404*/}
                <Route component={NotFound}></Route>
            </Switch>
        </HashRouter>
    )
}
