import {Component} from "react";
import axios from "axios";
import BScroll from "better-scroll"

class App extends Component{
    state = {
        cinemas: [],
    }

    constructor() {
        super();
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3815454",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16621954981544637743366145","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list',
            }
        }).then(
            response=>{
                if (response.data.status === 0){
                    this.setState(
                        {
                            cinemas: response.data.data.cinemas,
                        }, ()=>{
                            new BScroll(".wrapper")
                        }
                    )
                }
            }
        ).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className="wrapper" style={{background: "red", height:"200px", overflow: "hidden"}}>
                    <ul className="content">
                        {
                            this.state.cinemas.map(item=>{
                                return <li key={item.cinemaId}>
                                    {item.name}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;
