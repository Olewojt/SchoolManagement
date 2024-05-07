import React, {ChangeEvent, FormEvent, useState} from "react";
import classes from "./Login.module.scss"

import Input from "forms/Input.tsx";
import Button from "ui/Button/Button.tsx";

import {Logo} from "assets/icons/Icon.tsx";
import {useNavigate} from "react-router-dom";
import axiosClient from "../../axios-client.tsx";
import {useDispatch} from "react-redux";
import {setLoggedInUser} from "state/auth/authSlice.tsx";

const Login: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        password: ""
    })
    const [anime, setAnime] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if ((form.name === "admin" && form.password === "admin")
            || (form.name === "student" && form.password === "student")
            || (form.name === "teacher" && form.password === "teacher")) {
            dispatch(setLoggedInUser(form.name));
            navigate("/home", {replace: true});
            const payload = {
                email: "dsadas@mail.com",
                password: "dsadsacxzx",
                personalInfoDTO: null
            };
            axiosClient.post('/register', payload)
                .then(r => console.log(r))
                .catch(err => {
                    console.log(err)
                })
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

    return (
        <div className={classes.login}>
            <div className={classes.login__background}>
                <h1 style={{background: "rgba(0, 0, 0, 0.7)"}}>Login: admin<br/> Password: admin
                </h1> {/*TODO: do testow, bedzie trzeba i tak reduxa ogarnac*/}
            </div>
            <aside className={classes.login__aside}>
                <Logo className={classes.logo}/>
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
