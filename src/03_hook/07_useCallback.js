import {useState} from "react";

export default function App(){

    const [count, setCount] = useState(0)

    function handleAddClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleAddClick}>计数器+1</button>
        </div>
    )
}