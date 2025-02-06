import React from 'react'
import IconButton from './iconButton';
import {FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
const Socials = (props) => {
  const linkedIn = props.linkedIn;
  const gitHub = props.gitHub;
  const instagram = props.instagram;
  const twitter = props.twitter;
  
  return (
    <div className="socials">
        <IconButton icon={FaLinkedin} url = {linkedIn}/>
        <IconButton icon={FaGithub} url = {gitHub}/>
        <IconButton icon={FaInstagram} url = {instagram}/>
        <IconButton icon={FaTwitter} url = {twitter}/>
    </div>
  )
}

export default Socials