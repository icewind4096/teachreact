import React, {Component} from 'react';

class App extends Component {
    state = {
        userName: "",
    }

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <input type="text" value={this.state.userName} onChange={(event)=>{this.handleUserNameChange(event)}}></input>
                <button onClick={()=>{this.handleLogin()}}>登录</button>
                <button onClick={()=>{this.setState({userName: ''})}}>重置</button>
            </div>
        );
    }

    handleLogin(){
        console.log(this.state.userName)
    }

    handleUserNameChange(event) {
        this.setState({
            userName: event.target.value,
        })
    }
}

export default App;
