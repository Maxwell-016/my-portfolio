
const NavBar = (props) => {
    const isfooter = props.isFooter;
   return( 
    <nav className = "nav-bar">
        <ul>
            <li><a  className = 'active' href="#home"> Home</a></li>
            <li><a href="#about"> About</a></li>
            <li><a href="#services"> Services</a></li>
            <li><a href="#contact"> Contact</a></li>
        </ul>
    </nav>
    );
}

export default NavBar