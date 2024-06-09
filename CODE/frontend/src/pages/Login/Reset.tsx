import React, { useState } from "react";
import { Logo } from "assets/icons/Icon.tsx";
import { useNavigate } from "react-router-dom";
import { sendVerificationEmail, verifyOTP, changePassword } from "api/ResetPassword.tsx";
import Input from "forms/Input.tsx";
import Button from "ui/Button/Button.tsx";
import classes from "./Login.module.scss";

const Reset: React.FC = () => {
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [isSendingEmail, setIsSendingEmail] = useState(false);
    const [anime, setAnime] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordChanged, setPasswordChanged] = useState(false);
    const navigate = useNavigate();

    const handleSendVerificationEmail = async (email: string) => {
        setIsSendingEmail(true); // Ustawienie stanu na true przed wysłaniem e-maila
        try {
            await sendVerificationEmail(email);
            setEmailSent(true);
            setError(null);
            console.log("Email sent successfully!");
        } catch (error) {
            setError("Bad email my little guy");
            console.error("Error sending email:", error);
        } finally {
            setIsSendingEmail(false);
        }
    };

    const handleSubmitVerificationCode = async () => {
        try {
            await verifyOTP(email, parseInt(verificationCode));
            console.log("Verification code is valid!");
            setShowPasswordForm(true);
            setError(null);
        } catch (error) {
            setError("Invalid verification code");
            console.error("Error verifying code:", error);
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
    };

    const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await changePassword(email, password, repeatPassword);
            setPasswordChanged(true); // Ustawienie stanu na true po zmianie hasła
            setError(null);
        } catch (error) {
            setError("Passwords are different");
            console.error("Error changing password:", error);
        }
    };

    const handleClick = () => {
        setAnime(true);
        setTimeout(() => {
            navigate("/");
        }, 1000);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerificationCode(e.target.value);
    };

    const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSendVerificationEmail(email);
    };

    const handleVerificationCodeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmitVerificationCode();
    };

    return (
        <div className={classes.login}>
            <div className={classes.login__background} />
            <aside className={classes.login__aside}>
                <Logo className={classes.logo} />
                <div className={`${classes["reset__form"]} ${anime && classes["reset__form--anime"]}`}>
                    <h1 className={classes.header}>Reset Password</h1>
                    {error && <span className={classes.form__error}>{error}</span>}
                    {!emailSent && (
                        <form onSubmit={handleEmailSubmit} className={classes.form}>
                            <Input
                                type={"email"}
                                value={email}
                                placeholder={"Email"}
                                onChange={handleEmailChange}
                                className={classes.form__input}
                            />
                            <Button className={classes.btn} type={"submit"} disabled={isSendingEmail}>
                                {isSendingEmail ? "Sending Email..." : "Reset Password"}
                            </Button>
                        </form>
                    )}
                    {emailSent && !showPasswordForm && (
                        <form onSubmit={handleVerificationCodeSubmit} className={classes.form}>
                            <Input
                                type={"number"}
                                value={verificationCode}
                                placeholder={"Verification Code"}
                                onChange={handleVerificationCodeChange}
                                className={classes.form__input}
                            />
                            <Button className={classes.btn} type={"submit"}>
                                Verify
                            </Button>
                        </form>
                    )}
                    {showPasswordForm && !passwordChanged && ( // Warunek dla wyświetlenia formularza zmiany hasła
                        <form onSubmit={handlePasswordSubmit} className={classes.form}>
                            <Input
                                type={"password"}
                                value={password}
                                placeholder={"New Password"}
                                onChange={handlePasswordChange}
                                className={classes.form__input}
                            />
                            <Input
                                type={"password"}
                                value={repeatPassword}
                                placeholder={"Repeat New Password"}
                                onChange={handleRepeatPasswordChange}
                                className={classes.form__input}
                            />
                            <Button className={classes.btn} type={"submit"}>
                                Change Password
                            </Button>
                        </form>
                    )}
                    {passwordChanged && (
                        <div className={classes["changed-text"]}>
                            Password changed successfully!
                            <br/>
                        </div>

                    )}
                    <a onClick={handleClick}>Sign up</a>
                </div>
                <span className={classes["footer-text"]}>2024 &copy; Green Comp.</span>
            </aside>
        </div>
    );
};

export default Reset;
