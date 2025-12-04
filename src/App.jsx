import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <main>
      {/* Gradient image */}
      <img src="src/assets/gradient.png" alt="Gradient-img" className='absolute top-0 right-0 opacity-60 -z-10'/>

      {/* Blur effect */}
      <div className="h-0 w-160 absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-30 -z-10"></div>

      <Navbar />
      <Hero />
    </main>
  )
}

export default App