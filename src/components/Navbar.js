import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {

    const [show, setShow] = useState(false);
    const handleClick = ()=>{
        setShow(!show);
    }

    const [color, setColor] = useState(false);

    const changeColor = ()=>{
        if(window.scrollY >= 100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to={'/'}>
            <h1>Portfolio</h1>
        </Link>
        <ul className={show ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/project'}>Project</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {show ? ( <h4><FaTimes sixe={20} style={{color: "#fff"}}/></h4>) : (<h4><FaBars sixe={20} style={{color: "#fff"}}/></h4>)}
        </div>
    </div>
  )
}

export default Navbar