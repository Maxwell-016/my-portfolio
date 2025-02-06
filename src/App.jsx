import workingAnimation from "./assets/whatIdo.png";
import webDev from "./assets/webDev.png";
import mobileDev from "./assets/appDev.png";
import firebase from "./assets/firebase.png";
import NavBar from "./components/navBar";
import CircularAvatar from "./components/circularAvatar";
import IntroText from "./components/introText";
import SimpleDescription from "./components/simpleDesc";
import Socials from "./components/socials";
import BouncingArrow from "./components/bouncingArrow";
import Title from "./components/title";
import AnimatedCard from "./components/animatedCard";
import AboutMeText from "./components/aboutMEText";
import ServiceCard from "./components/serviceCard";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";
import ThemeSwitcher from "./components/themeSwitcher";
import { FaBars } from "react-icons/fa";

import { useContent } from "./hooks/useContent";
import "./App.css";
function App() {
  const { content, isLoading, error } = useContent();
  console.log(content);

  //Hero section
  const altText = "My profile Photo";
  const imageUrl = isLoading ? "Loading..." : content.hero?.imageUrl;
  const title = isLoading ? "Loading..." : content.hero?.title;
  const name = isLoading ? "Loading..." : content.hero?.name;
  const continuation = isLoading ? "Loading..." : content.hero?.continuation;
  const description = isLoading ? "Loading..." : content.hero?.description;

  //Socials
  const linkedIn = content.socials?.linkedIn ??
    "https://www.linkedin.com/in/maxwell-ndungu-016305258/";
  const instagram = content.socials?.instagram ?? 
    "https://www.instagram.com/_m.a.k.s.y_/";
  const gitHub = content.socials?.github ?? 
    "https://github.com/Maxwell-016";
  const twitter = content.socials?.twitter ?? 
    "https://x.com/maksyn440";

  //About me section
  const aboutMeDescription = isLoading? "Loading...": content.about?.description;
  const phone = isLoading ? "Loading..." : content.about?.phone;
  const email = isLoading ? "Loading..." : content.about?.email;
  const language = isLoading ? "Loading..." : content.about?.language;
  const freelance = isLoading ? "Loading..." : content.about?.freelance;

  //Services section
  const webDevDescription = isLoading? "Loading...": content.services?.webDevDescription;
  const mobileDevDescription = isLoading? "Loading...": content.services?.mobileDevDescription;
  const backendDevDescription = isLoading? "Loading...": content.services?.backendDevDescription;

  //Contact section
  const getInTouch = isLoading ? "Loading..." : content.contact?.getInTouch;

  return (
    <>
      <div className="first-page" id="home">
        <input type="checkbox" name="sideNav" id="sideNav" />
        <label htmlFor="sideNav" className="bars">
          <FaBars></FaBars>
        </label>
        <div className="side-bar">
          <div className="top-navigation">
            <div></div>
            <NavBar />
            <ThemeSwitcher />
          </div>
        </div>
        <div className="small-screen-theme">
          <ThemeSwitcher />
        </div>

        <div className="introduction">
          <CircularAvatar imageUrl={imageUrl} altText={altText} />
          <IntroText title={title} name={name} continuation={continuation} />
          <SimpleDescription description={description} />
          <Socials
            linkedIn={linkedIn}
            gitHub={gitHub}
            instagram={instagram}
            twitter={twitter}
          />
          <BouncingArrow />
        </div>
      </div>

      <div className="other-page">
        <Title title="About Me" id="about" />
        <div className="about-me">
          <AnimatedCard image={workingAnimation} altText="working animation" />
          <AboutMeText
            description={aboutMeDescription}
            name={name}
            phone={phone}
            email={email}
            language={language}
            freelance={freelance}
          />
        </div>

        <Title title="Services" id="services" />
        <div className="services">
          <div className="service-cards">
            <ServiceCard
              imageUrl={webDev}
              altText="Web development"
              description={webDevDescription}
              title="Web Development"
            />
            <ServiceCard
              imageUrl={mobileDev}
              altText="Mobile development"
              description={mobileDevDescription}
              title="App Development"
            />
            <ServiceCard
              imageUrl={firebase}
              altText="backend development"
              description={backendDevDescription}
              title="Back-end Development"
            />
          </div>
        </div>

        <Title title="Contact Me" id="contact" />
        <div className="contact">
          <ContactForm getInTouch={getInTouch} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
