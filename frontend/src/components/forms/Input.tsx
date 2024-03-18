import {ChangeEvent, react} from "react";
import classes from "./Input.module.css"
interface InputProps {
    type: 'text' | 'number' | 'email' | 'password',
    placeholder: string,
    value: string | number,
    error: boolean,
    width: number,
    height: number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Input = (props: InputProps) => {
    const style = {
        width: `${props.width}rem`,
        height: `${props.height}rem`
    }

    return (
      <>
          <input type={props.type} value={props.value} placeholder={props.placeholder}
                 style={style} onChange={props.onChange} />
          {props.error && <p className={classes.error}>Error</p>}
      </>
    );
}

export default Input;
