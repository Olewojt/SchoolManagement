import classes from "./SelectButton.module.scss";
import {GroupIcon, SingleIcon} from "assets/icons/Icon.tsx";

interface ButtonProps {
    children?: string;
    onClick?: () => void;
    group: boolean;
}

const SelectButton = (props: ButtonProps) => {
    return (
        <button
            type="button"
            className={classes.btn}
            onClick={props.onClick}
        >
            {props.group ? (
                <>
                    <GroupIcon/>
                    <span>Group project</span>
                </>
            ) : (
                <>
                    <SingleIcon/>
                    <span>Single project</span>
                </>
            )}
        </button>
    );
}

export default SelectButton;
