import React from 'react';
import c from './Socialmedia.module.css';
import { FaTelegramPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SocialMedia: React.FC = () => {
  return (
    <div className={c.SocialMedia}>
      <a
        href="https://t.me/pro_username"
        target="_blank"
        className={c.telegram}
      >
        <FaTelegramPlane className={c.telegramIcon} />
        <div className={c.link}>
          <FiExternalLink className={c.openlinkIcon} />
        </div>
      </a>
      <a
        href="https://github.com/davronkhamdamov"
        target="_blank"
        className={c.github}
      >
        <FaGithub className={c.GithubIcon} />
        <div className={c.link}>
          <FiExternalLink className={c.openlinkIcon} />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/davron-xamdamov-51593a28b"
        target="_blank"
        className={c.linkedin}
      >
        <FaLinkedin className={c.linkedinIcon} />
        <div className={c.link}>
          <FiExternalLink className={c.openlinkIcon} />
        </div>
      </a>
      <a
        href="mailto:support@betwixt.uz"
        target="_blank"
        className={c.mail}
      >
        <FiMail className={c.mailIcon} />
        <div className={c.link}>
          <FiExternalLink className={c.openlinkIcon} />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
