import {ChangeEvent} from "react";
import classes from "./Input.module.scss"

interface InputProps {
    type: 'text' | 'number' | 'email' | 'password',
    placeholder: string,
    error: boolean,
    name?: string,
    value?: string

    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    className?: string
}

const Input = (props: InputProps) => {
    return (
        <>
            <input type={props.type} placeholder={props.placeholder}
                   onChange={props.onChange} className={`${classes.input} ${props.className}`} name={props.name}/>
            {props.error && <p className={classes.error}>Error</p>}
        </>
    );
}

export default Input
