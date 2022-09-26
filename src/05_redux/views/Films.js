import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import NowPlaying from "./Films/NowPlaying";
import Comingsoon from "./Films/Comingsoon";

export default function Films(){
    return (
        <div>
            <div style={{height: "200px", background: "yellow"}}></div>

            <ul>
                <li>
                    <NavLink to={"/films/nowplaying"}>电影院列表</NavLink>
                </li>
                <li>
                    <NavLink to={"/films/comingsoon"}>即将上映</NavLink>
                </li>
            </ul>

            <Switch>
                <Route path="/films/nowplaying" component={NowPlaying}/>

                <Route path="/films/comingsoon" component={Comingsoon}/>

                <Redirect from={"/films"} to={"/films/nowplaying"}/>
            </Switch>
        </div>
    )
}

