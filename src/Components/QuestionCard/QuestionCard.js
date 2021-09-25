import './QuestionCard.css'

const QuestionCard = ({ questionProp, characterProp }) => {
  // console.log(questionProp)
  // console.log(characterProp)
  return (
    <article className="card-container">
      <div>
        <p>{questionProp.question}</p>
        <form>
          <div>
            <label>
              <input
                type="radio"
                value="answer-a"
                name="radio-button"
                className="answer-a"           
              />{questionProp.answer_be}
            </label>
          </div>
          <div>
            <label>
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