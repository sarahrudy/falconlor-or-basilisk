import React from 'react' 
import './Error.css' 
import voldemort from '../../Images/voldemort.png'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-container'>
      <p className='error-message'>404: Page Not Found</p>
      <img src={ voldemort } alt="page not found" className='page-not-found'></img>
      <Link to='/'><button className="go-back-to-quiz">GO BACK TO QUIZ</button></Link>
    </div>
  )
}

export default Error 