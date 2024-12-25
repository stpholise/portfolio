// import { useState } from 'react'
import Header from './components/Header' 
import Home from './pages/Home'
import Skills from './pages/Skills'
import { Routes, Route } from 'react-router-dom'
import Projects from './components/Projects'
import About from './components/About'
 
 
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className=""> 
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />

        </Routes>
        {/* <Footer /> */}
      </div>
     
    
    </>
  )
}

export default App
