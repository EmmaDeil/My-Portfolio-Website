import './App.css'
import {Routes, Route } from "react-router"
import Navbar from './components/Navbar';
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"

function App() {


  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/contact' element={<Contact />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/project' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App;
