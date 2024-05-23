import React, { useEffect, useState, useRef, ReactNode } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import DropdownItem from "./DropdownItem";
import classes from "./Dropdown.module.scss";

interface DropdownProps {
    buttonText: string;
    items: { label: ReactNode; checked?: boolean }[];
    isCheckbox?: boolean;
    onSelectionChange?: (selected: any) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, items, isCheckbox = false, onSelectionChange }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [dropdownItems, setDropdownItems] = useState(items);
    const [searchValue, setSearchValue] = useState<string>("");

    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setOpen((open) => !open);
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

    const filteredItems = dropdownItems.map((item, index) => ({
        ...item,
        originalIndex: index, // Dodanie oryginalnych indeksów
    })).filter(item => {
        const label = item.label?.toString().toLowerCase();
        return label?.includes(searchValue.toLowerCase());
    });

    return (
        <div ref={dropdownRef} className={classes.dropdown}>
            <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
                {buttonText}
            </DropdownButton>
            {open && (
                <DropdownContent ref={contentRef} open={open} searchValue={searchValue} setSearchValue={setSearchValue}>
                    {filteredItems.map((item) => (
                        <DropdownItem
                            key={item.originalIndex} // Użycie oryginalnego indeksu jako klucza
                            checked={item.checked}
                            onClick={(checked) => handleItemClick(item.originalIndex, checked)} // Użycie oryginalnego indeksu do obsługi kliknięć
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
