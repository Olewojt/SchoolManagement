import React, {ChangeEvent, useState} from "react";
import classes from "./Login.module.scss"

import Input from "forms/Input.tsx";
import Button from "ui/Button.tsx";

import Logo from "assets/Logo.png"

const Login: React.FC = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const onButtonClick = () => {
        console.log("Welcome!")
    }

    return (
        <div className={classes.login}>
            <div className={classes.login__background}/>
            <aside className={classes.login__aside}>
                <img src={Logo} alt=""/>
                <div className={classes.login__form}>
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
                        <br />
                        <a>Reset here</a>
                    </div>
                </div>
            </aside>
        </div>)
}

export default Login