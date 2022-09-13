import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    state = {

    }

    static getDerivedStateFromProps(props, state){
        console.log("ggetDerivedStateFromProps")
        return {
            name: state.name,
            age: state.age,
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        // console.log(prevProps, prevState)
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                {console.log("render")}
                new life cycle ====》 {this.state.name}
                <button onClick={()=>{
                    this.setState({
                        name: "abc"
                    })
                }}>change name</button>
                <button onClick={()=>{
                    this.setState({
                        age: 18,
                    })
                }}>change age</button>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
