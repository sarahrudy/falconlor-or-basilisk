import { questionsMockData } from '../../data/questionsMockData'
import './QuestionCard.css'

const QuestionCard = ({ questionProp }) => {
  console.log(questionProp)
  return (
    <article>
      <div className="card-container">
        <p>Question</p>
        <p>Answer 1</p>
        <p>Answer 2</p>
      </div>
    </article>
  )
}

export default QuestionCard