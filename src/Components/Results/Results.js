import { useParams } from 'react-router'
import '../Results/Results.css' 

const Results = () => {
  const { winningHouse } = useParams()
  console.log(winningHouse)

  return (
    <div className="results-container">
      <h1>{winningHouse === 'FE' ? 'You selected FE!' : 'You selected BE!'}</h1>
    </div>
  )
}

export default Results








