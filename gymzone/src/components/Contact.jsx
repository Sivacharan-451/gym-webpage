import React from 'react'
import "./styles/Contact.css"
const Contact = () => {
  return (
    <section className='contact' id="contact">
      <div className='contact-overlay'>
        <h2>
          Contact <span>Ironfit</span>
        </h2>
        <p>Have questions?</p>
        <form className='contact-form'>
          <div className='input-group'>
            <input type="text"  placeholder='Your name?' required/>
            <input type="email" placeholder='Your email?' required />
          </div>
          <textarea placeholder='Your message' required></textarea>
          <button type="submit" className='contact-btn'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact