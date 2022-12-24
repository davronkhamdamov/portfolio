import c from './Header.module.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MobileSidebar from '../MobileSidebar/MobileSidebar';
import logo from '../../assets/Images/headerLogo.png';

const Header: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  return (
    <>
      <header>
        <Link to="/" className={c.logoWrapper}>
          <img src={logo} alt="" width={60} />
        </Link>
        <nav>
          <ul className={c.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
          </ul>
          <div onClick={() => setIsSideBarOpen(true)} className={c.mobileMenu}>
            <p>=</p>
          </div>
        </nav>
      </header>
      <MobileSidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </>
  );
};

export default Header;
