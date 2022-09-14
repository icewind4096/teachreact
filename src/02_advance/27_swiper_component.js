import React, {Component} from 'react';
import WSwiper from "./swiper/WSwiper.js";
import WSwiperItem from "./swiper/WSwiperItem.js";
import axios from "axios";

class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        // setTimeout(()=>{
        //     this.setState({
        //         list: ['https://www.swiper.com.cn/demo/tfboys/images/p1.jpg', 'https://www.swiper.com.cn/demo/tfboys/images/p2.jpg', 'https://www.swiper.com.cn/demo/tfboys/images/p3.jpg']
        //     })
        //     console.log('2')
        // }, 1000)
        axios({
            url: 'https://m.maizuo.com/gateway?type=2&cityId=110100&k=7398342',
            headers:{
                'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.0","e": "16395416565231270166529","bc":"110100"}',
                'X-Host':'mall.cfg.common-banner'
            }
        }).then(response=>{
            this.setState({
                list: ['https://www.swiper.com.cn/demo/tfboys/images/p1.jpg', 'https://www.swiper.com.cn/demo/tfboys/images/p2.jpg', 'https://www.swiper.com.cn/demo/tfboys/images/p3.jpg']
            })
        })
    }

    render() {
        return (
            <div>
                <WSwiper>
                    {
                        this.state.list.map((item)=>{
                            return (<WSwiperItem key={item}><img src={item}></img></WSwiperItem>)
                        })
                    }
                </WSwiper>
            </div>
        );
    }
}

export default App;
