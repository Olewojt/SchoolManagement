import {ChangeEvent} from "react";
import classes from "./Input.module.scss"

interface InputProps {
    type: 'text' | 'number' | 'email' | 'password',
    placeholder: string,
    value: string | number,
    error: boolean,

    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    className?: string
}

const Input = (props: InputProps) => {
    return (
        <>
            <input type={props.type} value={props.value} placeholder={props.placeholder}
                   onChange={props.onChange} className={`${classes.input} ${props.className}`}/>
            {props.error && <p className={classes.error}>Error</p>}
        </>
    );
}

export default Input
