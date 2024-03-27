import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/common/Navbar'

const Home = () => {

    // document.title = 'Su Mon | Homepage'

  return (
    <div className='w-full h-screen bg-[#1F1E24] flex'>
        
        <Sidebar/>
         
        <div className="w-[80%] h-full">
            <Navbar/>   
        </div>        

    </div>
  )
}

export default Home