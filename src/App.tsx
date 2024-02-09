import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RegisterForm } from 'pages/form'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<RegisterForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
