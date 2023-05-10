import HiPayLogo from "../assets/Static/HiPayLogo.svg";
import HiShopLogo from "../assets/Static/HiShopLogo.svg";
import ExamPrecisionLogo from "../assets/Static/ExamPrecisionLogo.svg";
import { FaLink } from "react-icons/fa";
const ThirdSection = () => {
  interface obj {
    name: string;
    info: string;
    Img: any;
    url: string;
    stack: string;
  }
  const mainArr: obj[] = [
    {
      name: "exam-precision",
      Img: ExamPrecisionLogo,
      url: "https://exam-precision.netlify.app",
      info: "An exam hosting platform that allows users to host their exams easily in an automated way. Marking of the exam and displaying the result is done automatically with high accuracy without your intervention.",
      stack: "JavaScript,React, Supabase, CSS, ShortUUID ",
    },
    {
      name: "Hi-pay",
      Img: HiPayLogo,
      url: "https://hi-pay.netlify.app",
      info: "A fictional e-banking platform that allows user to send and receive money from other users. It also serves as a payment gateway used in Hi-Shop.",
      stack: "TypeScript,React, Supabase, SCSS, ShortUUID ",
    },
    {
      name: "Hi-shop",
      Img: HiShopLogo,
      url: "https://hi-shop.netlify.app",
      info: "A fictional e-commerce website that allows users to create, sell and buy products with their Hi-Pay account.",
      stack: "TypeScript,React, Supabase, SCSS, ShortUUID, Toastify ",
    },
  ];
  return (
    <div className="third-section">
      <h5 className="each-section-title">projects</h5>
      <article className="project-list">
        {mainArr.map((item: obj, index: number) => {
          return (
            <section key={index} className="each-project">
              <img src={item.Img} alt="" />
              <div>
                <h4> {item.name} </h4>
                <p> {item.info} </p>
                <h6>stack: {item.stack}</h6>
                <a title={item.name} href={item.url}>
                  <FaLink className="icon" />
                </a>
              </div>
            </section>
          );
        })}
              
      </article>
    </div>
  );
};

export default ThirdSection;
