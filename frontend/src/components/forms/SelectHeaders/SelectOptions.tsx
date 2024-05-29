import React, { useState } from "react";
import expand from 'assets/icons/expand.svg';
import collapse from 'assets/icons/collapse.svg';
import baseClasses from './Select.module.scss';
import classes from './SelectOptions.module.scss';
import {useClickOutside} from "hooks/useClickOutside.tsx";

interface SelectProps {
    options: Array<string>;
    name: string;
    checkedItems: { [key: string]: boolean };
    onCheckboxChange: (name: string) => void;
    className?: string;
}

const SelectOptions: React.FC<SelectProps> = (props: SelectProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const dropdownRef = useClickOutside(() => setIsExpanded(false));

    const toggleExpansion = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div ref={dropdownRef} className={baseClasses.select}>
            <div className={`${baseClasses.select__content} ${classes.select__content} ${props.className}`} onClick={toggleExpansion}>
                <h3>{props.name}</h3>
                <img src={isExpanded ? collapse : expand} alt={isExpanded ? "collapse-icon" : "expand-icon"} />
            </div>
            {isExpanded && (
                <div className={`${baseClasses.expanded__content} ${classes.expanded__content}`}>
                    {props.options.length > 0 ? (
                        props.options.map((entry: string, index) => (
                            <div className={baseClasses.expanded__content__element} key={index}>
                                <label>
                                    {entry}
                                    <input
                                        type="checkbox"
                                        checked={props.checkedItems[entry] || false}
                                        onChange={() => props.onCheckboxChange(entry)}
                                        name={entry}
                                    />
                                </label>
                            </div>
                        ))
                    ) : (
                        <div className={baseClasses.expanded__content__element}>
                            <label>NO DATA</label>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SelectOptions;
