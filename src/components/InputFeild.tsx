import React from 'react';
import "./styles.css";

const InputFeild = () => {
  return (
    <form className='input'>
        <input className="input__box" type="input" placeholder='enter a task'/>
        <button className="input_submit" type="submit">Go</button>
    </form>
  )
}

export default InputFeild
