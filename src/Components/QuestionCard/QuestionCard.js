import './QuestionCard.css'

const QuestionCard = ({ onSelectAnswer, questionIndex, questionProp, characterProp }) => {
  return (
    <article className="card-container">
      <div className="question-and-answers">
        <p className="question-index">{questionIndex}</p>
        <p className="question">{questionProp.question}</p>
        <form>
          {questionProp.answers.map(answer => (
            <div key={answer.answer}>
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