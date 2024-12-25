// import { useState } from 'react'
import Header from './components/Header'
// import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Projects from './components/Projects'
 
 
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
        </Routes>
        {/* <Footer /> */}
      </div>
     
    
    </>
  )
}

export default App
