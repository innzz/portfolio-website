import './AboutContent.css';
import React from 'react'
import { Link } from 'react-router-dom';
import React1 from '../assets/React1.webp';
import ReactJS from '../assets/ReactJS.png';

function AboutContent() {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react front-end developer. I create responsive secure websites.</p>
            <Link to={"/contact"}>
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src={React1} alt="React" className='img'/>
                </div>
                <div className="img-stack-bottom">
                    <img src={ReactJS} alt="ReactJS" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
