import React, {ChangeEvent, useState} from "react";
import classes from "./Login.module.css"

import Input from "forms/Input.tsx";

const Login: React.FC = () => {
    const [name, setName] = useState("")

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (<div className={classes.login}>
        <div className={classes.login__form}>
            <h1 className={classes.header}>Sign in</h1>
            <span className={classes.text}>Don't remember password?</span>
            <a className={classes.subtext}>Reset here</a>
            <Input type={"text"} error={false} width={10} height={1.5}
                   placeholder={"Login here"} value={name}
                   onChange={handleNameChange}></Input>
        </div>

    </div>)
}

export default Login