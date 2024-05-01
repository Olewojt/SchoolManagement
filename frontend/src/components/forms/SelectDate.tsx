import React, { useState } from "react";
import expand from 'assets/icons/expand.svg'
import collapse from 'assets/icons/collapse.svg'
import baseClasses from './SelectOptions.module.scss';
import classes from './SelectDate.module.scss';

interface SelectProps {
    name: string;
    className?: string
}

const SelectDate: React.FC<SelectProps> = (props: SelectProps) => {
    const currentDate = () => {
        const date = new Date();
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

    const [isExpanded, setIsExpanded] = useState(false);
    const [fromDate, setFromDate] = useState(currentDate());
    const [toDate, setToDate] = useState(currentDate());

    const toggleExpansion = () => {
        setIsExpanded(prev => !prev);
    }

    const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromDate(event.target.value);
    }

    const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDate(event.target.value);
    }

    return (
        <div className={baseClasses.select}>
            <div className={`${baseClasses.select__content} ${props.className}`} onClick={toggleExpansion}>
                <h3>{props.name}</h3>
                <img src={isExpanded ? collapse : expand} alt={isExpanded ? "collapse-icon" : "expand-icon"}/>
            </div>
            {isExpanded && (
                <div className={`${baseClasses.expanded__content} ${classes.expanded__content}`}>
                    <label>Od: </label>
                    <input type="date" name="from" value={fromDate} onChange={handleFromDateChange} max={currentDate()}></input>
                    <label>Do: </label>
                    <input type="date" name="to" value={toDate} onChange={handleToDateChange} max={currentDate()}></input>
                </div>
            )}
        </div>
    )
}

export default SelectDate;