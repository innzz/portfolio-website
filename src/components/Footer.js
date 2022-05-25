import './Footer.css';
import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
          <div className="left">
            <div className="location">
                <h4><FaHome sixe={20} style={{color: "#fff", marginRight: "2rem"}}/> Dadar, Mumbai.</h4>
            </div>
            <div className="phone">
                <h4><FaPhone sixe={20} style={{color: "#fff", marginRight: "2rem"}}/> +91 9137338941</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk sixe={20} style={{color: "#fff", marginRight: "2rem"}}/> inzamam.pawaskar10@gmail.com</h4>
            </div>
          </div>

          <div className="right">
              <h4>About Me</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quasi, ipsam provident fuga aspernatur, fugit dolor expedita eligendi distinctio quo minima tempora reprehenderit ab ad, tenetur quisquam voluptatibus commodi dignissimos!</p>
              <div className="social">
                <h4>
                    <FaGithub sixe={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </h4>
                <h4>
                    <FaLinkedin sixe={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </h4>
                <h4>
                <FaFacebook sixe={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </h4>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
