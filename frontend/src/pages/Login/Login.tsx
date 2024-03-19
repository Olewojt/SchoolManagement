import React, {ChangeEvent, useState} from "react";
import classes from "./Login.module.scss"

import Input from "forms/Input.tsx";
import Button from "ui/Button.tsx";

import Logo from "assets/Logo.png"
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [anime, setAnime] = useState(false)


    const navigate = useNavigate()
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const onButtonClick = () => {
        console.log("Welcome!")
    }

    const handleClick = () => {
        setAnime(true)
        setTimeout(() => {
            navigate("/reset")
        }, 1000);
    }

    return (
        <div className={classes.login}>
            <div className={classes.login__background}/>
            <aside className={classes.login__aside}>
                <img src={Logo} alt=""/>
                <div className={`${classes["login__form"]} ${anime && classes["login__form--anime"]}`}>
                    <h1 className={classes.header}>Sign in</h1>
                    <Input type={"text"} error={false}
                           placeholder={"Login"} value={name}
                           onChange={handleNameChange}></Input>
                    <Input type={"password"} error={false}
                           placeholder={"Password"} value={password}
                           onChange={handlePasswordChange}></Input>
                    <Button className={classes.btn} type={"submit"} children={"Sign in"} onClick={onButtonClick}/>
                    <div className={classes.text}>
                        <span>Don't remember password?</span>
                        <br/>
                        <a onClick={handleClick}>Reset here</a>
                    </div>
                </div>
                <span className={classes["footer-text"]}>
                    2024 &copy; Green Comp.
                </span>
            </aside>
        </div>)
}

export default Login