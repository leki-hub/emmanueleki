// import React from 'react'

// var sidemeu = document.getElementById("sidemenu");

// function openmenu(){
//     sidemeu.style.right = "0";
// }
// function closemenu(){
//     sidemeu.style.right = "-200px";
// }




// const Header = () => {
//   return (
//     <div>
//          <div id="header">
//     <div className="container">
//         <nav>
//             <img src="/public/images/logo.png" className="logo" />
//             <ul id="sidemenu">
//                 <li><a href="#header">HOME</a></li>
//                 <li><a href="#about">ABOUT</a></li>
//                 <li><a href="#services">SERVICES</a></li>
//                 <li><a href="#portfolio">PORTFOLIO</a></li>
//                 <li><a href="#contact">CONTACT</a></li>
//                 <img src="/public/images/icons8-cross-30.png" alt="cross icon" className="fas" onClick={closemenu} />
//             </ul>
//             <img src="/public/images/icons8-menu-30.png" alt="menu icon" className="fas" onClick={openmenu} />
//         </nav>
//         <div className="header-text">
//             <p>Full Stack Developer</p>
//             <h1>Hi, I'm <span>Emmanuel</span><br />Juma From Kenya</h1>
//         </div>
//     </div>
//    </div> 

//     </div>
//   )
// }

// export default Header


import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  const openMenu = () => {
    setSideMenuVisible(true);
  };

  const closeMenu = () => {
    setSideMenuVisible(false);
  };

  return (
    <div>
      <div id="header">
        <div className="container">
          <nav>
            <img src="images/logo.png" className="logo" alt="Logo" />
            <ul className={sideMenuVisible ? 'show' : ''} id="sidemenu">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/services">SERVICES</Link></li>
              <li><Link to="/portfolio">PORTFOLIO</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <img
                src="images/icons8-cross-30.png"
                alt="cross icon"
                className="fas"
                onClick={closeMenu}
              />
            </ul>
            <img
              src="images/icons8-menu-30.png"
              alt="menu icon"
              className="fas"
              onClick={openMenu}
            />
          </nav>
          <div className="header-text">
            <p>Full Stack Developer</p>
            <h1>
              Hi, I'm <span>Leki</span>
              <br /> Emmanuel  From Kenya
            </h1>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
