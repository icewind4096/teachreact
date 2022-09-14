import React, {Component} from 'react';

class App extends Component {
    state = {
        mailList:["mail1","mail2","mail3","mail4","mail5","mail6","mail7","mail8","mail9",]
    }

    boxRef = React.createRef();

    render() {
        return (
            <div>
                <button onClick={()=>{this.receiveEMail()}}>接受邮件</button>
                <h1>邮箱应用</h1>
                <div ref={this.boxRef} style={{height: "150px", overflow: "auto"}}>
                    <ul>
                        {
                            this.state.mailList.map((item,index)=>{
                                return(
                                    <li style={{height: "100px", background: index % 2 === 1 ? "yellow" : "red"}} key={index}>{item}</li>
                                )
                        })}
                    </ul>
                </div>
            </div>
        );
    }

    receiveEMail() {
        this.setState({
            mailList: [...["mail101", "mail102", "mail103", "mail104"], ...this.state.mailList]
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        //获取容器高度
        return this.boxRef.current.scrollHeight;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.boxRef.current.scrollTop = this.boxRef.current.scrollTop + (this.boxRef.current.scrollHeight - snapshot);
    }
}

export default App;