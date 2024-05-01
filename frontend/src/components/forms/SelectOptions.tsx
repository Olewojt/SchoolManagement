import React, { useState } from "react";
import expand from 'assets/icons/expand.svg'
import collapse from 'assets/icons/collapse.svg'
import baseClasses from './SelectOptions.module.scss';
import classes from './SelectOptions.module.scss'

export interface Subject {
    name: string
}

interface SelectProps {
    options: Array<Subject>;
    name: string;
    checkedItems: { [key: string]: boolean };
    onCheckboxChange: (name: string) => void;
    className?: string
}

const SelectOptions: React.FC<SelectProps> = (props: SelectProps) => {

    const [isExpanded, setIsExpanded] = useState(false)
    const toggleExpansion = () => {
        setIsExpanded(prev => !prev);
    }

    return (
        <div className={baseClasses.select}>
            <div className={`${baseClasses.select__content} ${classes.select__content} ${props.className}`} onClick={toggleExpansion}>
                <h3>{props.name}</h3>
                <img src={isExpanded ? collapse : expand} alt={isExpanded ? "collapse-icon" : "expand-icon"}/>
            </div>
            {isExpanded && (
                <div className={`${baseClasses.expanded__content} ${classes.expanded__content}`}>
                    {
                        props.options.map( (entry: Subject, index) =>
                            <div className={classes.expanded__content__checkbox} key={index}>
                                <label>
                                    {entry.name}
                                    <input
                                        type="checkbox"
                                        checked={props.checkedItems[entry.name] || false}
                                        onChange={() => props.onCheckboxChange(entry.name)}
                                        name={entry.name}
                                    />
                                </label>
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    )
}

export default SelectOptions;
