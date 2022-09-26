import {NavLink} from "react-router-dom";
import style from './Tabbar.module.css'

export default function App(){
    return (
        <div className={style.tabber}>
            <ul>
                <li>
                    <NavLink activeClassName="activateLink" to={'/films'}>电影</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activateLink" to={'/cinemas'}>影院</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activateLink" to={'/center'}>我的</NavLink>
                </li>
            </ul>
        </div>
    )
}
