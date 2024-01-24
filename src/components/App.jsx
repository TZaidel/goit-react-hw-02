import Description from './Description.jsx'
import Options from './Options.jsx'
import Feedback from './Feedback.jsx'
import css from './App.module.css'
import { useState, useEffect } from 'react'

const savedReviews = "saved reviews"
let isHidden = true

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedRev = window.localStorage.getItem(savedReviews)
    if (savedRev !== null) {
      return JSON.parse(savedRev)
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0
      }
    }
  })

  const onUpdate = (option) => {
    isHidden=false
    setReviews({
      ...reviews,
      [option]: reviews[option] + 1
    })
  }    
  
  const onReset = () => {
    isHidden=true
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }
  
  useEffect(() => {
    window.localStorage.setItem(savedReviews, JSON.stringify(reviews))
  },[reviews])
  
  return (
    <div className={css.container}>
      <Description />
      <Options onUpdate={onUpdate} onReset={onReset} isHidden={isHidden} />
      <Feedback value={reviews} />
    </div>
  )
}

export default App
