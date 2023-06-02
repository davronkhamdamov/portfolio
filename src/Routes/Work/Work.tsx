import React from "react";
import c from "./Work.module.css";
import texnomart from "../../assets/Images/texnomart.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Work: React.FC = () => {
  return (
    <div className={c.workWrapper}>
      <div className={c.workItem}>
        <div className={c.img}>
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/didddubfm/image/upload/v1685710973/amazon_kxg6nw.png"
            alt=""
          />
        </div>
        <h2>Amazon Clone</h2>
        <div className={c.des}>
          <p>Used libraries: react, redux, react router dom</p>
          <div className={c.btnGroup}>
            <a target="_blank" href="https://amazon-steel-nu.vercel.app/">
              Show Clone
            </a>
            <a
              target="_blank"
              href="https://github.com/davronkhamdamov/amazon.git"
            >
              Show GitHub
            </a>
          </div>
        </div>
        <span className={c.workDate}>11.12.2022</span>
      </div>
      <div className={c.workItem}>
        <div className={c.img}>
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/didddubfm/image/upload/v1685713612/texnomart_sfymky.png"
            alt=""
          />
        </div>
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
            <a
              target="_blank"
              href="https://github.com/davronkhamdamov/texnomart.git"
            >
              Show GitHub
            </a>
          </div>
        </div>
      </div>
      <div className={c.workItem}>
        <div className={c.img}>
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/didddubfm/image/upload/v1685709557/Screenshot_from_2023-06-02_17-37-46_hr2awj.png"
            alt=""
          />
        </div>
        <span className={c.workDate}>08.05.2023</span>
        <h2>Lamasocial</h2>
        <div className={c.des}>
          <p>
            This project is built with Database: ElephantSql Server: Vercel Base
            firmwork: Express js Helper: Firabase
          </p>
          <div className={c.btnGroup}>
            <a target="_blank" href="https://www.birgafullstackmiz.live/">
              Show Project
            </a>
            <a
              target="_blank"
              href="https://github.com/davronkhamdamov/Lamasocial_front"
            >
              Show GitHub
            </a>
          </div>
        </div>
      </div>
      <div className={c.workItem}>
        <div className={c.img}>
          <LazyLoadImage
            className="img"
            effect="blur"
            src="https://res.cloudinary.com/didddubfm/image/upload/v1685711350/Screenshot_from_2023-06-02_18-08-59_c59xms.png"
            alt=""
          />
        </div>
        <span className={c.workDate}>24.05.2023</span>
        <h2>Quiz app</h2>
        <br />
        <div className={c.des}>
          <p>
            This project is built with Database: ElephantSql Server: Replit
            Vercel Base firmwork: Nestjs,React,React Router Dom v6.11 Helper:
            Firabase
          </p>
          <div className={c.btnGroup}>
            <a target="_blank" href="https://quiz.betwixt.uz/">
              Show Clone
            </a>
            <a
              target="_blank"
              href="https://github.com/davronkhamdamov/quiz-app-front"
            >
              Show GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
