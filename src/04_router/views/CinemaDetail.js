export default function App(props){
    console.log(props)
    return (
        <div>
            detail
            <h1>
                {props.match.params.id}
            </h1>
            {/*<h1>{props.location.query.id}</h1>*/}
            {/*<h2>{props.location.query.descript}</h2>*/}
        </div>
    )
}
