import profileImage from './assets/profile.jpg'
import workingAnimation from './assets/whatIdo.png'
import webDev from './assets/webDev.png'
import mobileDev from './assets/appDev.png'
import firebase from './assets/firebase.png'
import NavBar from './components/navBar'
import CircularAvatar from './components/circularAvatar'
import IntroText from './components/introText';
import SimpleDescription from './components/simpleDesc';
import IconButton from './components/iconButton';
import {FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import BouncingArrow from './components/bouncingArrow';
import Title from './components/title';
import AnimatedCard from './components/animatedCard';
import AboutMeText from './components/aboutMEText';
import ServiceCard from './components/serviceCard';
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
    <div className='first-page'>
      <NavBar/>
      <div className='introduction'>
        <CircularAvatar imageUrl={profileImage} altText={altText}/>
        <IntroText title = {title} name = {name} continuation = {continuation}/>
        <SimpleDescription description = {description}/>

        <div className="socials">
        {/* TODO: Add links to the social media accounts */}
        <IconButton icon={FaLinkedin} onPressed={()=>{console.log("LinkedIn icon has been pressed")}}/>
        <IconButton icon={FaGithub} onPressed={()=>{console.log("GitHub icon has been pressed")}}/>
        <IconButton icon={FaInstagram} onPressed={()=>{console.log("Instagram icon has been pressed")}}/>
        <IconButton icon={FaTwitter} onPressed={()=>{console.log("Twitter icon has been pressed")}}/>
      </div>
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
    </div>
    </>
  )
}

export default App
