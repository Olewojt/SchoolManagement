import {MouseEventHandler} from "react";
import classes from "./AddButton.module.scss";
interface ButtonProps {
    children: string,
    onClick?: MouseEventHandler,
    type: "button" | "submit" | "reset" | undefined
    className?: string
}
const AddButton = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className={`${classes.btn} ${classes}`}>{props.children}</button>
    )
}
export default AddButton