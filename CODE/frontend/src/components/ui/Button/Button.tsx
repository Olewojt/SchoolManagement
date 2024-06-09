import classes from "./Button.module.scss"

interface ButtonProps {
    children: string,
    onClick?: any,
    type: "button" | "submit" | "reset" | undefined
    className?: string
    disabled?:boolean
}

const Button = (props: ButtonProps) => {
    return (
        <button type={props.type} onClick={props.onClick}
                className={`${classes.btn} ${props.className}`}
                disabled={props.disabled}
        >{props.children}</button>
    )
}

export default Button