import React from 'react';
import c from './MobileSidebar.module.css';
import { Link } from 'react-router-dom';
interface bool {
  setIsSideBarOpen: Function;
  isSideBarOpen: boolean;
}
const MobileSidebar: React.FC<bool> = ({ setIsSideBarOpen, isSideBarOpen }) => {
  return (
    <>
      <div className={`${c.sidebar} ${isSideBarOpen ? c.active : ''}`}>
        <div onClick={() => setIsSideBarOpen(false)}>
          <p className={c.closeSymbol}>+</p>
        </div>
        <ul onClick={() => setIsSideBarOpen(false)} className={c.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div
        style={{ display: isSideBarOpen ? 'block' : 'none' }}
        onClick={() => setIsSideBarOpen(false)}
        className={c.overlay}
      ></div>
    </>
  );
};

export default MobileSidebar;
