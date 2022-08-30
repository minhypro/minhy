import React from 'react'
import logo from '../assets/images/logo.png'

function Contact() {
  return (
    <div id='contact' className='container mx-auto pt-20 text-center'>
      <h2 className='text-3xl font-bold'>Contact me</h2>
      <div className='mt-8 flex justify-center items-center'>
        <img src={logo} alt='' />
        <div className='ml-8 flex flex-col text-left text-lg text-gray-400'>
          <h2 className='text-3xl font-bold text-white'>Minh Y</h2>
          <p>
            Email:{' '}
            <a href='mailto:leminhy969@gmail.com' className='hover:text-white'>
              leminhy969@gmail.com
            </a>
          </p>
          <div className='text-3xl'>
            <a href='https://www.facebook.com/minhy95/'>
              <i className='fa-brands fa-facebook hover:text-white mr-3'></i>
            </a>
            <a href='https://www.linkedin.com/in/y-le-minh-930118157/'>
              <i className='fa-brands fa-linkedin hover:text-white mr-3'></i>
            </a>
            <a href='https://github.com/minhypro'>
              <i className='fa-brands fa-github hover:text-white mr-3'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
