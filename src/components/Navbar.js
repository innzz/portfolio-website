import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {

    const [show, setShow] = useState(false);
    const handleClick = ()=>{
        setShow(!show);
    }

  return (
    <div className='header'>
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
            {show ? ( <FaTimes sixe={20} style={{color: "#fff"}}/>) : (<FaBars sixe={20} style={{color: "#fff"}}/>)}
        </div>
    </div>
  )
}

export default Navbar