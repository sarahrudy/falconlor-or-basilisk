import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import '../Results/Results.css' 

const Results = () => {
  const { winningHouse } = useParams()

  return (
    <div className="results-container">
      <h1>{winningHouse === 'FE' ? 'You selected FE!' : 'You selected BE!'}</h1>
      <Link to='/'><button className="take-quiz-again-button">TAKE QUIZ AGAIN!</button></Link>
    </div>
  )
}

export default Results








