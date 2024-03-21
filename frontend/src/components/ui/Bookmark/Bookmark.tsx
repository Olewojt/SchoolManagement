import {Link, LinkProps} from "react-router-dom";

import classes from "./Bookmark.module.scss";

interface BookmarkProps extends LinkProps {
    svgIcon: React.ReactNode;
}
const Bookmark = (props: BookmarkProps) => {
    return(
        <Link to={props.to} className={classes.bookmark}>
            <span>{props.children}</span>
            {props.svgIcon}
        </Link>
    )
}

export default Bookmark;