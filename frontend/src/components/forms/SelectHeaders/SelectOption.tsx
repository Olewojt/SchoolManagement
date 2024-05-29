import React, { useState } from "react";
import expand from 'assets/icons/expand.svg';
import collapse from 'assets/icons/collapse.svg';
import baseClasses from './Select.module.scss';
import classes from './SelectOption.module.scss';
import {useClickOutside} from "hooks/useClickOutside.tsx";

interface SelectProps {
    options: Array<string>;
    name: string;
    selected: string;
    onOptionChange: (selected: string) => void;
    className?: string;
}

const SelectOption: React.FC<SelectProps> = (props: SelectProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const dropdownRef = useClickOutside(() => setIsExpanded(false));

    const toggleExpansion = () => {
        setIsExpanded(prev => !prev);
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onOptionChange(event.target.value);
    };

    return (
        <div ref={dropdownRef} className={baseClasses.select}>
            <div className={`${baseClasses.select__content} ${classes.select__content} ${props.className}`} onClick={toggleExpansion}>
                <h3>{props.name}</h3>
                <img src={isExpanded ? collapse : expand} alt={isExpanded ? "collapse-icon" : "expand-icon"} />
            </div>
            {isExpanded && (
                <div className={`${baseClasses.expanded__content} ${classes.expanded__content}`}>
                    {props.options.map((entry, index) => (
                        <div className={baseClasses.expanded__content__element} key={index}>
                            <label>
                                {entry}
                                <input
                                    type="radio"
                                    name={props.name}
                                    value={entry}
                                    checked={entry === props.selected}
                                    onChange={handleOptionChange}
                                />
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectOption;
