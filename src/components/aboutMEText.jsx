import React from 'react'

const AboutMeText = (props) => {
    const description = props.description;
    const name = props.name;
    const phone = props.phone;
    const email = props.email;
    const language = props.language;
    const freelance = props.freelance;
  return (
    <div className='about-column'>
        <p className='about-title'>I Develop Systems that Work</p>
        <p className='about-description'>{description}</p>
        <div className='personal-details'>
            <div>
                <p>Name</p>
                <p>Phone</p>
                <p>Email</p>
                <p>Language</p>
                <p>Freelance</p>
            </div>
            <div>
                <p>: {name}</p>
                <p>: {phone}</p>
                <p>: {email}</p>
                <p>: {language}</p>
                <p>: {freelance}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMeText