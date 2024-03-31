import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trending from './pages/Trending'

const App = () => {




  return (
    <div className='w-screen h-screen text-white bg-[#1F1E24]'>
      
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/trending' element={<Trending/>}/>
      </Routes>
    </div>
  )
}

export default App