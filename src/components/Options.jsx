export default function Options({onUpdate}){
    return (
        <>
            <div>
            <button onClick= {()=> onUpdate("good")}>Good</button>
            <button >Neutral</button>
            <button>Bad</button>
            <button>Reset</button>
            </div>
        </>
    )
}