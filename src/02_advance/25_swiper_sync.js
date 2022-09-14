import React, {Component} from 'react';
import Swiper, {Navigation, Pagination} from 'swiper';

import 'swiper/css/bundle';

Swiper.use([Navigation, Pagination])

class App extends Component {
    state = {
        list: ["item1", "item2", "item3"]
    }

    componentDidMount() {
        new Swiper('.swiper', {
                    pagination: {
                        el: '.swiper-pagination',
                    },
        })
    }

    render() {
        return (
            <div>
                <div className="swiper" style={{height: "200px", background: "yellowgreen"}}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map((item)=>{
                                return (
                                    <div className="swiper-slide" key={item}>{item}</div>
                                )
                            })
                        }
                    </div>

                    <div class="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}

export default App;
