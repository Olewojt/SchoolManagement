import React, {ChangeEvent, FormEvent, useState} from "react";
import classes from "./Login.module.scss"

import Input from "forms/Input.tsx";
import Button from "ui/Button/Button.tsx";

import {Logo} from "assets/icons/Icon.tsx";
import {useNavigate} from "react-router-dom";
import {login} from "../../axios-client.tsx";
import {getUserData} from "api/User.tsx";
import {useDispatch} from "react-redux";
import {setLoggedInUser} from "state/auth/authSlice.tsx";
import {setUserData} from "state/user/userDataSlice.tsx";

const Login: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        password: ""
    })

    const [anime, setAnime] = useState(false)
    const [error, setError] = useState<string>("")

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const payload = {
            email: form.name,
            password: form.password
        }

        if ((form.name === "admin" && form.password === "admin")
            || (form.name === "student" && form.password === "student")
            || (form.name === "teacher" && form.password === "teacher")
            || (form.name === "parent" && form.password === "parent")) {

            switch (form.name) {
                case "admin":
                    payload.email = "admin@example.com"
                    break

                case "teacher":
                    payload.email = "bob.brown@example.com"
                    break

                case "student":
                    payload.email = "john.doe@example.com"
                    break

                case "parent":
                    payload.email = "parent@example.com"
                    break

                default:
                    payload.email = "admin@example.com"
            }

            payload.password = "password123"
        }

        try {
            if (form.name === "" || form.password === "") {
                setError("Please fill in the fields correctly <3");
                return;
            } else {
                setError("");
            }

            const user = await login(payload);
            dispatch(setLoggedInUser(user));

            const userData = await getUserData(user.id);
            dispatch(setUserData(userData));

        } catch (error) {
            setError("Check if the provided data is correct.")
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
            <div className={classes.login__background}></div>
            <aside className={classes.login__aside}>
                <Logo className={classes.logo}/>
                <div className={`${classes["login__form"]} ${anime && classes["login__form--anime"]}`}>
                    <h1 className={classes.header}>Sign in</h1>
                    <p className={classes.error}>{error}</p>
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