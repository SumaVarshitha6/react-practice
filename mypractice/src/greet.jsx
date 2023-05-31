function First(props){
    return (
        <div className='border border-1 border-dark p-3 m-2'>
        <b>First...</b><br></br>
      <button onClick={props.greet} className='rounded'>Greet</button>
       </div>
    )
}
export default First;