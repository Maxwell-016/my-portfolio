/* eslint-disable no-unused-vars */
import workingAnimation from "./assets/whatIDo.png";
import webDev from "./assets/webDev.png";
import mobileDev from "./assets/appDev.png";
import nodeJS from "./assets/Node.js_logo.svg.png";
import uiux from "./assets/uiux.webp";
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
import Technologies from "./components/technologies";
import { FaBars } from "react-icons/fa";
import { useContent } from "./hooks/useContent";
import useExperienceData from "./hooks/useExperienceData";
import Experience from "./components/experience";
import "./App.css";

function App() {
  const { content, isLoading, error } = useContent();
  const { places, loading } = useExperienceData();

  //Hero section
  const altText = "My profile Photo";
  const imageUrl = isLoading ? "Loading..." : content.hero?.imageUrl;
  const title = isLoading ? "Loading..." : content.hero?.title;
  const name = isLoading ? "Loading..." : content.hero?.name;
  const continuation = isLoading ? "Loading..." : content.hero?.continuation;
  const description = isLoading ? "Loading..." : content.hero?.description;

  //Socials
  const linkedIn =
    // content.socials?.linkedIn ??
    "https://www.linkedin.com/in/maxwell-ndungu-016305258/";
  const instagram =
    // content.socials?.instagram ??
    "https://www.instagram.com/_m.a.k.s.y_/";
  const gitHub =
    // content.socials?.github ??
    "https://github.com/Maxwell-016";
  const twitter =
    // content.socials?.twitter ??
    "https://x.com/maksyn440";

  const whatsapp = "https://wa.me/25462989942";

  //About me section
  const aboutMeDescription = isLoading
    ? "Loading..."
    : content.about?.description;
  const phone = isLoading ? "Loading..." : content.about?.phone;
  const email = isLoading ? "Loading..." : content.about?.email;
  const language = isLoading ? "Loading..." : content.about?.language;
  const freelance = isLoading ? "Loading..." : content.about?.freelance;

  //Services section
  const webDevDescription = isLoading
    ? "Loading..."
    : content.services?.webDevDescription;
  const mobileDevDescription = isLoading
    ? "Loading..."
    : content.services?.mobileDevDescription;
  const backendDevDescription = isLoading
    ? "Loading..."
    : content.services?.backendDevDescription;
  const uiuxDesign = isLoading ? "Loading..." : content.services.uiuxDesign;

  //Contact section
  const getInTouch = isLoading ? "Loading..." : content.contact?.getInTouch;

  //icons
  const flutter =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/1024px-Flutter_logo.svg.png";
  const react =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png";
  const node = "https://cdn-icons-png.flaticon.com/512/5968/5968322.png";
  const javascript =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s";
  const html =
    "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp";
  const css =
    "https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg";
  const redux =
    "https://miro.medium.com/v2/resize:fit:400/1*0nHtg7jz-cd49KIb-Za8lg.png";
  const dart =
    "https://lemmy.world/pictrs/image/77433d2c-e894-4ad2-96cd-b8b0d6d3e840.png";
  const bootstrap =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png";
  const figma =
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg";
  const vercel = "https://www.svgrepo.com/show/354513/vercel-icon.svg";
  const firebase =
    "https://www.gstatic.com/devrel-devsite/prod/va786e79970aec04a12496606282a334acd24e2232e80173e6a239f5c02ccbb7e/firebase/images/touchicon-180.png";
  const mySql =
    "https://cdn.prod.website-files.com/66754aa69a5d872183713f9c/672dfced5422c158fb5a6002_mysql%20logo.png";
  const github =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png";
  const postman =
    "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png";
  const vite =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png";
  const riverpod = "https://riverpod.dev/img/logo.png";

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
          <div className="section">
            <CircularAvatar imageUrl={imageUrl} altText={altText} />
          </div>
          <div className="section">
            <IntroText title={title} name={name} continuation={continuation} />
            <SimpleDescription description={description} />
            <Socials
              linkedIn={linkedIn}
              gitHub={gitHub}
              instagram={instagram}
              twitter={twitter}
              whatsapp={whatsapp}
            />
          </div>
          <BouncingArrow />
        </div>
      </div>

      <div className="other-page">
        <div className="section">
          <Title title="About Me" id="about" />
          <div className="about-me">
            <AnimatedCard
              image={workingAnimation}
              altText="working animation"
            />
            <AboutMeText
              description={aboutMeDescription}
              name={name}
              phone={phone}
              email={email}
              language={language}
              freelance={freelance}
            />
          </div>
        </div>

        <div className="section" style={{ marginTop: "20px" }}>
          <Title title="Technologies I Use" id="technologies" />
          <div className="technologies">
            <Technologies icon={flutter} name="Flutter" />
            <Technologies icon={react} name="React" />
            <Technologies icon={node} name="Node.js" />
            <Technologies icon={javascript} name="Javascript" />
            <Technologies icon={html} name="HTML" />
            <Technologies icon={css} name="CSS" />
            <Technologies icon={bootstrap} name="Bootstrap" />
            <Technologies icon={dart} name="Dart" />
            <Technologies icon={vercel} name="Vercel" />
            <Technologies icon={github} name="Github" />
            <Technologies icon={redux} name="Redux" />
            <Technologies icon={figma} name="Figma" />
            <Technologies icon={postman} name="Postman" />
            <Technologies icon={firebase} name="Firebase" />
            <Technologies icon={mySql} name="mySQL" />
            <Technologies icon={vite} name="Vite" />
            <Technologies icon={riverpod} name="Riverpod" />
          </div>
        </div>
        <div className="section">
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
                imageUrl={nodeJS}
                altText="backend development"
                description={backendDevDescription}
                title="Back-end Development"
              />

              <ServiceCard
                imageUrl={uiux}
                altText="backend development"
                description={uiuxDesign}
                title="UI/UX Design"
              />
            </div>
          </div>
        </div>

        <div className="section" style={{ marginTop: "20px" }}>
          <Title title="Experience" id="experience" />
          <div className="experience ">
            {places.map((place) => {
              return (
                <Experience
                  key={place.id}
                  img={place.url}
                  place={place.place}
                  title={place.title}
                  roles={place.roles}
                />
              );
            })}
          </div>
        </div>

        <div className="section">
          <Title title="Contact Me" id="contact" />
          <div className="contact">
            <ContactForm getInTouch={getInTouch} />
          </div>
        </div>
      </div>
      <Footer
        linkedIn={linkedIn}
        gitHub={gitHub}
        instagram={instagram}
        twitter={twitter}
      />
    </>
  );
}

export default App;
