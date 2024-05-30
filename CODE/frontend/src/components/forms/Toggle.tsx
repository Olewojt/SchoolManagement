import classes from "./Toggle.module.scss"
import {ChangeEvent} from "react";

interface ToggleProps {
    id: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    checked: boolean,
    labelText: string
}

export const Toggle = (props: ToggleProps) => {
    return (
        <div className={classes.toggle}>
            <input
                type="checkbox"
                id={props.id}
                className={classes.toggle__input}
                onChange={props.onChange}
                checked={props.checked}
            />
            <label htmlFor={props.id}> {props.labelText} </label>
        </div>
    )
}