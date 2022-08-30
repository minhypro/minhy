import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className='scroll-progress' style={{ scaleX }} />
}

function App() {
  return (
    <div className='App pb-6 bg-gray-200 text-slate-700 dark:bg-slate-800 dark:text-white relative transition-all ease-linear duration-300'>
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
