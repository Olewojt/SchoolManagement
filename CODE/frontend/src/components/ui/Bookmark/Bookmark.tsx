import { Link, LinkProps, useLocation } from "react-router-dom";
import classes from "./Bookmark.module.scss";
import {MouseEventHandler} from "react";

interface BookmarkProps extends LinkProps {
    svgIcon: React.ReactNode;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    canActive?: boolean
}

const Bookmark = (props: BookmarkProps) => {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const canActive = props.canActive !== false

    return (
        <div className={isActive && canActive ? classes.bookmark__active : classes.bookmark__anime}>
            <Link
                to={props.to}
                className={classes.bookmark}
                replace={true}
                onClick={props.onClick}
            >
                <span>{props.children}</span>
                {props.svgIcon}
            </Link>
        </div>
    );
};

export default Bookmark;
