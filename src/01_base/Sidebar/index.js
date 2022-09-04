import React, {Component} from 'react';

function Sidebar(props) {
    let bg = props.bg;
    return (
        <div style={{background: bg, width: "200px"}}>
            <ul>
                <li>列表1</li>
                <li>列表2</li>
                <li>列表2</li>
            </ul>
        </div>
    )
}

export default Sidebar;

//函数式默认属性 Sidebar.defaultProps
//函数式参数校验 Sidebar.propTypes
//函数式写法，类也支持,但是使用类属性，感觉更符合我的理解
