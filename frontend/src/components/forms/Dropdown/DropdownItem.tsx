import React, {ReactNode} from "react";
import classes from "./DropdownItem.module.scss"
interface DropdownItemProps {
    onClick: () => void;
    children: ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
    return (
        <div className={classes["dropdown-item"]} onClick={onClick}>
            {children}
        </div>
    );
};

export default DropdownItem;
