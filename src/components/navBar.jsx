import ThemeSwitcher from "./themeSwitcher";
const NavBar = () => {
   return( 
    <nav className = " nav-bar">
        <div></div>
        <ul>
            <li><a  className = 'active' href="#home"> Home</a></li>
            <li><a href="#about"> About</a></li>
            <li><a href="#services"> Services</a></li>
            <li><a href="#contact"> Contact</a></li>
        </ul>
        <ThemeSwitcher/>
    </nav>
    );
}

export default NavBar