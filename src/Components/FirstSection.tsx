import { AiFillGithub } from "react-icons/ai";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import Hero from "../assets/Static/Hero.png"
import {RiWhatsappFill} from 'react-icons/ri'
const FirstSection = () => {
  return (
    <header className="first-section">
      <nav>
        <h5>Abdulbasit</h5>
        <div className="link-holder">
          <a
            title="github"
            href="https://github.com/gphics"
            className="contact-link"
          >
            <AiFillGithub className="link-icon" />
          </a>
          <a
            title="twitter"
            href="https://twitter.com/abdulbasit010"
            className="contact-link"
          >
            <BsTwitter className="link-icon" />
          </a>
          <a
            title="linkedin"
            href="https://www.linkedin.com/in/abdulbasit-abdulhakeem-013a42213/"
            className="contact-link"
          >
            <BsLinkedin className="link-icon" />
          </a>
          <a
            title="Whatsapp"
            href="https://wa.me/message/GNZQ7IM4HWWXD1"
            className="contact-link"
          >
            <RiWhatsappFill className="link-icon" />
          </a>
        </div>
      </nav>

      <article className="header-main-intro">
        <section className="intro-info">
          <h5 className="each-section-title">front end developer</h5>
          <h3>Action surpass word</h3>
          <h3>Let's start with the code...</h3>
          <p> I develop reliable, efficient and reusable user interface. </p>
        </section>
        <section className="hero-section">
          <img src={Hero} alt="" className="hero-img" />
        </section>
      </article>
    </header>
  );
};

export default FirstSection;
