import React, { useState, useEffect } from 'react'
import { questionsMockData } from '../../data/questionsMockData'
import '../Questions/Questions.css'
import { fetchImages } from '../../apiCalls'
import QuestionCard from '../QuestionCard/QuestionCard'
import { Link } from 'react-router-dom'

const Questions = () => {
  const [questions, setQuestions] = useState([])
  const [images, setImages] = useState([])
  const [selectedAnswers, updateSelectedAnswers] = useState({
    FE: [],
    BE: [],
  })

  useEffect(() => {
    fetchImages()
    .then(data => setImages(data))

    setQuestions(questionsMockData)
  }, [])

  const handleSelectAnswer = (program, id) => {
    const oppositeProgram = program === 'FE' ? 'BE' : 'FE'
    const isQuestionSelected = selectedAnswers[oppositeProgram].includes(id)
    const newAnswers = isQuestionSelected
      ? {
        ...selectedAnswers,
        [program]: [...selectedAnswers[program], id]
      } : {
        [program]: [...selectedAnswers[program], id],
        [oppositeProgram]: selectedAnswers[oppositeProgram].filter(savedId => savedId !== id)
      }

    updateSelectedAnswers(newAnswers)
  }

  const handleSubmit = () => {
    const winningHouse = selectedAnswers.FE.length > selectedAnswers.BE.length
      ? 'FE' : 'BE'
  }

  const singleQuestion = questions.map((question, i) => {
    return (
      <QuestionCard
        key={ i }
        questionIndex={`${i + 1} / ${questions.length}`}
        questionProp={question}
        characterProp={images.length && images[i]}
        onSelectAnswer={ handleSelectAnswer }
      />
    )
  })

  return (
    <div className="questions-container">
      { singleQuestion }
      <div className="submit-button">
        { selectedAnswers.FE.length + selectedAnswers.BE.length === questions.length &&
        <Link to='/results'> 
          <button onClick={() => handleSubmit()}>GET RESULTS</button>
        </Link> }
      </div>
    </div>
  )
}

export default Questions 