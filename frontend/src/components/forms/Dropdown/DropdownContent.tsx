import { forwardRef, ReactNode } from "react";
import classes from "./DropdownContent.module.scss";

interface DropdownContentProps {
    children: ReactNode;
    open: boolean;
}

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
    (props, ref) => {
        const { children, open } = props;
        return (
            <div
                className={`${classes["dropdown-content"]} ${open ? classes["content-open"] : ""}`}
                ref={ref}
            >
                {children}
            </div>
        );
    }
);

export default DropdownContent;
