import React from 'react'

function About() {
  return (
    <div id='about' className='pt-20'>
      <h2 className='text-3xl font-bold'>About me</h2>
      <div className='timeline'>
        <div className='timeline-container left'>
          <div className='date'>2017</div>

          <div className='content'>
            <h3>First Job! 🎉</h3>
            <p>I used to work in the Hospitality industry, as a receptionist, and a tour guide.</p>
          </div>
        </div>
        <div className='timeline-container right'>
          <div className='date'>2020</div>

          <div className='content'>
            <h3>The first approach to the IT industry 💻</h3>
            <p>
              A brand new Quality Assurance Engineer with a huge passion for coding. After 1 year of
              working, I decided to pursue my passion is coding
            </p>
          </div>
        </div>
        <div className='timeline-container left'>
          <div className='date'>2022</div>

          <div className='content'>
            <h3>Web Developer 🌐</h3>
            <p>
              After a long time of self-taught coding. I built some interesting websites and get feedback from community.
            </p>
          </div>
        </div>
        <div className='timeline-container right'>
          <div className='date'>Now</div>

          <div className='content'>
            <h3>Looking for the opportunity 💼</h3>
            <p>
              I currently looking for the opportunity as a Web Developer.
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
