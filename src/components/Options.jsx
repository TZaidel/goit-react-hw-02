import css from "./Options.module.css"
export default function Options({ onUpdate, onReset, isHidden }) {
    return (
        <div className={css.btnList}>
            <button className={css.btnOption} onClick={()=> onUpdate("good")}>Good</button>
            <button className={css.btnOption} onClick={()=> onUpdate("neutral")} >Neutral</button>
            <button className={css.btnOption}onClick={()=> onUpdate("bad")}>Bad</button>
            {!isHidden && <button className={css.btnOption} onClick={()=> onReset()} >Reset</button>}
        </div>
    )
}