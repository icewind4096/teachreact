import {useEffect, useState} from "react";
// import store from "../redux/store.js";
import getCinemasAction from "../actionCreateor/getCinemasAction";
import {connect} from "react-redux";

function Cinemas(props){
    let {cityName, cinemas, getCinemasAction} = props
    // const [cityName, setCityName] = useState(store.getState().CityReducer.cityName)
    // const [cinemas, setCinemas] = useState(store.getState().CinemaReducer.cinemas)

    useEffect(()=>{
        if (cinemas.length === 0){
            getCinemasAction()
        }

        // if (store.getState().CinemaReducer.cinemas.length === 0){
        //     store.dispatch(getCinemasAction())
        // } else {
        //     setCinemas(store.getState().CinemaReducer.cinemas)
        // }
        //
        // var unsubscribe = store.subscribe(()=>{
        //     setCinemas(store.getState().CinemaReducer.cinemas)
        // })

        return () => {
            // console.log("移除订阅??????????????????????????????")
            // unsubscribe()
        }
    }, [])

    return (
        <div>
            <div style={{overflow: "hidden"}}>
                <div style={{float: 'left'}} onClick={()=>{props.history.push('/city')}}>{cityName}</div>
                <div style={{float: 'right'}} onClick={()=>{props.history.push('/cinemas/search')}}>搜索</div>
            </div>
            <ul>
                {
                    props.cinemas.map((item)=>{
                        return(
                            <li key={item.cinemaId}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        cityName: state.CityReducer.cityName,
        cinemas: state.CinemaReducer.cinemas,
    }
}

const mapDispatchToProps = {
    getCinemasAction: getCinemasAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)