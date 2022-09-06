import React, {Component} from 'react';

class Field extends Component{
    state = {
        value: ""
    }

    clear(){
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(event)=>{this.setState({value: event.target.value})}} value={this.state.value}></input>
            </div>
        )
    }
}

class App extends Component {
    userName = React.createRef();
    password = React.createRef();

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Field label="用户名" type="text" ref={this.userName}></Field>
                <Field label="密码" type="password" ref={this.password}></Field>
                <button onClick={()=>{console.log(this.userName.current.state.value, this.password.current.state.value)}}>登录</button>
                {/*<button onClick={()=>{this.userName.current.setState({value:"123"})}}>取消</button>*/}
                <button onClick={()=>{this.userName.current.clear()}}>取消</button>
            </div>
        );
    }
}

export default App;
