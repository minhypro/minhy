import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  
  return (
    <div className='App pb-6 bg-slate-800 text-white'>
      <Header />
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
