import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div id='about' className='pt-20'>
      <h2 className='text-3xl font-bold'>About me</h2>
      <div className='timeline'>
        <motion.div
          className='timeline-container left'
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
        >
          {' '}
          <div className='date'>2017</div>
          <div className='content'>
            <h3>First Job! 🎉</h3>
            <p>I used to work in the Hospitality industry, as a receptionist, and a tour guide.</p>
          </div>
        </motion.div>
        <motion.div
          className='timeline-container right'
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
        >
          <div className='date'>2020</div>
          <div className='content'>
            <h3>The first approach to the IT industry 💻</h3>
            <p>
              A brand new Quality Assurance Engineer with a huge passion for coding. Nearly two
              years of working, I decided to pursue my passion which is coding
            </p>
          </div>
        </motion.div>
        <motion.div
          className='timeline-container left'
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
        >
          <div className='date'>2022</div>
          <div className='content'>
            <h3>Web Developer 🌐</h3>
            <p>
              After a long time of self-study coding. I built some interesting websites and got
              constructive feedback from community.
            </p>
          </div>
        </motion.div>
        <motion.div
          className='timeline-container right'
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
        >
          {' '}
          <div className='date'>Now</div>
          <div className='content'>
            <h3>Looking for the opportunity 💼</h3>
            <p>
              I am currently looking for the opportunity as a Web Developer.
              <br />
              My major are Javascript and ReactJS
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
