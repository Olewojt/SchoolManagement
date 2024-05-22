import React, { useEffect, useState, useRef, ReactNode } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import DropdownItem from "./DropdownItem";
import classes from "./Dropdown.module.scss";

interface DropdownProps {
    buttonText: string;
    items: { label: ReactNode; checked?: boolean }[];
    isCheckbox?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, items, isCheckbox = false }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [dropdownItems, setDropdownItems] = useState(items);
    const [selectedText, setSelectedText] = useState<string>(buttonText);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setOpen((open) => !open);
    };

    const handleItemClick = (index: number, checked?: boolean) => {
        if (isCheckbox && checked !== undefined) {
            const newItems = [...dropdownItems];
            newItems[index].checked = checked;
            setDropdownItems(newItems);
        } else {
            setSelectedText(dropdownItems[index].label as string);
            setOpen(false);
        }
    };

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    }, [dropdownRef]);

    return (
        <div ref={dropdownRef} className={classes.dropdown}>
            <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
                {selectedText}
            </DropdownButton>
            {open && (
                <DropdownContent ref={contentRef} open={open}>
                    {dropdownItems.map((item, index) => (
                        <DropdownItem
                            key={index}
                            checked={item.checked}
                            onClick={(checked) => handleItemClick(index, checked)}
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
