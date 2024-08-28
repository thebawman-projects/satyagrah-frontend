import React from 'react'
import { Link } from 'react-router-dom'

const FooterAdmin = () => {
  return (
    
        <nav className='mt-4'>
          <h2 className="text-white text-center mx-auto text-xl">
            <a href='https://github.com/TheBawMan'>
            Developed By @TheBawMan
            </a>
          </h2>
          <Link to='/register'>
          <button>Register</button></Link>
        </nav>

  )
}

export default FooterAdmin