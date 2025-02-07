import { FaTimes, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import style from "./module.styles/notification.module.css";
import React from "react";

const Notification = (props) => {
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsValid(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  if (!isValid) {
    return null;
  }

  const showSuccess = props.showSuccess;
  const iconColor = showSuccess ? "teal" : "red";
  const icon = showSuccess ? <FaCheck size={20} /> : <FaTimes size={20} />;
  const title = showSuccess ? "All Good!" : "Error!";
  const message = showSuccess
    ? "Your message has been received. I will reach out as fast as possible via email"
    : "An error has occured trying to send your message. Please try again";

  return (
    <div className={style.notificationContainer}>
      <div className={style.iconContainer}>
        <div className={style.icon} style={{ backgroundColor: iconColor }}>
          {icon}
        </div>
      </div>
      <div className={style.body}>
        <div className={style.title}>{title}</div>
        <div className={style.message}>{message}</div>
      </div>
    </div>
  );
};

export default Notification;
