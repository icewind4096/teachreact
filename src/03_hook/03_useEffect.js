import {useEffect, useState} from "react";
import axios from "axios";

export default function App() {
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
                    setCinemas(response.data.data.cinemas);
                }
            }
        ).catch(err=>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>电影院列表</h1>
            <ul>
                {
                    cinemas.map((item,index)=>{
                        return (
                            <li key={index}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
