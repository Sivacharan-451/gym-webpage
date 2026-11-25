import React from 'react'
import "./styles/Hero.css"
const Hero = () => {
  return (
   <section className='hero' id="hero">
    <div className='hero-overlay'>
      <div className='hero-content'>
        <h1 className='hero-title'>TRANSFORM YOUR <span>BODY</span>AND MIND</h1>
        <p className='hero-subtitle'>Unleash your power with <strong>CHARAN</strong></p>
        <div className='hero-buttons'>
          <button className='btn-primary'>Join now</button>
          <button className='btn-secondary'>Explore programs</button>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Hero