import React, { useEffect } from 'react'
import questions from '../../data/questions'
import '../Questions/Questions.css'
import { fetchImages } from '../../apiCalls'

const Questions = () => {
  useEffect(() => {
    fetchImages()
    .then(data => console.log(data))
  }, [])

  return (
    <div className="questions-container">
      { questions }
    </div>
  )
}

export default Questions 