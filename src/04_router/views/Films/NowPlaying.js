import {createContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router";

export default function NowPlaying(props){
    const [cinemas, setCinemas] = useState([])

    useEffect(()=>{
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3815454",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16621954981544637743366145","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list',
            }
        }).then(
            response=>{
                if (response.data.status === 0){
                    setCinemas(response.data.data.cinemas)
                }
            }
        ).catch(err=>{
            console.log(err)
        })
    }, [])

    return(
        <div>
            NowPlaying

            <div>
                <FilmList clinemas={cinemas} history={props}></FilmList>
                {/*<FilmInfo></FilmInfo>*/}
            </div>
        </div>
    )
}

function FilmList(props){
    // const history = useHistory()

    function handleClinemaClick(cinemaId) {
        // 三种跳转方式
        props.history.history.push("/cinemadetail/" + cinemaId)
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
        <div style={{background: "red"}}>
            <ul>
                {
                    props.clinemas.map((item, index)=>{
                        return (
                            <li key={index} onClick={()=>{
                                handleClinemaClick(item.cinemaId)
                            }}>{item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

function FilmInfo(){
    return (
        <div style={{background: "yellowgreen"}}>

        </div>
    )
}
