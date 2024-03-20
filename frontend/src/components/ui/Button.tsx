import {MouseEventHandler} from "react";
import classes from "./Button.module.scss"

interface ButtonProps {
    children: string,
    onClick?: MouseEventHandler,
    type: "button" | "submit" | "reset" | undefined
    className?: string
}
const Button = (props: ButtonProps) => {
    return (
        <button type={props.type} onClick={props.onClick} className={`${classes.btn} ${props.className}`}>{props.children}</button>
    )
}

export default Button