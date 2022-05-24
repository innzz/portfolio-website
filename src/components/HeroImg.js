import './HeroImgStyles.css';
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

function HeroImg() {
  return (
    <div className='hero'>
      <div className="mask">
          <img src={IntroImg} alt="Intro Img" className="intro-img" />
      </div>
      <div className="content">
          <p>Hi, I'M INZAMAM PAWASKAR.</p>
          <h1>React Developer.</h1>
        <div>
            <Link to='/project' className='btn'>Project</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
