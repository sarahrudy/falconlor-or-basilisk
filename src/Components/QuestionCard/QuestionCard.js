import React, { useState } from 'react'
import './QuestionCard.css'

const QuestionCard = ({ questionIndex, questionProp, characterProp }) => {
  // console.log(questionProp)
  // console.log(characterProp)
  return (
    <article className="card-container">
      <div className="question-number">
        <span>Question { questionIndex }</span>
      </div>
      <div>
        <p>{questionProp.question}</p>
        <form>
          <div>
            <label className="answer-a">
              <input
                type="radio"
                value="answer-a"
                name="radio-button"
                className="answer-a"           
              />{questionProp.answer_be}
            </label>
          </div>
          <div>
            <label className="answer-b">
              <input
                type="radio"
                value="answer-b"
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