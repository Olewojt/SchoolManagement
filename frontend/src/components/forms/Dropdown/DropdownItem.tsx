import React from "react";
import classes from "./DropdownItem.module.scss";

interface DropdownItemProps {
    onClick: (checked?: boolean) => void;
    children: React.ReactNode;
    isCheckbox?: boolean;
    checked?: boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick, isCheckbox = false, checked = false }) => {
    const handleClick = () => {
        if (isCheckbox) {
            onClick(!checked);
        } else {
            onClick();
        }
    };

    return (
        <div className={classes["dropdown-item"]} onClick={handleClick}>
            {isCheckbox && <input className={classes["dropdown-item__checkbox"]} type="checkbox" checked={checked} readOnly />}
            {children}
        </div>
    );
};

export default DropdownItem;
