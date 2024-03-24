import React, { useState } from "react";
import expand from 'assets/icons/expand.svg'
import collapse from 'assets/icons/collapse.svg'
import classes from './Header.module.scss'

interface HeaderProps {
    value: string;
    children?: React.ReactNode;
    className?: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const [isExpanded, setIsExpanded] = useState(true)

    const toggleExpansion = () => {
        setIsExpanded(prev => !prev);
    }

    return (
        <div className={`${classes.header} ${isExpanded && classes.expanded}`}>
            <div className={`${classes.header__content} ${props.className}`}>
                <h3>{props.value}</h3>
                <button className={classes.button} onClick={toggleExpansion}>
                    {isExpanded ? (
                        <img src={collapse} alt="collapse-icon" />
                    ) : (
                        <img src={expand} alt="expand-icon" />
                    )}
                </button>
            </div>
            {isExpanded && (
                <div className={classes.expanded__content}>
                    {props.children}
                </div>
            )}
        </div>
    )
}

export default Header;