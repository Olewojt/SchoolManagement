import { Link, LinkProps, useLocation } from "react-router-dom";
import classes from "./Bookmark.module.scss";
import { useEffect, useState } from "react";

interface BookmarkProps extends LinkProps {
    svgIcon: React.ReactNode;
}

const Bookmark = (props: BookmarkProps) => {
    const location = useLocation();


    const isActive = location.pathname === props.to;

    return (
        <div className={isActive ? classes.bookmark__active : classes.bookmark__anime}>
            <Link
                to={props.to}
                className={classes.bookmark}
                replace={true}
            >
                <span>{props.children}</span>
                {props.svgIcon}
            </Link>
        </div>
    );
};

export default Bookmark;
