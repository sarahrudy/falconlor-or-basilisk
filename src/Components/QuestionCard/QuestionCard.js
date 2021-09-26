import React, { useState } from 'react'
import './QuestionCard.css'

const QuestionCard = ({ questionIndex, questionProp, characterProp }) => {
  // console.log(questionProp)
  // console.log(characterProp)
  return (
    <article className="card-container">
      <div className="question-and-answers">
        <p>{questionIndex}</p>
        <p>{questionProp.question}</p>
        <form>
          {questionProp.answers.map(answer => (
            <div>
              <label className="answer-a">
                <input
                  type="radio"
                  value={answer.answer}
                  name="radio-button"
                  className="answer-a"
                  // onChange={() => onSelectAnswer(answer.program, questionProp.id)}
                />{answer.answer}
              </label>
            </div>
          ))}
        </form>
      </div>
      <img className="hogwarts-headshot" src={characterProp.image} alt="Hogwarts headshot"></img>
    </article>
  )
}

export default QuestionCard