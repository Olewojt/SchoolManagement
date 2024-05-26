import classes from "ui/Bookmark/Bookmark.module.scss";
import {Link, LinkProps} from "react-router-dom";
import SettingsIcon from "assets/icons/Icon.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";

interface ProfileProps extends LinkProps {
    src: string
}

const ProfileBookmark = (props: ProfileProps) => {
    const userData = useSelector((state: RootState) => state.userData);

    return (
        <div className={classes.profile}>
            <div className={classes.profile__data}>
                <img src={props.src}/>
                <span>{userData.personalInfo.firstName} {userData.personalInfo.lastName}</span>
            </div>
            <Link to={props.to} className={classes.profile__icon}>
                <SettingsIcon/>
            </Link>
        </div>
    )
}

export default ProfileBookmark;