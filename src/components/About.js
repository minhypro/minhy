import React, {useEffect} from 'react'
import { useScroll } from "framer-motion"


function About() {
    const { scrollY } = useScroll()

useEffect(() => {
  return scrollY.onChange((latest) => {
    console.log("Page scroll: ", latest)
  })
}, [])

  return (
    <div id="about" className="pt-20">
        <h2 className="text-3xl font-bold">About me</h2>
        <div className="container mx-auto w-full h-full">
  <div className="relative wrap overflow-hidden p-10 h-full">
    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: "50%"}}></div>
    
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">1995</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Hello world! 💖</h3>
        <p className="text-md leading-snug tracking-wide text-gray-900 text-opacity-100">The day I cried so hard but my parents were laugh together. 😄</p>
      </div>
    </div>

    
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">2017</h1>
      </div>
      <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">First Job! 🎉</h3>
        <p className="text-md leading-snug tracking-wide text-white text-opacity-100">I was working in the Hospitality industry, as a receptionist, and a tour guide.</p>
      </div>
    </div>
    
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">2020</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">The first approach to the IT industry 💻</h3>
        <p className="text-md leading-snug tracking-wide text-gray-900 text-opacity-100">A brand new Quality Assurance Engineer with a huge passion for coding. After 1 year of working, I decided to pursue my passion is coding</p>
      </div>
    </div>
    
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">2022</h1>
      </div>
      <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">Web Developer 🌐</h3>
        <p className="text-md leading-snug tracking-wide text-white text-opacity-100">After a long time of self-taught coding. I tried to find my first web development job.</p>
      </div>
    </div>

    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">Now</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Looking for the opportunity 💼</h3>
        <p className="text-md leading-snug tracking-wide text-gray-900 text-opacity-100">I currently looking for the opportunity for a Web Development job.<br/>My major are Javascript and ReactJS</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About