import React from 'react'
import style from './module.styles/footer.module.css'
import NavBar from './navBar'
import Socials from './socials'
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
      <footer className={style.footer}>
        <h2>Maxwell Ndungu</h2>
        <NavBar/>
        <Socials/>
        <p>&copy; {currentYear} Maxwell Ndungu. All rights reserved</p>
      </footer>
  )
}

export default Footer