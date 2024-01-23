export default function Options({onUpdate, onReset}){
    return (
        <div>
            <button onClick= {()=> onUpdate("good")}>Good</button>
            <button onClick={()=> onUpdate("neutral")} >Neutral</button>
            <button onClick={()=> onUpdate("bad")}>Bad</button>
            <button onClick={()=> onReset()} >Reset</button>
        </div>
    )
}