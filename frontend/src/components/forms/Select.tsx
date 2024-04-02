import React, { useState } from "react";
import expand from 'assets/icons/expand.svg'
import collapse from 'assets/icons/collapse.svg'
import classes from './Select.module.scss'

export interface Subject {
    name: string,
    display_name: string
}

interface SelectProps {
    options: Array<any>;
    name: string;
    children?: React.ReactNode;
    className?: string
}

const Select: React.FC<SelectProps> = (props: SelectProps) => {

    const [isExpanded, setIsExpanded] = useState(true)
    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
    const [selectAll, setSelectAll] = useState(false);


    const toggleExpansion = () => {
        setIsExpanded(prev => !prev);
    }

    const handleSelectAll = () => {
        const newCheckedItems: { [key: string]: boolean } = {};
        props.options.forEach(entry => {
            newCheckedItems[entry.name] = !selectAll;
        });
        setCheckedItems(newCheckedItems);
        setSelectAll(!selectAll);
    };


    const handleCheckboxChange = (name: string) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    };

    return (
        <div className={`${classes.select} ${isExpanded && classes.expanded}`}>
            <div className={`${classes.select__content} ${props.className}`} onClick={toggleExpansion}>
                <h3>{props.name}</h3>
                { isExpanded ? (
                    <img src={collapse} alt="collapse-icon" />
                ) : (
                    <img src={expand} alt="expand-icon"/>
                )
                }
            </div>
            {isExpanded && (
                <div className={classes.expanded__content}>
                    {
                        props.options.map( (entry: Subject) =>
                            <div className={classes.expanded__content__checkbox}>
                                <label>
                                    {entry.display_name}
                                    <input
                                        type="checkbox"
                                        checked={checkedItems[entry.name] || false}
                                        onChange={() => handleCheckboxChange(entry.name)}
                                        name={entry.name}
                                    />
                                </label>
                            </div>
                        )
                    }
                    <div className={classes.expanded__content__checkbox}>
                        <label>
                            Select All
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                            />
                        </label>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Select;