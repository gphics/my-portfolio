import FeedMasterLogo from "../assets/Static/feed-mastericon.svg";
import TrackItLogo from "../assets/Static/trackit-con.svg";
import { TbWorldWww } from "react-icons/tb";
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
      name: "Feed-master",
      Img: FeedMasterLogo,
      url: "https://feed-master-client.vercel.app/landing-page",
      info: "A fullstack javaScript web application that helps farmers, and feed millers generate feed formula effortlessly and accurate in a blink of an eye.",
      stack: "Nodejs, Expressjs, MongoDB, Nextjs, Scss",
    },
    {
      name: "Track-it",
      Img: TrackItLogo,
      url: "https://trackit-gb3z.onrender.com",
      info: "A fullstack javaScript web application develop to help business owners record their business debts and also set reminders so as to help them in their business management.",
      stack: "Nodejs, Expressjs, MongoDB, Reactjs, Scss",
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
                  <TbWorldWww className="icon" />
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
