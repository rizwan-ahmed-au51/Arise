import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.scss';
import { FaAngleDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import logo from "../../assets/images/logo/BLUE@300x.png";
import apple from '../../assets/images/icons/apple.png';
import android from '../../assets/images/icons/android.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setActiveDropdown((prev) => !prev);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(`.${style.dropdown}`) && !e.target.closest(".dropdown-trigger")) {
        setActiveDropdown(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <>

      <div className={style.responsive_bar}>
        <div className={style.tab}>
          <div className={style.menu} onClick={toggleMenu}>
            <h4>
              <FaBars />
            </h4>
          </div>
          <div className={style.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={style.login_btn}>
            <NavLink to="/">
              <button>Enroll/Login</button>
            </NavLink>
          </div>
        </div>
      </div>



      <nav className={`${style.nav} ${isScrolled ? style.black : ""}`}>
        <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/ariseApp">Arise App</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="#" className="dropdown-trigger" onClick={toggleDropdown}>
              Branches <FaAngleDown />
            </NavLink>
            {activeDropdown && (
              <div className={style.dropdown}>
                <NavLink to="/branches/hyderabad">Hyderabad</NavLink>
                <NavLink to="/branches/delhi">Delhi</NavLink>
                <NavLink to="/branches/jaipur">Jaipur</NavLink>
                <NavLink to="/branches/chennai">Chennai</NavLink>
                <NavLink to="/branches/kerala">Kerala</NavLink>
              </div>
            )}
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <NavLink className={style.login1} to="#">
            <button>Enroll/Login</button>
          </NavLink>
          <div className={style.bottom}>
            <NavLink className={style.login} to="#">
              <button>Enroll/Login</button>
            </NavLink>
            <h1>
              <span>Arise</span> App
            </h1>
            <h3>
              Join Over <span>10,000+</span> Successful Medical Aspirants
            </h3>
            <div className={style.header_right_links}>
              <NavLink to="#">
                <img src={apple} alt="apple" />
                <div>
                  <span>Get it on</span>
                  <span>Apple Store</span>
                </div>
              </NavLink>
              <NavLink to="#">
                <img src={android} alt="android" />
                <div>
                  <span>Get it on</span>
                  <span>Play Store</span>
                </div>
              </NavLink>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};


export default Header


