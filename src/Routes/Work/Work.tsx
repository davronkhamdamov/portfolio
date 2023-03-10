import React from 'react'
import c from './Work.module.css'
import amazon from '../../assets/Images/amazon.png'
import texnomart from '../../assets/Images/texnomart.png'
import { Link } from 'react-router-dom'

const Work: React.FC = () => {
  return (
    <div className={c.workWrapper}>
      <div className={c.workItem}>
        <img src={amazon} alt="" />
        <h2>Amazon Clone</h2>
        <div className={c.des}>
          <p>Used libraries: react, redux, firebase, react router dom</p>
          <div className={c.btnGroup}>
            <a target="_blank" href="https://amazon-steel-nu.vercel.app/">
              Show Clone
            </a>
          </div>
        </div>
        <span className={c.workDate}>11.12.2022</span>
      </div>
      <div className={c.workItem}>
        <img src={texnomart} alt="" />
        <span className={c.workDate}>01.12.2022</span>
        <h2>Texnomart Clone</h2>
        <div className={c.des}>
          <p>
            Used libraries: React, Redux, Firebase, React Router Dom, I18next,
            Swiper
          </p>
          <div className={c.btnGroup}>
            <a target="_blank" href="https://texnomart-zeta.vercel.app/">
              Show Clone
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
