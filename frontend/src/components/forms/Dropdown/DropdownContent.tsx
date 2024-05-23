import React, { forwardRef, ReactNode } from "react";
import classes from "./DropdownContent.module.scss";

interface DropdownContentProps {
    children: ReactNode;
    open: boolean;
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
    (props, ref) => {
        const { children, open, searchValue, setSearchValue } = props;

        return (
            <div
                className={`${classes["dropdown-content"]} ${open ? classes["content-open"] : ""}`}
                ref={ref}
            >
                <input
                    type="text"
                    className={classes.searchInput}
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {children}
            </div>
        );
    }
);

export default DropdownContent;
