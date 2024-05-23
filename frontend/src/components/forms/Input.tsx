import {ChangeEvent} from "react";
import classes from "./Input.module.scss"

interface InputProps {
    type: 'text' | 'number' | 'email' | 'password' | 'date',
    placeholder: string,
    name?: string,
    value?: string

    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    className?: string

    label?: string
}

const Input = (props: InputProps) => {
    return (
        <div className={props.className}>
            {props.label && <h2>{props.label}</h2>}
            <input type={props.type} placeholder={props.placeholder}
                   onChange={props.onChange} className={classes.input} name={props.name}/>
        </div>
    );
}

export default Input
