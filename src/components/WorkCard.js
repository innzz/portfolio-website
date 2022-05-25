import './WorkCard.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function WorkCard({imgsrc,title,text,view}) {
  return (
    <div className="project-card">
    <img src={imgsrc} alt="image1" />
    <h2 className="project-title">{title}</h2>
    <div className="project-details">
        <p>{text}</p>
        <div className="project-btn">
            <NavLink to={view} className="btn">
                View
            </NavLink>
            <NavLink to="url.com" className="btn">
                Source
            </NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard
