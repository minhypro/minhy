import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import avatar from './images/main_avatar.jpg'


function App() {
  
  return (
    <div className='App pb-60 bg-slate-800 text-white'>
      <Header />
      <div className='mt-32 container mx-auto'>
        <div className='avatar-border rounded-full w-56 h-56 bg-gradient-to-b from-sky-500 to-pink-500 mx-auto flex items-center' >
          <img
            className='rounded-full w-52 h-52 mx-auto'
            src={avatar}
            alt='avatar'
          />
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
          sequence={[`Web Developer.`, 2500, `Learner.`, 2500, `Traveller.`, 2500]}
          speed={1}
          wrapper='span'
          cursor={true}
          repeat={Infinity}
        />
        <div className="container mt-10 mx-auto flex items-center justify-center">
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
      <Footer />
    </div>
  )
}

export default App
