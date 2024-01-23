import Description from './Description.jsx'
import Options from './Options.jsx'
import Feedback from './Feedback.jsx'
import { useState, useEffect } from 'react'

const savedReviews = "saved reviews"


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
    setReviews({
      ...reviews,
      [option]: reviews[option] + 1
    })
  }    
  
  const onReset= () => {
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
    <>
      <Description />
      <Options onUpdate={onUpdate} onReset={onReset} />
      <Feedback value={reviews} />
    </>
  )
}

export default App
