import Recact, {Component} from "react";
import axios from "axios";

class Cinema extends Component{
    inputRef = Recact.createRef();

    state = {
        cinemas: [],
        cinemasBk: [],
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
                            cinemasBk: response.data.data.cinemas,
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
                <div>
                    <input ref={this.inputRef} onInput={()=>{this.handlInput()}}/>
                </div>
                <div>
                    {
                        this.state.cinemas.map(item=>{
                            return <dl key={item.cinemaId} onClick={()=>this.props.clientEvent(item)}>
                                <dt>{item.name}</dt>
                                <dd>{item.address}</dd>
                            </dl>
                        })
                    }
                </div>
            </div>
        )
    }

    handlInput() {
        const searchText = this.inputRef.current.value.toUpperCase();
        let list = this.state.cinemasBk.filter(item=>{
            return item.name.toUpperCase().indexOf(searchText) >= 0 || item.address.toUpperCase().indexOf(searchText) >= 0
        })
        this.setState(
            {
                cinemas: [...list],
            }
        )
    }
}

export default Cinema
