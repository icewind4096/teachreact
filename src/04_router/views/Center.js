export default function Center(props){
    return (
        <div>
            Center
            <div onClick={()=>{
                // console.log(props)
                props.history.push('/filmsorder')
            }}>电影订单</div>
        </div>
    )
}
