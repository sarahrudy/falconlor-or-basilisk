import React, { useState } from 'react'
import './QuestionCard.css'

const QuestionCard = ({ questionIndex, questionProp, characterProp }) => {
  // console.log(questionProp)
  // console.log(characterProp)
  return (
    <article className="card-container">
      <div className="question-and-answers">
        <p>{ questionIndex }</p>
        <p>{questionProp.question}</p>
        <form>
          <div>
            <label className="answer-a">
              <input
                type="radio"
                value={Object.keys(questionProp)[1]}
                name="radio-button"
                className="answer-a" 
              />{questionProp.answer_be}
            </label>
          </div>
          <div>
            <label className="answer-b">
              <input
                type="radio"
                value={Object.keys(questionProp)[2]}
                name="radio-button"
                className="answer-b"
              />{questionProp.answer_fe}
            </label>
          </div>
        </form>
      </div>
      <img className="hogwarts-headshot" src={characterProp.image} alt="Hogwarts headshot"></img>
    </article>
  )
}

export default QuestionCard