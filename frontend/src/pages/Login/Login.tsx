import React, {ChangeEvent, useState} from "react";
import classes from "./Login.module.scss"

import Input from "forms/Input.tsx";
import Button from "ui/Button.tsx";

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

    return (<div className={classes.login}>
        <div className={classes.login__form}>
            <h1 className={classes.header}>Sign in</h1>
            <span className={classes.text}>Don't remember password?</span>
            <a className={classes.subtext}>Reset here</a>
            <Input type={"text"} error={false} width={10} height={1.5}
                   placeholder={"Login"} value={name}
                   onChange={handleNameChange}></Input>
            <Input type={"password"} error={false} width={10} height={1.5}
                   placeholder={"Password"} value={password}
                   onChange={handlePasswordChange}></Input>
            <Button type={"submit"} children={"Sign in"} onClick={onButtonClick}/>
        </div>
    </div>)
}

export default Login