import {useCallback, useState} from "react";

export default function App() {
    const [todoText, setTodoText] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleChange = useCallback((event)=>{
        setTodoText(event.target.value)
    }, [])

    const handleAddTodo = useCallback(() =>{
        setTodoList([...todoList, todoText])
        setTodoText('')
    }, [todoText, todoList])

    const handleDelTodo = useCallback((index) =>{
        let list = [...todoList]
        list.splice(index , 1)
        setTodoList(list)
    }, [todoList])

    return(
        <div>
            <input onChange={(event)=>{
                handleChange(event)
            }} value={todoText}/>

            <button onClick={()=>{
                handleAddTodo()
            }}>添加</button>

            {
                todoList.length === 0
                    ? <div><h1>暂无数据</h1></div>
                    : <ul>
                        {
                            todoList.map((item, index) => {
                                return <li key={index}>
                                    {item}
                                    <button onClick={() => {
                                        handleDelTodo(index)
                                    }
                                    }>删除
                                    </button>
                                </li>
                            })
                        }
                      </ul>
            }
        </div>
    )
}