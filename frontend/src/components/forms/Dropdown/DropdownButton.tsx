import { forwardRef, ReactNode } from "react";
import classes from "./DropdownButton.module.scss";
import { CollapseIcon, ExpandIcon } from "assets/icons/Icon.tsx";

interface DropdownButtonProps {
    toggle: () => void;
    open: boolean;
    children: ReactNode;
}

const DropdownButton = forwardRef<HTMLDivElement, DropdownButtonProps>(
    (props, ref) => {
        const { children, toggle, open } = props;

        return (
            <div
                onClick={toggle}
                className={`${classes["dropdown-btn"]} ${open ? classes["button-open"] : ""}`}
                ref={ref}
            >
                {children}
                <span className={classes["toggle-icon"]}>
                    {open ? <CollapseIcon /> : <ExpandIcon />}
                </span>
            </div>
        );
    }
);

export default DropdownButton;
