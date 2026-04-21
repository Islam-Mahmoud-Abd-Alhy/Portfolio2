import { Routes, Route } from 'react-router-dom'
import Intro from './pages/Intro'
import Portfolio from './pages/Portfolio'
function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-green-500 selection:text-black scroll-smooth ">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  )
}

export default App