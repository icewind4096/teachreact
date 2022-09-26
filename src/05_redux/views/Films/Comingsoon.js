import {useEffect, useState} from "react";
import axios from "axios";

export default function Comingsoon(){
    const [films, setFilms] = useState([])

    useEffect(()=>{
        axios({
            url: "/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=6778A9203B4011ED9936954B02B17246BC2EA1506DDB45B9AD14F6D5718F243E&optimus_risk_level=71&optimus_code=10",
            method: "get"
        }).then(
            response=>{
                if (response.data.success === true){
                    setFilms(response.data.coming)
                }
            }
        ).catch(err=>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            Comingsoon
            <ul>
                {
                    films.map((item)=>{
                        console.log(item)
                        return (
                            <li key={item.id}>
                                <img style={{width: "150px", height: "150px"}} src={item.img}/>
                                {item.nm}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
