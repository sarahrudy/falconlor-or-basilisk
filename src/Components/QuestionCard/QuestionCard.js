import './QuestionCard.css'

const QuestionCard = ({ questionProp, characterProp }) => {
  console.log(questionProp)
  // console.log(characterProp)
  return (
    <article className="card-container">
      <div>
        <p>{questionProp.question}</p>
        <p>{questionProp.answer_be}</p>
        <p>{questionProp.answer_fe}</p>
      </div>
      <img src={characterProp.image}></img>
    </article>
  )
}

export default QuestionCard