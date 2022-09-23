import {useEffect, useState} from "react";
import axios from "axios";

export default function Comingsoon(){
    const [cinemas, setCinemas] = useState([])

    useEffect(()=>{
        axios({
            url: "/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=85A150803B1F11EDBEB24DECBA56A13604367D90CAC54926B99A91361EA238E4&optimus_risk_level=71&optimus_code=10",
            method: "get"
        }).then(
            response=>{
                console.log(response)
                if (response.data.status === 0){
                    console.log(response.data)
                }
            }
        ).catch(err=>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            Comingsoon
        </div>
    )
}
