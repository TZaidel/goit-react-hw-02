export default function Feedback({ value: { good, neutral, bad } }) {
    const total = good + neutral + bad
    const positive = Math.round(((good + neutral) / total) * 100)
    return (
        <>
            {(total === 0) ?
                <p>No feedback yet</p> :
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad} </li>
                    {total > 0 && <li>Total: {total} </li>}
                    {good > 0 && <li>Positive: {positive}%</li>}
                </ul>
            } 
        </>
    )
}