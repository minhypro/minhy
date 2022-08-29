import React from 'react'

function About() {
  return (
    <div id='about' className='pt-20'>
      <h2 className='text-3xl font-bold'>About me</h2>

      <div className='timeline'>
        <div className='timeline-container left'>
          <div className='date'>1995</div>

          <div className='content'>
            <h2>Hello world! 💖</h2>
            <p>The day I cried so lought but my parents were laugh together. 😄</p>
          </div>
        </div>
        <div className='timeline-container right'>
          <div className='date'>2017</div>

          <div className='content'>
            <h2>First Job! 🎉</h2>
            <p>I was working in the Hospitality industry, as a receptionist, and a tour guide.</p>
          </div>
        </div>
        <div className='timeline-container left'>
          <div className='date'>2020</div>

          <div className='content'>
            <h2>The first approach to the IT industry 💻</h2>
            <p>
              A brand new Quality Assurance Engineer with a huge passion for coding. After 1 year of
              working, I decided to pursue my passion is coding
            </p>
          </div>
        </div>
        <div className='timeline-container right'>
          <div className='date'>2022</div>

          <div className='content'>
            <h2>Web Developer 🌐</h2>
            <p>
              After a long time of self-taught coding. I tried to find my first web development job.
            </p>
          </div>
        </div>
        <div className='timeline-container left'>
          <div className='date'>Now</div>

          <div className='content'>
            <h2>Looking for the opportunity 💼</h2>
            <p>
              I currently looking for the opportunity for a Web Development job.
              <br />
              My major are Javascript and ReactJS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
