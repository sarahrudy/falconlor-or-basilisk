import React, { useState, useEffect } from 'react'
import { questionsMockData } from '../../data/questionsMockData'
import '../Questions/Questions.css'
import { fetchImages } from '../../apiCalls'
import QuestionCard from '../QuestionCard/QuestionCard'
import { useHistory } from 'react-router-dom'

const Questions = () => {
  const history = useHistory()
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
    // debugger
    const newAnswers = isQuestionSelected
      ? {
        [program]: [...selectedAnswers[program], id],
        [oppositeProgram]: selectedAnswers[oppositeProgram].filter(savedId => savedId !== id)
      } : {
        ...selectedAnswers,
        [program]: [...selectedAnswers[program], id]
      }

    updateSelectedAnswers(newAnswers)
  }

  const handleSubmit = () => {
    const winningHouse = selectedAnswers.FE.length > selectedAnswers.BE.length
      ? 'FE' : 'BE'
    history.push(`/results/${winningHouse}`)
    // this should take us to /results/FE or /results/BE based on winningHouse
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
      <div>
      { singleQuestion }
      </div>
      <div>
        { selectedAnswers.FE.length + selectedAnswers.BE.length >= questions.length &&
          <button onClick={handleSubmit} className="get-results-button">GET RESULTS</button>
        }
      </div>
    </div>
  )
}

export default Questions 