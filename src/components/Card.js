import React from 'react'

function Card({ link, img, title, content }) {
  return (
    <div className='group dark:bg-slate-800 flex flex-col hover:scale-102 hover:cursor-pointer transition-all ease-linear duration-200 text-left mb-7'>
      <a href={link}>
        <img src={img} alt='' />
        <div className='p-8 dark:bg-gray-600 bg-slate-300'>
          <h3 className='text-2xl  mb-2 font-bold origin-left group-hover:translate-x-1 group-hover:text-sky-500 group-hover:scale-105 transition-all ease-linear duration-200'>{title}</h3>
          <p className='dark:text-gray-300 text-lg'>{content}</p>
        </div>
      </a>
    </div>
  )
}

export default Card
