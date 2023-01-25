import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import FAQ from 'faq/FAQ'
import Home from './pages/Home'
import Footer from './components/Footer'

import './index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
