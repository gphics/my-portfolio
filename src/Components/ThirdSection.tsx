import FeedMasterIcon from "../assets/Static/feed-mastericon.svg";
import TrackItIcon from "../assets/Static/trackit-con.svg";
import ChiralIcon from "../assets/Static/chiral-icon.svg";
import KingFashionIcon from "../assets/Static/king-fashion-icon.svg";
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
      Img: FeedMasterIcon,
      url: "https://feed-master-client.vercel.app/landing-page",
      info: "A fullstack javaScript web application that helps farmers, and feed millers generate feed formula effortlessly and accurate in a blink of an eye.",
      stack: "Nodejs, Expressjs, MongoDB, Nextjs, Scss",
    },
    {
      name: "Track-it",
      Img: TrackItIcon,
      url: "https://trackit-gb3z.onrender.com",
      info: "A fullstack javaScript web application develop to help business owners record their business debts and also set reminders so as to help them in their business management.",
      stack: "Nodejs, Expressjs, MongoDB, Reactjs, Scss",
    },
    {
      name: "Chiral",
      Img: ChiralIcon,
      url: "https://chiral.vercel.app/",
      info: "The official website for Chiral, an agency responsible for design of brand visual identities and development of softwares. ",
      stack: "Nodejs,Nextjs, Expressjs, MongoDB, Reactjs, Scss",
    },
    {
      name: "King's Fashion",
      Img: KingFashionIcon,
      url: "https://kingfashion.vercel.app/",
      info: "The official website for King's Fashion, a fashion design brand that design all sorts of clothes styles.",
      stack: "Nodejs, Nestjs, Nextjs, MongoDB, Reactjs, Scss",
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
                  visit website
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
