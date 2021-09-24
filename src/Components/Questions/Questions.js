import React, { useState, useEffect } from 'react'
import { questionsMockData } from '../../data/questionsMockData'
import '../Questions/Questions.css'
import { fetchImages } from '../../apiCalls'
import QuestionCard from '../QuestionCard/QuestionCard'

const Questions = () => {
  const [questions, setQuestions] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImages()
    .then(data => setImages(data))

    setQuestions(questionsMockData)
  }, [])
    
    const singleQuestion = questions.map((question, i) => { 
      return (
        <QuestionCard 
        questionProp= { question } 
        characterProp= { images.length && images[i] }
      />
    )
  })

  return (
    <div className="questions-container">
      { singleQuestion }
    </div>
  )
}

export default Questions 