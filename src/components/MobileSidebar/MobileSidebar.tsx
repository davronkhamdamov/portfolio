import React from 'react';
import c from './MobileSidebar.module.css';
import { Link, useLocation } from 'react-router-dom';
import navbardata from '../../json/navbardata.json';
import { active } from '../../utils';
interface bool {
  setIsSideBarOpen: Function;
  isSideBarOpen: boolean;
}
const MobileSidebar: React.FC<bool> = ({ setIsSideBarOpen, isSideBarOpen }) => {
  const { pathname } = useLocation();
  return (
    <>
      <div className={`${c.sidebar} ${isSideBarOpen ? c.active : ''}`}>
        <div onClick={() => setIsSideBarOpen(false)}>
          <p className={c.closeSymbol}>+</p>
        </div>
        <ul onClick={() => setIsSideBarOpen(false)} className={c.list}>
          {navbardata.map((el, i) => {
            return (
              <li>
                <Link
                  style={{
                    color: `${active(
                      pathname,
                      el.link,
                      'rgb(0,255,255)',
                      '#fff'
                    )}`,
                  }}
                  to={el.link}
                >
                  {el.title}
                </Link>
              </li>
            );
          })}
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
