import React, {Component} from 'react';

class Tabbar extends Component {
    state = {
        list: [
            {
                id: 1,
                text: "电影"
            },
            {
                id: 2,
                text: "影院"
            },
            {
                id: 3,
                text: "我的"
            },
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item)=> {
                            return (
                                <li key={item.id} className={this.props.activateIdx === item.id ? "activate" : ""} onClick={()=>{this.props.changActivateTab(item.id)}}>
                                    {item.text}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Tabbar;
