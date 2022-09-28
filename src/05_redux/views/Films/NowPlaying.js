import {useEffect, useState} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import store from "../../redux/store";
import getCinemasAction from "../../actionCreateor/getCinemasAction";

export default function NowPlaying(props){
    const [cinemas, setCinemas] = useState([])

    useEffect(()=>{
        if (store.getState().CinemaReducer.cinemas.length === 0){
            store.dispatch(getCinemasAction())
        } else {
            setCinemas(store.getState().CinemaReducer.cinemas)
        }

        store.subscribe(()=>{
            setCinemas(store.getState().CinemaReducer.cinemas)
        })

        return () => {
            console.log("移除订阅??????????????????????????????")
        }
    }, [])

    return(
        <div>
            NowPlaying

            <div>
                <FilmList clinemas={cinemas} {...props}></FilmList>
                {/*<FilmInfo></FilmInfo>*/}
            </div>
        </div>
    )
}

function FilmList(props){
    return (
        <div style={{background: "red"}}>
            <ul>
                {
                    props.clinemas.map((item)=>{
                        return (
                            // <FilmInfo {...item} {...props}></FilmInfo>
                            <WithFileInfo {...item}></WithFileInfo>
                        )
                    })
                }
            </ul>
        </div>
    )
}

function FilmInfo(props){
    function handleClinemaClick(cinemaId) {
        // 三种跳转方式
        // console.log(props1)
        props.history.push("/cinemadetail/" + cinemaId)

        // window.location.href = "#/cinemadetail/" + cinemaId

        // history.push("/cinemadetail/" + cinemaId)

        // props.history.history.push({
        //     pathname: "/cinemadetail",
        //     query: {
        //         id: cinemaId,
        //         descript: 'query方式传递参数',
        //     }
        // })
    }

    return (
        <div style={{background: "yellowgreen"}}>
            <li key={props.cinemaId} onClick={()=>{
                handleClinemaClick(props.cinemaId)
            }}>{props.name}
            </li>
        </div>
    )
}

const WithFileInfo = withRouter(FilmInfo)
