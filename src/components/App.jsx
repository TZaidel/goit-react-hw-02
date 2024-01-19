import Description from './Description.jsx'
import Options from './Options.jsx'
import {useState} from 'react'
function App() {
  
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  console.log(reviews)
  console.log(setReviews)

  const onUpdate = (option) => {
    setReviews({
      ...reviews,
      [option]: reviews[option] + 1
    })
}  

  return (
    <>
      <Description />
      <Options onUpdate={onUpdate} />
    </>
  )
}

export default App
