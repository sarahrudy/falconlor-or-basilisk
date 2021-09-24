import React, { useState, useEffect } from 'react'
import questions from '../../data/questions'
import '../Questions/Questions.css'
import { fetchImages } from '../../apiCalls'

const Questions = (props) => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetchImages()
    // .then(data => setQuestions(data))
    .then(data => console.log(data))
  }, [])

  return (
    <div className="questions-container">
      { questions }
    </div>
  )
}

export default Questions 