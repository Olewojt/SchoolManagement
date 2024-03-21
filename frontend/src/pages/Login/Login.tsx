    import React, {ChangeEvent, FormEvent, useState} from "react";
    import classes from "./Login.module.scss"

    import Input from "forms/Input.tsx";
    import Button from "ui/Button.tsx";

    import Logo from "../../assets/images/Logo.png"
    import {useNavigate} from "react-router-dom";

    const Login: React.FC = () => {
        const [form, setForm] = useState({
            name: "",
            password: ""
        })
        const [anime, setAnime] = useState(false)

        const navigate = useNavigate()

        const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
        const onSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
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
                        <form onSubmit={onSubmit} className={classes.form}>
                            <Input type={"text"} error={false}
                                   placeholder={"Login"}
                                   onChange={handleForm}
                                   name="name"
                                   className={classes.form__input}></Input>
                            <Input type={"password"} error={false}
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