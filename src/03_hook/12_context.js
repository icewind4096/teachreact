import {useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

const GlobalContext = createContext({});

export default function App(){
    const [cinemas, setCinemas] = useState([])
    const [cinemaInfo, setCinemaInfo] = useState({})

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
                    setCinemas(response.data.data.cinemas);
                }
            }
        ).catch(err=>{
            console.log(err)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
                cinemaInfo: cinemaInfo,
                changeInfo: (info)=>{
                    setCinemaInfo(info)
                }
            }}>

            <div>
                <h1>电影院列表</h1>
                <ol>
                    {
                        cinemas.map((item,index)=>{
                            return (
                                <CinemaItem key={index} data={item}></CinemaItem>
                            )
                        })
                    }
                </ol>
                <CinemaDetail></CinemaDetail>
            </div>
        </GlobalContext.Provider>
    )
}

function CinemaItem(props){
    const value = useContext(GlobalContext)
    return (<li onClick={()=>{value.changeInfo(props.data)}}>{props.data.name}</li>)
}

function CinemaDetail(){
    const value = useContext(GlobalContext)
    return (
        <div style={{background: "red", display: "flex"}}>
            <h1>{value.cinemaInfo.name}</h1>
            <h2>{value.cinemaInfo.address}</h2>
        </div>
    )
}