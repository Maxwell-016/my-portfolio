import React from 'react'
import styles from './module.styles/labelledTextField.module.css'
const LabelledTextField = (props) => {
    const label = props.label;
    const placeholder = props.placeholder;
    const name = props.name;
    const type = props.type;
    const onChange = props.onChange;
    const isMessage = props.isMessage;
    const isValid= props.isValid;
    if(isMessage){
        return(
            <div>
                <p>{label}</p>
                <textarea name={name} id={name} rows={3} placeholder={placeholder} required/>
            </div>
        );
    }
    else{
  return (
    <div>
        <p>{label}</p>
        <input  
        style={
            {border: isValid? ' 1px solid #526D82' : '1px solid red'}
        } 
        onChange={onChange} type={type} name={name} id={name} className={styles.textfield} placeholder={placeholder} required/>
        {!isValid && <p style={{color: 'red', marginTop: '5px'}}>Please enter a valid email address.</p>}
    </div>
  )
}
}

export default LabelledTextField