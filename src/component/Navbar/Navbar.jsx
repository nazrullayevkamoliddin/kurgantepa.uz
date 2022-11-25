import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/images/humo3.PNG';
import foto from '../../assets/images/humo3.PNG'
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { Link } from 'react-router-dom';
import {AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {

  const [Mobile, setMobile] = useState(false);
  const[ochiq, setOchiq] = useState(false);

  function navM() {
    setOchiq( ochiq => !ochiq)
}

  return (
    <div>
      <div onClick={navM} className={!ochiq?"link1":"link1 active"}>
                      <div className="link">
                      <Link to={"/"}><img src={foto} alt="logo" /></Link>
                      <ul className="navML">
                      <li><Link to={"/"}> Bosh sahifa </Link></li>
                      <li><Link to={"/about"}>Tuman Hokimiyati </Link></li>
                      <li><Link to={"/news"}> Yangiliklar</Link></li>
                    <li><Link to={"/links"}> Murojatlar</Link></li>
                      <li><Link to={"/category"}> Elektron Hukumat </Link></li>
                      <li><Link to={"/contact"}> Bog'lanish </Link></li>
              </ul>
                  </div> 
                        </div>
      <div className="header">
        <div className="headHeader">
        <div onClick={navM} className="ffl"><AiOutlineMenu className="gam"/></div>
          <span className="leftLine"></span>
            <button className="mobileMenuIcon" onClick={navM}>
              {Mobile ? <ImCross className="icon" /> : <FaBars className="icon" />}
            </button>
            <Link to={"/"}><img src={logo} alt="logo" /></Link>
          <span className="rightLine"></span>
          <div className="ffl"></div>
        </div>
        <div className="wrapper">
          <nav className="nav">
            <ul className="navLinks">
              <li><Link to={"/"}> Bosh sahifa </Link></li>
              <li><Link to={"/about"}> Qo'rg'ontepa Tuman Hokimiyati </Link></li>
              <li><Link to={"/news"}> Yangiliklar</Link></li>
            </ul>
            <ul className="navLinks">
            <li><Link to={"/links"}> Murojatlar</Link></li>
              <li><Link to={"/category"}> Elektron Hukumat </Link></li>
              <li><Link to={"/contact"}> Bog'lanish </Link></li>
              </ul>
          </nav>
        </div>
      </div>
    </div> 
  )
}

export default Navbar;