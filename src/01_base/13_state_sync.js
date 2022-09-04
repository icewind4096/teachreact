import React, {Component} from 'react';

class App extends Component {
    state = {
        count: 1
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.handleTick()}>计数器+1</button>
                <label>{this.state.count}</label>
            </div>
        );
    }

    handleTick() {
        this.setState({
            count: this.state.count + 1,
        })
    }
}

export default App;
