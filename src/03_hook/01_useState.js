import {useState} from "react";

export default function App(){
    const [name, setName] = useState("first hook app")
    const [age, setAge] = useState(18)

    return (
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <button onClick={()=>{
                setName("second hook app")
            }}>改名</button>
            <button onClick={()=>{
                setAge(age + 10)
            }} >修改年龄</button>
        </div>
    )
}