import React from 'react'

function Card({ img, title, content }) {
  return (
    <div className='flex flex-col hover:scale-102 hover:cursor-pointer transition-all ease-linear duration-200 text-left'>
      <img src={img} alt='' />
      <div className='p-8'>
        <h3 className='text-2xl mb-2 font-bold'>{title}</h3>
        <p className='text-gray-300 text-lg'>{content}</p>
      </div>
    </div>
  )
}

export default Card
