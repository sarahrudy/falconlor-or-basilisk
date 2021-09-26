import './QuestionCard.css'

const QuestionCard = ({ onSelectAnswer, questionIndex, questionProp, characterProp }) => {
  // console.log(questionProp)
  // console.log(characterProp)
  return (
    <article className="card-container">
      <div className="question-and-answers">
        <p className="question-index">{questionIndex}</p>
        <p>{questionProp.question}</p>
        <form>
          {questionProp.answers.map(answer => (
            <div>
              <label>
                <input
                  type="radio"
                  value={answer.answer}
                  name="radio-button"
                  className="answer"
                  onChange={() => onSelectAnswer(answer.program, questionProp.id)}
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