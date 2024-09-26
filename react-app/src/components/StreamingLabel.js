function CollectStream(){
    var streamingContent = ["service down :-(", "Again!"]
    return streamingContent
}
let items = CollectStream()

function StreamingLabel(){
   return( <>
       <h2>Streaming Data:</h2>
        <ul>
        {items.map((item) => (
            <li>{item}</li>
        ))}
        </ul>    
    </>)
}

export default StreamingLabel