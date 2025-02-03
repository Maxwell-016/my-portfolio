import React from 'react'
import IconButton from './iconButton';
import {FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
const Socials = () => {
  return (
    <div className="socials">
        {/* TODO: Add links to the social media accounts */}
        <IconButton icon={FaLinkedin} onPressed={()=>{console.log("LinkedIn icon has been pressed")}}/>
        <IconButton icon={FaGithub} onPressed={()=>{console.log("GitHub icon has been pressed")}}/>
        <IconButton icon={FaInstagram} onPressed={()=>{console.log("Instagram icon has been pressed")}}/>
        <IconButton icon={FaTwitter} onPressed={()=>{console.log("Twitter icon has been pressed")}}/>
    </div>
  )
}

export default Socials