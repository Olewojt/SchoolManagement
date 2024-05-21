import React, { useEffect, useState, useRef, ReactNode } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import classes from "./Dropdown.module.scss"

interface DropdownProps {
    buttonText: string;
    content: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, content }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [dropdownTop, setDropdownTop] = useState<number | null>(0);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        if (!open && buttonRef.current && contentRef.current) {
            const spaceRemaining =
                window.innerHeight -
                buttonRef.current.getBoundingClientRect().bottom;
            const contentHeight = contentRef.current.clientHeight;

            const topPosition =
                spaceRemaining > contentHeight
                    ? null
                    : -(contentHeight - spaceRemaining); // move up by height clipped by window
            setDropdownTop(topPosition);
        }

        setOpen((open) => !open);
    };

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
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
                {buttonText}
            </DropdownButton>
            {open && (
                <DropdownContent ref={contentRef} open={open}>
                    {content}
                </DropdownContent>
            )}
        </div>
    );
};

export default Dropdown;
