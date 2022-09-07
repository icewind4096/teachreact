import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Child extends Component {
    render() {
        return (
            <div>
                {this.props.children[0]}
                child
                {this.props.children[1]}
                child
                {this.props.children[2]}
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Child>
                    <div>
                        App Component 0
                    </div>

                    <div>
                        App Component 1
                    </div>

                    <div>
                        App Component 2
                    </div>
                </Child>
            </div>
        );
    }
}

export default App;
