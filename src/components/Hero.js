import React from 'react'
import avatar from '../assets/images/main_avatar.jpg'
import triangle from '../assets/images/triangle-neon.png'
import plus from '../assets/images/plus-neon.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

function Hero() {
  const viewWidth = window.innerWidth
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
        <div className='container mt-10 mx-auto max-w-[500px] flex items-center justify-between'>
          {/* Handle different transition on mobile and wide screens */}
          {viewWidth < 530 ? (
            <>
              <motion.div
                className='square'
                initial={{ x: 10 }}
                animate={{ rotate: 180, x: 210 }}
                repeat={Infinity}
                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 2 }}
              />
              <motion.div
                className='circle'
                animate={{ rotate: 180, x: -95 }}
                repeat={Infinity}
                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 2 }}
              />
              <motion.div
                className='triangle'
                animate={{ rotate: 180, x: 100 }}
                repeat={Infinity}
                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 2 }}
              >
                <img src={triangle} alt='' width={90} height={90} />
              </motion.div>
              <motion.div
                className='plus'
                animate={{ rotate: 225, x: -200 }}
                initial={{ rotate: 45 }}
                repeat={Infinity}
                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 2 }}
              >
                <img src={plus} alt='' width={90} height={90} />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                className='square'
                animate={{ rotate: 180, x: 280 }}
                repeat={Infinity}
                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 2 }}
              />
              <motion.div
                className='circle'
                animate={{ rotate: 180, x: -120 }}
                repeat={Infinity}
                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 2 }}
              />
              <motion.div
                className='triangle'
                animate={{ rotate: 180, x: 120 }}
                repeat={Infinity}
                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 2 }}
              >
                <img src={triangle} alt='' width={90} height={90} />
              </motion.div>
              <motion.div
                className='plus'
                animate={{ rotate: 225, x: -280 }}
                initial={{ rotate: 45 }}
                repeat={Infinity}
                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror', duration: 2 }}
              >
                <img src={plus} alt='' width={90} height={90} />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Hero
