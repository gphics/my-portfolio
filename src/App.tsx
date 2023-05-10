import "./assets/Style/main.scss"
import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";
function App() {
  return (
    <section className="container">
      <FirstSection />
      <SecondSection />
      <ThirdSection/>
    </section>
  );
}

export default App
