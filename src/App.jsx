import profileImage from './assets/profile.jpg'
import NavBar from './components/navBar'
import CircularAvatar from './components/circularAvatar'
import IntroText from './components/introText';
import SimpleDescription from './components/simpleDesc';
import './App.css';
function App() {
  const altText = "My profile Photo"
  const title = "Hello, I'm"
  const name = "Maxwell Ndungu,"
  const continuation = "Flutter / React developer"
  const description = "I am a React and Flutter Developer with expertise in frontend technologies like ReactJS, Flutter, HTML, CSS, JavaScript, and state management (Hooks, Riverpod). I also have experience with backend technologies, including Firebase and API integrations."
  return (
    <>
      <NavBar/>
      <div className='introduction'>
        <CircularAvatar imageUrl={profileImage} altText={altText}/>
        <IntroText title = {title} name = {name} continuation = {continuation}/>
        <SimpleDescription description = {description}/>
      </div>
      
    </>
  )
}

export default App
