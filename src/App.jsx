import profileImage from './assets/profile.jpg'
import workingAnimation from './assets/whatIdo.png'
import webDev from './assets/webDev.png'
import mobileDev from './assets/appDev.png'
import firebase from './assets/firebase.png'
import NavBar from './components/navBar'
import CircularAvatar from './components/circularAvatar'
import IntroText from './components/introText';
import SimpleDescription from './components/simpleDesc';
import Socials from './components/socials'
import BouncingArrow from './components/bouncingArrow';
import Title from './components/title';
import AnimatedCard from './components/animatedCard';
import AboutMeText from './components/aboutMEText';
import ServiceCard from './components/serviceCard';
import ContactForm from './components/contactForm';
import Footer from './components/footer';
import ThemeSwitcher from './components/themeSwitcher';
import { FaBars } from "react-icons/fa";
import './App.css';
function App() {
  const altText = "My profile Photo"
  const title = "Hello, I'm"
  const name = "Maxwell Ndungu,"
  const continuation = "Flutter / React developer"
  const description = "I am a React and Flutter Developer with expertise in frontend technologies like ReactJS, Flutter, HTML, CSS, JavaScript, and state management (Hooks, Riverpod). I also have experience with backend technologies, including Firebase and API integrations."
  const webDevDescription = "I build responsive, modern, and user-friendly web applications using React and Flutter. Whether it's a dynamic single-page application or a cross-platform web solution, I ensure seamless performance and a great user experience."
  const mobileDevDescription = "I create high-quality, cross-platform mobile applications for Android and iOS using Flutter. From sleek UI designs to smooth functionality, I deliver apps that are fast, reliable, and scalable."
  const backendDevDescription = "I design and implement robust backend solutions using Firebase. From real-time databases to authentication and cloud functions, I ensure your app has a secure and scalable foundation to thrive."
  return (
    <>
    <div className='first-page'  id = "home">
    <input type="checkbox" name="sideNav" id="sideNav" />
        <label htmlFor="sideNav" className="bars">
            <FaBars></FaBars>
        </label>
      <div className='top-navigation'>
        <div></div>
        <NavBar/>
        <ThemeSwitcher/>
      </div>
      <div className='introduction'>
        <CircularAvatar imageUrl={profileImage} altText={altText}/>
        <IntroText title = {title} name = {name} continuation = {continuation}/>
        <SimpleDescription description = {description}/>
        <Socials/>
      <BouncingArrow/>
      </div>
    </div>

    <div className="other-page">

      <Title title = "About Me" id ="about"/>
      <div className='about-me'>
        <AnimatedCard image = {workingAnimation} altText = "working animation" />
        <AboutMeText/>
      </div>

      <Title title = "Services" id = "services"/>
      <div className="services">
        <div className='service-cards'>
          <ServiceCard imageUrl={webDev} altText="Web development" description= {webDevDescription} title="Web Development"/>
          <ServiceCard imageUrl={mobileDev} altText="Mobile development" description= {mobileDevDescription} title="App Development"/>
          <ServiceCard imageUrl={firebase} altText="backend development" description= {backendDevDescription} title="Back-end Development"/>
        </div>
      </div>

      <Title title = "Contact Me" id ="contact"/>
      <div className = "contact">
        <ContactForm/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default App
