import { forwardRef, ReactNode } from "react";
import classes from "./DropdownContent.module.scss";

interface DropdownContentProps {
    children: ReactNode;
    open: boolean;
    searchValue: string;
    setSearchValue: (value: string) => void;
    showSearch: boolean;
}

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
    ({ children, open, searchValue, setSearchValue, showSearch }, ref) => {
        return (
            <div
                className={`${classes["dropdown-content"]} ${open ? classes["content-open"] : ""}`}
                ref={ref}
            >
                {showSearch && (
                    <input
                        type="text"
                        className={classes.searchInput}
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                )}
                {children}
            </div>
        );
    }
);

export default DropdownContent;
