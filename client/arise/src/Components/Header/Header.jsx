import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo/BLUE@300x.png';
import androidIcon from '../../assets/images/icons/android.png';
import appleIcon from '../../assets/images/icons/apple.png';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navBlack, setNavBlack] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll to toggle background
  useEffect(() => {
    const handleScroll = () => {
      setNavBlack(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle dropdown
  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className={styles.responsiveBar}>
        <div className={styles.tab}>
          <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon sx={{ fontSize: 30, color: '#254086' }} />
          </div>
          <div className={styles.logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className={styles.loginBtn}>
            <a href="https://student.arisemedicalacademy.com/register">
              <button>Enroll/Login</button>
            </a>
          </div>
        </div>
      </div>

      <nav className={navBlack ? styles.black : ''}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <ul className={menuOpen ? styles.active : ''}>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavLink to="/app">Arise App</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li ref={dropdownRef} className={styles.dropdownContainer}>
            <button 
              className={styles.dropdownToggle}
              onClick={toggleDropdown}
              aria-expanded={dropdownOpen}
            >
              Branches <ExpandMoreIcon fontSize="small" />
            </button>
            {dropdownOpen && (
              <div className={styles.dropdown}>
                <NavLink to="/hyd" onClick={() => setDropdownOpen(false)}>Hyderabad</NavLink>
                <NavLink to="/delhi" onClick={() => setDropdownOpen(false)}>Delhi</NavLink>
                <NavLink to="/jaipur" onClick={() => setDropdownOpen(false)}>Jaipur</NavLink>
                <NavLink to="/chennai" onClick={() => setDropdownOpen(false)}>Chennai</NavLink>
                <NavLink to="/kerala" onClick={() => setDropdownOpen(false)}>Kerala</NavLink>
              </div>
            )}
          </li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <a className={styles.login1} href="https://student.arisemedicalacademy.com/register">
            <button>Enroll/Login</button>
          </a>
          <div className={styles.bottom}>
            <a className={styles.login} href="https://student.arisemedicalacademy.com/register">
              <button>Enroll/Login</button>
            </a>
            <h1><span>Arise</span> App</h1>
            <h3>Join Over <span>40,000+</span> Successful Medical Aspirants</h3>
            <div className={styles.icons}>
              <a href="https://play.google.com/store/apps/details?id=com.arisemobile.app">
                <img src={androidIcon} alt="Android" />
              </a>
              <a href="https://apps.apple.com/in/app/arise-medical-academy/id1581256443">
                <img src={appleIcon} alt="Apple" />
              </a>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;