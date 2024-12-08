import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { Link } from 'react-router-dom'
import { Authenticator } from './components/Authenticator'

function App() {

  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Authenticator />
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
