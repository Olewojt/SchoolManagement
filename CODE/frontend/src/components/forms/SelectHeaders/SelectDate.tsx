import React, {useState} from "react";
import expand from 'assets/icons/expand.svg'
import collapse from 'assets/icons/collapse.svg'
import baseClasses from './Select.module.scss';
import classes from './SelectDate.module.scss';
import {useClickOutside} from "hooks/useClickOutside.tsx";

interface SelectProps {
    name: string;
    fromDate: string;
    toDate: string;
    handleFromDateChange: React.ChangeEventHandler<HTMLInputElement>;
    handleToDateChange: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

export function currentDate(offset?: number): string {
    const date = new Date();

    if (offset) {
        // Offset in days
        date.setDate(date.getDate() + offset);
    }

    const year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    return `${year}-${month}-${day}`;
}

const SelectDate: React.FC<SelectProps> = (props: SelectProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const dropdownRef = useClickOutside(() => setIsExpanded(false));

    const toggleExpansion = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div ref={dropdownRef} className={baseClasses.select}>
            <div className={`${baseClasses.select__content} ${props.className}`} onClick={toggleExpansion}>
                <h3>{props.name}</h3>
                <img src={isExpanded ? collapse : expand} alt={isExpanded ? "collapse-icon" : "expand-icon"} />
            </div>
            {isExpanded && (
                <div className={`${baseClasses.expanded__content} ${classes.expanded__content}`}>
                    <label>From: </label>
                    <input
                        type="date"
                        name="from"
                        value={props.fromDate}
                        onChange={props.handleFromDateChange}
                        max={currentDate()}
                    />
                    <label>To: </label>
                    <input
                        type="date"
                        name="to"
                        value={props.toDate}
                        onChange={props.handleToDateChange}
                        max={currentDate()}
                    />
                </div>
            )}
        </div>
    );
};

export default SelectDate;