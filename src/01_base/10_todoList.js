import Recact, {Component} from "react";

class App extends Component{
    todoContend = Recact.createRef();

    constructor() {
        super();
        this.state = {
            todos: ["1", "2", "3"]
        }
    }

    render() {
        return (
            <div>
                <input ref={this.todoContend}/>
                <button onClick={()=>{this.btnAddClick()}}>添加</button>
                <ul>
                    {
                        this.state.todos.map(item =>
                            <li key={item}>{item}
                                <span dangerouslySetInnerHTML={{__html: item}}></span>
                                <button onClick={()=>{this.btnDelClick(item)}}>移除</button>
                            </li>)
                    }
                </ul>

                {this.state.todos.length === 0 ? <div>暂无代办事项</div> : null}
            </div>
        )
    }

    btnAddClick() {
        let list = [...this.state.todos]
        list.push(this.todoContend.current.value)
        this.todoContend.current.value = ""
        this.todoContend.current.focus()
        this.setState({
            todos: list,
        })
    }

    btnDelClick(item) {
        let list = [...this.state.todos];
        list.splice(list.indexOf(item), 1)
        this.setState({
            todos: list,
        })
    }
}

export default App
