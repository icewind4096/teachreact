import {Component} from "react";

class App extends Component{

    constructor() {
        super();
        this.state = {
            todos: ["1", "2", "3"]
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.todos.map(item => <li key={item}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default App
