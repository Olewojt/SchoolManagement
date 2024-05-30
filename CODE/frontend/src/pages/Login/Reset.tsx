import React, {ChangeEvent, FormEvent, useState} from "react";
import classes from "./Login.module.scss"

import Input from "forms/Input.tsx";
import Button from "ui/Button/Button.tsx";

import {Logo} from "assets/icons/Icon.tsx"
import {useNavigate} from "react-router-dom";

const Reset: React.FC = () => {
    const [name, setName] = useState("")
    const [anime, setAnime] = useState(false)


    const navigate = useNavigate()
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
                <Logo className={classes.logo}/>
                <div className={`${classes["reset__form"]} ${anime && classes["reset__form--anime"]}`}>
                    <h1 className={classes.header}>Reset Password</h1>
                    <form onSubmit={onSubmit} className={classes.form}>
                        <Input type={"text"}
                               value={name}
                               placeholder={"Login"}
                               onChange={handleNameChange}
                               className={classes.form__input}></Input>
                        <Button className={classes.btn} type={"submit"} children={"Sign in"}/>
                    </form>
                    <div className={classes.text}>
                        <span>Remember yet?</span>
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

export default Reset