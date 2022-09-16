import {useEffect, useMemo, useState} from "react";
import axios from "axios";

export default function App() {
    const [filterName, setFilterName] = useState('')
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

    function handleFilter(value){
        setFilterName(value.trim())
    }

    const getCinemas = useMemo(() =>{
        let list = [... cinemas]
        if (filterName.trim().length > 0){
            list = cinemas.filter((item)=>{
                return item.name.substring(0, filterName.length) == filterName
            })
        }
        return list
    }, [cinemas, filterName])

    return (
        <div>
            <h1>电影院列表</h1>
            <input onChange={(event)=>{handleFilter(event.target.value)}}></input>
            <ul>
                {
                    getCinemas.map((item,index)=>{
                        return (
                            <li key={index}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
