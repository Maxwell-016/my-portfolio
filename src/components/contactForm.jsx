import React from "react";
import TextField from "./labelledTextField";
import style from "./module.styles/contactForm.module.css";
import validator from "validator";
import DialogBox from "./dialogBox";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isValid, setValid] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setValid(validator.isEmail(emailValue));
  };

  const handleName = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
  };

  const handleMessage = (e) => {
    const messageValue = e.target.value;
    setMessage(messageValue);
  };

  const handleSubmit = (e) => {
    console.log(name);
    console.log(email);
    console.log(message);

    e.preventDefault();
  };
  
  const handleCancel = () =>{
    setShowDialog(false);
  }

  const handleSubmitPressed = (e) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const getInTouch = props.getInTouch;
  return (
    <>
      <div className={style.contactUs}>
        <div className={style.contactText}>
          <h2>Get In Touch</h2>
          <p>{getInTouch}</p>
        </div>
        <form action="/submit-form">
          <TextField
            isValid={true}
            onChange={handleName}
            label="Name"
            placeholder="Your name here..."
            name="name"
            type="text"
          />
          <TextField
            isValid={isValid}
            onChange={handleEmail}
            label="Email"
            placeholder="Your email here..."
            name="email"
            type="email"
          />
          <TextField
            label="Message"
            onChange={handleMessage}
            placeholder="Your message here..."
            name="message"
            isMessage={true}
          />
          <div className={style.buttons}>
            <button
              type="submit"
              className={style.submit}
              onClick={handleSubmitPressed}
            >
              Submit
            </button>

            <button type="reset" className={style.reset}>
              Reset
            </button>
          </div>
        </form>
        {showDialog && (
          <div className={style.dialogOverlay}>
            <DialogBox
              title="Confirm Details"
              name={name}
              email={email}
              message={message}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default ContactForm;
