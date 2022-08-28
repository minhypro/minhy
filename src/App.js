
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className='App py-60 bg-slate-800 text-white'>
      <Header />
      <div className='py-10 text-5xl font-extrabold'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600'>
        Hi, my name is Minh Y 
        </span>
      </div>
      <div className='flex flex-wrap gap-2'></div>
      <Footer />
    </div>
  )
}

// Hi, my name is Minh Y <span className='text-3xl text-white font-normal'>/miŋ i:/</span>
export default App
