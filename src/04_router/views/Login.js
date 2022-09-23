export default function Login(){
    return (
        <div>
            login
            <input/>
            <button onClick={()=>{
                this.props.history.push('/center')
            }}>登录</button>
        </div>
    )
}