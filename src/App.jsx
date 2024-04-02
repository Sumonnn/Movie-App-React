import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trending from './pages/Trending'
import Popular from './pages/Popular'
import Movie from './pages/Movie'
import Tvshows from './pages/Tvshows'
import People from './pages/People'


const App = () => {

  return (
    <div className='w-screen h-screen text-white bg-[#1F1E24]'>
      
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/trending' element={<Trending/>}/>
         <Route path='/popular' element={<Popular/>}/>
         <Route path='/movie' element={<Movie/>}/>
         <Route path='/tv-show' element={<Tvshows/>}/>
         <Route path='/people' element={<People/>}/>
      </Routes>
    </div>
  )
}

export default App