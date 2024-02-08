import { AiFillGithub } from "react-icons/ai";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import Hero from "../assets/Static/sec-hero.jpg";
import { RiWhatsappFill } from "react-icons/ri";
const FirstSection = () => {
  type la = {
    title: string;
    href: string;
    Icon?: any;
  };
  const linkArr: la[] = [
    { title: "github", href: "https://github.com/gphics", Icon: AiFillGithub },
    {
      title: "twitter",
      href: "https://twitter.com/abdulbasit010",
      Icon: BsTwitter,
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/abdulbasit-abdulhakeem-013a42213/",
      Icon: BsLinkedin,
    },
    {
      title: "Whatsapp",
      href: "https://wa.me/message/GNZQ7IM4HWWXD1",
      Icon: RiWhatsappFill,
    },
  ];
  return (
    <header className="first-section">
      <nav>
        <h5>Abdulbasit</h5>
        <div className="link-holder">
          {linkArr.map(({ Icon, href, title }, index: number) => {
            return (
              <a key={index}
                href={href}
                target="_blank"
                title={title}
                className="contact-link"
              >
                <Icon className="link-icon" />
              </a>
            );
          })}
        </div>
      </nav>

      <article className="header-main-intro">
        <section className="intro-info">
          <h5 className="each-section-title">Fullstack developer</h5>
          <h3>Action surpass word</h3>
          <h3>Let's start with the code...</h3>
          <p> I develop reliable, efficient and user friendly website. </p>
        </section>
        <section className="hero-section">
          <img src={Hero} alt="" className="hero-img" />
        </section>
      </article>
    </header>
  );
};

export default FirstSection;

/*
FF6B2F
FCA80A
*/
