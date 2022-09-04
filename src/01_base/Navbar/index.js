import {Component} from "react";
import propValid from "prop-types"

class Navbar extends Component{
    //属性校验, 必须使用static定义为类属性
    static propTypes = {
        title: propValid.string,
        leftButtonShow: propValid.bool,
        rightButtonShow: propValid.bool,
    }

    //属性默认值，必须使用static定义为类属性
    static defaultProps = {
        title: "默认值 呵呵"
    }

    render() {
        return (
            <div>
                {this.props.title === "首页" ? null : <button>返回</button>}
                {this.props.title}
                {this.props.title !== "首页" ? null : <button>查询</button>}
            </div>
        )
    }
}

export default Navbar
