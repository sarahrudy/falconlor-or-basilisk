import React, { useState, useEffect } from 'react'
import { questionsMockData } from '../../data/questionsMockData'
import '../Questions/Questions.css'
// import { fetchImages } from '../../apiCalls'
import QuestionCard from '../QuestionCard/QuestionCard'

const Questions = () => {
  const [questions, setQuestions] = useState([])
  // const [images, setImages] = useState([])

  useEffect(() => {
    // fetchImages()
    // .then(data => setImages(data))
    // .then(data => console.log(data))

    setQuestions(questionsMockData)
  }, [])

  const singleQuestion = questions.map(question => {
    return (
      <QuestionCard questionProp= { question } />
    )
  })

  return (
    <div className="questions-container">
      { singleQuestion }
    </div>
  )
}

export default Questions 