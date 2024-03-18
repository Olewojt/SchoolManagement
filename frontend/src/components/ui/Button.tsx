import {MouseEventHandler} from "react";

interface ButtonProps {
    children: string,
    onClick: MouseEventHandler,
    type: "button" | "submit" | "reset" | undefined
}
const Button = (props: ButtonProps) => {
    return (
        <button type={props.type} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button