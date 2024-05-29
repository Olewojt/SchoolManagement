import React, { useEffect, useState, useRef, ReactNode } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import DropdownItem from "./DropdownItem";
import classes from "./Dropdown.module.scss";
import {useClickOutside} from "hooks/useClickOutside.tsx";

interface DropdownProps {
    buttonText: string;
    items: { label: ReactNode; checked?: boolean }[];
    isCheckbox?: boolean;
    onSelectionChange?: (selected: any) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, items, isCheckbox = false, onSelectionChange, label, disabled, className }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [dropdownItems, setDropdownItems] = useState(items);
    const [searchValue, setSearchValue] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(false);

    const dropdownRef = useClickOutside(() => setOpen(false));
    const buttonRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setDropdownItems(items);
        setShowSearch(isCheckbox);
    }, [items]);

    const toggleDropdown = () => {
        if (!disabled) {
            setOpen((open) => !open);
        }
    };

    const handleItemClick = (originalIndex: number, checked?: boolean) => {
        if (isCheckbox && checked !== undefined) {
            const newItems = [...dropdownItems];
            newItems[originalIndex].checked = checked;
            setDropdownItems(newItems);
            onSelectionChange && onSelectionChange(newItems);
        } else {
            const selectedLabel = dropdownItems[originalIndex].label as string;
            setOpen(false);
            onSelectionChange && onSelectionChange(selectedLabel);
        }
    };

    const filteredItems = dropdownItems.map((item, index) => ({
        ...item,
        originalIndex: index,
    })).filter(item => {
        const label = item.label?.toString().toLowerCase();
        return label?.includes(searchValue.toLowerCase());
    });

    return (
        <div ref={dropdownRef} className={`${classes.dropdown} ${className} ${disabled ? classes.disabled : ""}`}>
            {label && <h2>{label}</h2>}
            <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open} disabled={disabled}>
                {buttonText}
            </DropdownButton>
            {open && !disabled && (
                <DropdownContent ref={contentRef} open={open} searchValue={searchValue} setSearchValue={setSearchValue} showSearch={showSearch}>
                    {filteredItems.map((item) => (
                        <DropdownItem
                            key={item.originalIndex}
                            checked={item.checked}
                            onClick={(checked) => handleItemClick(item.originalIndex, checked)}
                            isCheckbox={isCheckbox}
                        >
                            {item.label}
                        </DropdownItem>
                    ))}
                </DropdownContent>
            )}
        </div>
    );
};

export default Dropdown;
