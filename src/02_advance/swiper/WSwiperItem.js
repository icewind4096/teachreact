import React, {Component} from 'react';

class WSwiperItem extends Component {
    render() {
        return (
            <div className="swiper-slide">
                {this.props.children}
            </div>
        );
    }
}

export default WSwiperItem;
