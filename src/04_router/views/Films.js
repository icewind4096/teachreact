import {Redirect, Route, Switch} from "react-router-dom";
import NowPlaying from "./Films/NowPlaying";
import Comingsoon from "./Films/Comingsoon";

export default function Films(){
    return (
        <div>
            <div style={{height: "200px", background: "yellow"}}></div>

            <div>导航栏</div>

            <Switch>
                <Route path="/films/nowplaying" component={NowPlaying}/>

                <Route path="/films/comingsoon" component={Comingsoon}/>

                <Redirect from={"/films"} to={"/films/nowplaying"}/>
            </Switch>
        </div>
    )
}

