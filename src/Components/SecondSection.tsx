import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiSass } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
const SecondSection = () => {
  type skill = { name: string; Icon: any };
  const skillsArr: skill[] = [
    { name: "Nodejs", Icon: FaNodeJs },
    { name: "Expressjs", Icon: FaNodeJs },
    { name: "MongoDB", Icon: DiMongodb },
    { name: "Nestjs", Icon: SiNestjs },
    { name: "Nextjs", Icon: TbBrandNextjs },
    { name: "React", Icon: FaReact },
    { name: "typeScript", Icon: SiTypescript },
    { name: "javaScript", Icon: IoLogoJavascript },
    { name: "HTML", Icon: AiFillHtml5 },
    { name: "SCSS", Icon: SiSass },
    { name: "CSS", Icon: DiCss3 },
  ];
  return (
    <div className="second-section">
      <article className="second-intro">
        <h4>Hello, I am Abdulbasit</h4>
        <p>
          Transformations of ideas to product requires the action of a
          specialist and that is the reason for my prescence here. I cannot do
          everything but I can deliver a reliable and efficient product that
          matches your business goals and satisfy the need of your users.
        </p>
      </article>
      <article className="skillset">
        <h5 className="each-section-title">Skills</h5>
        <div className="skills-list">
          {skillsArr.map((item: skill, index: number) => {
            return (
              <aside key={index}>
                <item.Icon className="icon" />
                <h4> {item.name} </h4>
              </aside>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default SecondSection;
