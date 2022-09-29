import axios from "axios";

// trunk风格
function getCinemasAction(){
    return (dispatch)=>{
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
                    dispatch({
                        type: 'reloadCinemas',
                        value: response.data.data.cinemas
                    })
                }
            }
        ).catch(err=>{
            console.log(err)
        })
    }
}

// Promise风格
// function getCinemasAction() {
//     return axios({
//         url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3815454",
//         method: "get",
//         headers: {
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16621954981544637743366145","bc":"110100"}',
//             'X-Host': 'mall.film-ticket.cinema.list',
//         }
//     }).then(
//         response => {
//             return {
//                 type: 'reloadCinemas',
//                 value: response.data.data.cinemas
//             }
//         }
//     ).catch(err => {
//         console.log(err)
//     })
// }

export default getCinemasAction


