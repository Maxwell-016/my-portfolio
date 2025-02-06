import React from "react";
import style from "./module.styles/footer.module.css";
import NavBar from "./navBar";
import Socials from "./socials";
const Footer = (props) => {
  const linkedIn = props.linkedIn;
  const gitHub = props.gitHub;
  const instagram = props.instagram;
  const twitter = props.twitter;
  const currentYear = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <h2>Maxwell Ndungu</h2>
      <NavBar />
      <Socials
        linkedIn={linkedIn}
        gitHub={gitHub}
        instagram={instagram}
        twitter={twitter}
      />
      <p>&copy; {currentYear} Maxwell Ndungu. All rights reserved</p>
    </footer>
  );
};

export default Footer;
