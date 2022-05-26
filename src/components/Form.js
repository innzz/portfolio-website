import './Form.css';
import React from 'react'

function Form() {
  return (
    <div className='form'>
      <form action="">
          <h4>Your Name</h4>
          <input type="text" />
          <h4>Email</h4>
          <input type="email" />
          <h4>Subject</h4>
          <input type="text" />
          <h4>Message</h4>
          <textarea cols="20" rows="6" placeholder='Type your message here'></textarea>
          <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
