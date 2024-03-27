import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {




  return (
    <div className='w-screen h-screen text-white'>
      
      <Routes>
         <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App