import {useEffect, useState} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

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
