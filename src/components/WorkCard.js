import './WorkCard.css';
import React from 'react';

function WorkCard({imgsrc,title,text,view}) {
  return (
    <div className="project-card">
    <img src={imgsrc} alt="image1" />
    <h2 className="project-title">{title}</h2>
    <div className="project-details">
        <p>{text}</p>
        <div className="project-btn">
            <a href={`${view}`} target="_blank" rel="noreferrer" className="btn">
                View
            </a>
            <a href={`${view}`} target="_blank" rel="noreferrer" className="btn">
                Source
            </a>
        </div>
    </div>
</div>
  )
}

export default WorkCard
