import classes from "./TextArea.module.scss"

interface TextAreaProps {
    placeholder: string,
    name?: string,
    value?: string

    className?: string

    label?: string
}

const TextArea = (props: TextAreaProps) => {
    return (
        <>
            {props.label && <h2>{props.label}</h2>}
            <textarea placeholder={props.placeholder} className={`${classes.input} ${props.className}`}
                      name={props.name} />
        </>
    );
}

export default TextArea
