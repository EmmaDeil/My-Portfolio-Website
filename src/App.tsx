import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from "./pages/Contact"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Home from "./pages/Home"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
