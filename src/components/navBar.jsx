import ThemeSwitcher from "./themeSwitcher";
const NavBar = () => {
   return( 
    <nav className = " nav-bar">
        <div></div>
        <ul>
            <li><a  className = 'active' href=""> Home</a></li>
            <li><a href=""> About</a></li>
            <li><a href=""> Services</a></li>
            <li><a href=""> Contact</a></li>
        </ul>
        <ThemeSwitcher/>
    </nav>
    );
}

export default NavBar