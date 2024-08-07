import React from 'react'
import './Home.css'
import profile from '../../assets/Aphiwe_Photo.jpg'

function Home() {
  return (
    <div className='home'>
      <img src={profile} alt=''/>
      <h1>I am Aphiwe Blom Software Developer based in South Africa</h1>
    </div>
  )
}

export default Home
