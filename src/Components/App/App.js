import React from 'react'
import '../App/App.css'
import NavBar from '../NavBar/NavBar'
import { Route } from 'react-router-dom'
import Questions from '../Questions/Questions'
import Results from '../Results/Results'


const App = () => {

  // const [scoreBE, setScoreBE] = useState(0)
  // const [scoreFE, setScoreFE] = useState(0)

  return (
    <main className="App">
      <NavBar />
      <Route exact path="/" component={ Questions } />
      <Route exact path="/results" component={ Results } />
    </main>
  )
}

export default App
