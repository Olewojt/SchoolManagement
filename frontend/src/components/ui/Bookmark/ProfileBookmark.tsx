import classes from "ui/Bookmark/Bookmark.module.scss";
import {Link, LinkProps} from "react-router-dom";
import SettingsIcon from "assets/icons/Icon.tsx";

interface ProfileProps extends LinkProps {
    src: string
}

const ProfileBookmark = (props: ProfileProps) => {
    return (
        <div className={classes.profile}>
            <div className={classes.profile__data}>
                <img src={props.src}/>
                <span>{props.children}</span>
            </div>
            <Link to={props.to} className={classes.profile__icon}>
                <SettingsIcon/>
            </Link>
        </div>
    )
}

export default ProfileBookmark;