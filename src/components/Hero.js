import React from 'react'
import avatar from '../images/main_avatar.jpg'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <>
      <div className='mt-32 container mx-auto'>
        <div className='avatar-border rounded-full w-56 h-56 bg-gradient-to-b from-sky-500 to-pink-500 mx-auto flex items-center'>
          <img className='rounded-full w-52 h-52 mx-auto' src={avatar} alt='avatar' />
        </div>
      </div>
      <div className='py-10 text-5xl font-extrabold'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500'>
          Hi, my name is Minh Y
        </span>
      </div>
      <div className='text-3xl'>
        I'm a&nbsp;
        <TypeAnimation
          sequence={[`Web Developer.`, 2000, `Learner.`, 2000, `Traveller.`, 2000]}
          speed={2}
          wrapper='span'
          cursor={true}
          repeat={Infinity}
        />
        <div className='container mt-10 mx-auto flex items-center justify-center'>
          <motion.div
            className='square'
            animate={{ rotate: 180, x: 200 }}
            repeat={Infinity}
            transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 2 }}
          />
          <motion.div
            className='circle'
            animate={{ rotate: 180, x: -200 }}
            repeat={Infinity}
            transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 2 }}
          />
        </div>
      </div>
    </>
  )
}

export default Hero
