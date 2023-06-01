function Comp(props){
    return (
        <div className='border border-2 border-info m-1 p-1'>
                <h1>A: {props.a}</h1>
                <h1>B: {props.b}</h1> 
                <button onClick={props.inca}>IncA</button>
                <button onClick={props.incb}>IncB</button>
        </div>
    )
}
export default Comp;