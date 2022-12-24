import React from 'react';
import c from './Home.module.css';
import mainImg from '../../assets/Images/heroBg.png';
const Home: React.FC = () => {
  return (
    <main>
      <div className={c.hero}>
        <div className={c.heroTextWrap}>
          <h1 className={c.heroTitle}>HI</h1>
          <h2 className={c.heroText}>My name is Davron</h2>
          <p className={c.heroDes}>I'm Frontend Web Developer</p>
        </div>
        <div>
          <img className={c.heroBg} src={mainImg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
