import {useRef, useState} from "react";

export default function App() {
    const [todoList, setTodoList] = useState([]);

    const refTodoText = useRef(null)

    let refCount = useRef(0)

    const handleAddTodo = () =>{
        setTodoList([...todoList, refTodoText.current.value])
        refTodoText.current.value = ''
        refCount.current++;
    }

    const handleDelTodo = (index) =>{
        let list = [...todoList]
        list.splice(index, 1)
        setTodoList(list)
    }

    return(
        <div>
            <input ref={refTodoText}/>

            <button onClick={()=>{
                handleAddTodo()
            }}>添加</button>

            {
                todoList.length == 0
                    ? <div><h1>暂无数据</h1></div>
                    : <ul>
                        {
                            todoList.map((item, index) => {
                                return <li key={index}>
                                    {item}
                                    <button onClick={(event) => {
                                        handleDelTodo(index)
                                    }
                                    }>删除
                                    </button>
                                </li>
                            })
                        }
                    </ul>
            }
            <h1>Count => {refCount.current}</h1>
        </div>
    )
}