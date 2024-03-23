import React, {useState} from "react";
import expand from 'assets/icons/expand.svg'
import collapse from 'assets/icons/collapse.svg'
import classes from './Header.module.scss'

interface HeaderProps {
    value: string,
    children?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={`${isExpanded ? `${classes.header} ${classes.expanded}` : classes.header}`}>
            <div className={classes.header__content}>
                <h3>{props.value}</h3>
                <button className={classes.button} onClick={toggleExpansion}>{isExpanded ? (
                    <>
                        <img src={collapse} alt="expand-icon"/>
                    </>
                ) : (
                    <>
                        <img src={expand} alt="expand-icon"/>
                    </>
                )}</button>
            </div>
            {isExpanded && (
                <div className={`${classes['expanded']} ${classes['expanded__content']}`}>
                    {props.children && React.Children.map(props.children, child => {
                        // Pass props to each child component
                        return React.cloneElement(child as React.ReactElement<any>);
                    })}
                </div>
            )}
        </div>
    )
}

export default Header;