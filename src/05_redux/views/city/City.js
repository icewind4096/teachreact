import {useState} from "react";
import store from "../../redux/store.js";

export default function City(props){
    const [list, setList] = useState(['南京', '北京', '上海', '广州', '深圳'])

    return (
        <div>
            city
            <ul>
                {
                    list.map((item,index)=>{
                        return (
                            <li key={index} onClick={()=>{
                                store.dispatch({
                                    type: "changeCity",
                                    value: item,
                                })
                                props.history.push('/cinemas')
                            }}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
