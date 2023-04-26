import React from "react";
import c from "./Contact.module.css";
const Contact: React.FC = () => {
  return (
    <div className={c.contactHero}>
      <h1 className={c.title}>Contact</h1>
      <div className={c.formWrap}>
        <form action="" method="post">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea name="" cols={40} rows={7} placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
