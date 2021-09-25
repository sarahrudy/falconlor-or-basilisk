import './QuestionCard.css'

const QuestionCard = ({ questionProp, characterProp }) => {
  // console.log(questionProp)
  // console.log(characterProp)
  return (
    <article className="card-container">
      <div>
        <p>{questionProp.question}</p>
        <label>
          <input
            type="radio"
            value="answer-a"
            className="answer-a"           
          />{questionProp.answer_be}
        </label>
        <label>
          <input
            type="radio"
            value="answer-b"
            className="answer-b"
          />{questionProp.answer_fe}
        </label>
      </div>
      <img className="hogwarts-headshot" src={characterProp.image} alt="Hogwarts headshot"></img>
    </article>
  )
}

export default QuestionCard