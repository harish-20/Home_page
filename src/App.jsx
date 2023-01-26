import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

// microfrontend components
const FAQ = React.lazy(() => import('faq/FAQ'))
const Resource = React.lazy(() => import('resource/Resource'))

import './index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense
        fallback={
          <h1 className="mt-40 h-80 text-2xl text-blue-500 text-center font-semibold ">
            Loading...
          </h1>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resource" element={<Resource />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
