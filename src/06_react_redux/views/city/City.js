import {useState} from "react";
// import store from "../../redux/store.js";
import {connect} from "react-redux";

function City(props){
    const [list, setList] = useState(['南京', '北京', '上海', '广州', '深圳'])

    return (
        <div>
            city
            <ul>
                {
                    list.map((item,index)=>{
                        return (
                            <li key={index} onClick={()=>{
                                props.change(item)
                                // store.dispatch({
                                //     type: "changeCity",
                                //     value: item,
                                // })
                                props.history.push('/cinemas')
                            }}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapDispatchToProp = {
    change(item){
        return {
            type: "changeCity",
            value: item,
        }
    },
}
export default connect(null, mapDispatchToProp)(City)