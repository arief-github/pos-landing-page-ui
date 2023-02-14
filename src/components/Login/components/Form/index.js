import React from "react";
import style from './Form.module.css';

const Form = ({ handleLogin, handleEmailChange, handlePwdChange, valueEmail, valuePwd }) => {

    return (
        <form className={ style.card__form } onSubmit={handleLogin}>
            <label>Username</label>
            <input type="text" value={valueEmail} placeholder="username" onChange={handleEmailChange}/>

            <label>Password</label>
            <input type="password" value={valuePwd} placeholder="password" onChange={handlePwdChange}/>

            <button type="submit"> Login </button>
        </form>
    )
}

export default Form;