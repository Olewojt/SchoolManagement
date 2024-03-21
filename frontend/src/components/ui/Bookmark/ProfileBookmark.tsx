import classes from "ui/Bookmark/Bookmark.module.scss";
import {Link, LinkProps} from "react-router-dom";
import SettingsIcon from "assets/icons/Icon.tsx";

interface ProfileProps extends LinkProps{
    src: string
}

const ProfileBookmark = (props: ProfileProps) => {
    return (
        <div>
            <img src={props.src} />
            <span>{props.children}</span>
            <Link to={props.to} className={classes.bookmark__profile}>
                <SettingsIcon />
            </Link>
        </div>
    )
}

export default ProfileBookmark;