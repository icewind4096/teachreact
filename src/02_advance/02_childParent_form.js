import React, {Component} from 'react';

class Field extends Component{
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} value={this.props.value} onChange={(event)=>{this.props.changeEvent(event.target.value)}}></input>
            </div>
        )
    }
}

class App extends Component {
    state = {
        userName: "",
        password: "",
    }

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Field label="用户名" type="text" value={this.state.userName} changeEvent={(value)=>{this.setState({userName:value})}}></Field>
                <Field label="密码" type="password" value={this.state.password} changeEvent={(value)=>{this.setState({password:value})}}></Field>
                <button onClick={()=>{console.log(this.state.userName, this.state.password)}}>登录</button>
                <button>取消</button>
            </div>
        );
    }
}

export default App;
