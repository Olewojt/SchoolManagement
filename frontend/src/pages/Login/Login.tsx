import React, {ChangeEvent, FormEvent, useState} from "react";
import classes from "./Login.module.scss"

import Input from "forms/Input.tsx";
import Button from "ui/Button/Button.tsx";

import Logo from "../../assets/images/Logo.png"
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        password: ""
    })
    const [anime, setAnime] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (form.name === "admin" && form.password === "admin") {
            navigate("/home", {replace: true});
        } else {
            setError(true)
        }
    }

    const handleClick = () => {
        setAnime(true)
        setTimeout(() => {
            navigate("/reset")
        }, 1000);
    }

    // sprawdzic czy jest localStorage ustawione
    // jesli nie to ustawic na default light,
    // jesli jest to pobrac to co trzeba

    return (
        <div className={classes.login}>
            <div className={classes.login__background}>
                <h1 style={{background: "rgba(0, 0, 0, 0.7)"}}>Login: admin<br/> Password: admin
                </h1> {/*TODO: do testow, bedzie trzeba i tak reduxa ogarnac*/}
            </div>
            <aside className={classes.login__aside}>
                <img src={Logo} alt=""/>
                <div className={`${classes["login__form"]} ${anime && classes["login__form--anime"]}`}>
                    <h1 className={classes.header}>Sign in</h1>
                    {error && <p className={classes.error}>Error (taki do poprawy)</p>}
                    <form onSubmit={onSubmit} className={classes.form}>
                        <Input type={"text"}
                               placeholder={"Login"}
                               onChange={handleForm}
                               name="name"
                               className={classes.form__input}
                        ></Input>
                        <Input type={"password"}
                               placeholder={"Password"}
                               onChange={handleForm}
                               name="password"
                               className={classes.form__input}></Input>
                        <Button className={classes.btn} type={"submit"} children={"Sign in"}/>
                    </form>
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