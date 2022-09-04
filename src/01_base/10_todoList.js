import Recact, {Component} from "react";

class App extends Component{
    todoContend = Recact.createRef();

    constructor() {
        super();
        this.state = {
            todos: [
                {
                    name: "1",
                    done: true,
                },
                {
                    name: "2",
                    done: false,
                }
                ]
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
                            <li key={item.name}>
                                <span dangerouslySetInnerHTML={{__html: item.name}}></span>
                                <input type="checkbox" checked={item.done} onChange={(event)=>{this.todoDone(event, item.name)}}/>
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
        list.push({name: this.todoContend.current.value, done: false})
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

    todoDone(event, key) {
        let list = [...this.state.todos];
        list.forEach((item)=>{
            if (item.name === key){
                item.done = true;
            }
        })
        this.setState({
            todos: [...list]
        })
    }
}

export default App
