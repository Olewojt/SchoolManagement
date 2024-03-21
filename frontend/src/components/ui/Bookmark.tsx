import {Link, LinkProps} from "react-router-dom";

import classes from "./Bookmark.module.scss";
const Bookmark = (props: LinkProps) => {
    return(
        <Link to={props.to} className={classes.bookmark}>{props.children}</Link>
    )
}

export default Bookmark;