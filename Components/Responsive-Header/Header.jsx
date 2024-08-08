import React, {useState} from 'react'
import './Header.css' //style sheet for header
import logo from '../logo.png' // file path for logo
//use state hook for nav
const [navLeft, setNavLeft] = useState('-100%');
// on click to open nav
const openToggle = () => {
    setNavLeft('0%');
};
// on click to close nav
const closeToggle = () => {
    setNavLeft('-100%');
};

//use state hook for fixed header
const [isFixed, setIsFixed] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const Header = () => {
  return (
    <div>
        <div className={`header ${isFixed ? 'fixed' : ''}`}>{/* header div start tag*/}
            <div className="logo">
                <a href='#'>
                    <img src={logo}></img>
                    <h3>Company Name</h3>
                </a>
            </div>
            {/* open button for smallar width device */}
            <button className="open-btn" onClick={openToggle}>&#9776;</button> 
            <nav id='mainNav' style={{ left: navLeft }}>
                <div className="navlinks" >
                    {/* close button for smaller width device */}
                    <button className="close-btn"onClick={closeToggle} >&times;</button>
                    <ul> 
                        {/* Put your navlinks here */}
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Resources</a></li>
                        <li><a href='#'>Careers</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className="btn-div">
                    <button className='btn-1' type='button'>Contact</button>
                </div>
            </nav>
        </div>{/* Header div close tag*/}
    </div>
  )
}

export default Header
