import React from 'react'
import icon from '../../assets/Images/footerLogo.png'
import c from './Footer.module.css'
const Footer: React.FC = () => {
  return (
    <footer className={c.footer}>
      <img src={icon} alt="" width={50} />
      <p className={c.footerText}>
        © 2023 Davron's partfolio. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
