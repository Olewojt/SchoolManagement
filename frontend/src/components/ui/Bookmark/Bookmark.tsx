import { Link, LinkProps } from "react-router-dom";
import classes from "./Bookmark.module.scss";
import { useEffect, useState } from "react";

interface BookmarkProps extends LinkProps {
    svgIcon: React.ReactNode;
}

const Bookmark = (props: BookmarkProps) => {
    const [anime, setAnime] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnime(true);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={anime ? classes.bookmark__anime : ""}>
            <Link to={props.to} className={classes.bookmark}>
                <span>{props.children}</span>
                {props.svgIcon}
            </Link>
        </div>
    );
};

export default Bookmark;
