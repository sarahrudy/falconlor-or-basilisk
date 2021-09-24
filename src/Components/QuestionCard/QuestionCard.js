import './QuestionCard.css'

const QuestionCard = ({ questionProp, characterProp }) => {
  // console.log(questionProp)
  // console.log(characterProp)
  return (
    <article>
      <div className="card-container">
        <p>Question</p>
        <p>Answer 1</p>
        <p>Answer 2</p>
        <img src={characterProp.image}></img>
      </div>
    </article>
  )
}

export default QuestionCard