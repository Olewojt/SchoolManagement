import classes from "./TextArea.module.scss"
import {ChangeEvent} from "react";

interface TextAreaProps {
    placeholder: string,
    name?: string,
    value?: string

    className?: string
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void,

    label?: string
}

const TextArea = (props: TextAreaProps) => {
    return (
        <>
            {props.label && <h2>{props.label}</h2>}
            <textarea placeholder={props.placeholder} className={`${classes.input} ${props.className}`}
                      name={props.name} onChange={props.onChange} />
        </>
    );
}

export default TextArea
