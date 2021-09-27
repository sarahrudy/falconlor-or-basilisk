import React from 'react' 
import './Error.css' 
import voldemort from '../../Images/voldemort.png'

const Error = () => {
  return (
    <div className='error-container'>
      <p className='error-message'>Error: Page Not Found</p>
      <img src={ voldemort } alt="page not found" className='page-not-found'></img>
    </div>
  )
}

export default Error 