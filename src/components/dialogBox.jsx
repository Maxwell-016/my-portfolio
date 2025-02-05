import style from "./module.styles/dialogBox.module.css";
import React from "react";

const DialogBox = (props) => {
  const title = props.title;
  const name = props.name;
  const email = props.email;
  const message = props.message;
  const handleSubmit = props.onSubmit;
  const handleCancel = props.onCancel;
  return (
    <div className={style.container}>
      <div className={style.dialogContainer}>
        <h2>{title}</h2>
        <hr />
        <div className={style.details}>
          <div className={style.keys}>
            <p>Name </p>
            <p>email </p>
            <p>Message </p>
          </div>
          <div className={style.values}>
            <p> : {name}</p>
            <p> : {email}</p>
            <p> : {message}</p>
          </div>
        </div>
        <hr />
        <div className={style.buttons}>
          <button className={style.submitButton} onClick={handleSubmit}>Submit</button>
          <button className={style.cancelButton} onClick={handleCancel}>Cancel</button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
