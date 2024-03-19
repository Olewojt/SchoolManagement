import React, {ChangeEvent, useState} from "react";
import classes from "./Login.module.scss"

import Input from "forms/Input.tsx";
import Button from "ui/Button.tsx";

import Logo from "assets/Logo.png"
import {useNavigate} from "react-router-dom";

const Reset: React.FC = () => {
    const [name, setName] = useState("")
    const [anime, setAnime] = useState(false)


    const navigate = useNavigate()
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const onButtonClick = () => {
        console.log("Welcome!")
    }

    const handleClick = () => {
        setAnime(true)
        setTimeout(() => {
            navigate("/")
        }, 1000);
    }

    return (
        <div className={classes.login}>
            <div className={classes.login__background}/>
            <aside className={classes.login__aside}>
                <img src={Logo} alt=""/>
                <div className={`${classes["reset__form"]} ${anime && classes["reset__form--anime"]}`}>
                    <h1 className={classes.header}>Reset Password</h1>
                    <Input type={"text"} error={false}
                           placeholder={"Login"} value={name}
                           onChange={handleNameChange}></Input>
                    <Button className={classes.btn} type={"submit"} children={"Sign in"} onClick={onButtonClick}/>
                    <div className={classes.text}>
                        <span>Remember yet?</span>
                        <br/>
                        <a onClick={handleClick}>Reset here</a>
                    </div>
                </div>
            </aside>
        </div>)
}

export default Reset