import {Component} from "react";
import Cinema from "../01_base/mov/Cinema.js";
import CinemaDetail from "../01_base/mov/CinemaDetail.js";

class App extends Component{
}

var bus = {
    list: [],

    subscribe(regFunc){
        this.list.push(regFunc)
    },

    publish(){
        this.list.forEach((item)=>{
            item()
        })
    }
}

bus.subscribe(()=>{
    console.log("reg function 1")
})

bus.subscribe(()=>{
    console.log("reg function 2")
})

bus.publish();

export default App;
