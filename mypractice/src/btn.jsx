function Btn(props){
    return (
        <div >
            <button className="m-1 rounded" onClick={props.count}>{props.value}</button>
        </div>
    )
}
export default Btn;