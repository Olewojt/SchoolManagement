import classes from "./Sidebar.module.scss"
import Bookmark from "ui/Bookmark/Bookmark.tsx";
import ProfileBookmark from "ui/Bookmark/ProfileBookmark.tsx";
import ProfileImg from "assets/images/Profile.png";
import {LogoShort, LogoutIcon, NotesIcon, ReportIcon, TasksIcon, HomeIcon} from "assets/icons/Icon.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";

const Sidebar = () => {
    const user = useSelector((state: RootState) => state.login.loggedInUser);

    return (
        <aside className={classes.sidebar}>
            <div className={classes.sidebar__title}>
                <LogoShort className={classes.logo}/>
                <h1>Logged for {user}</h1>
            </div>
            <div className={classes.sidebar__bookmarks}>
                <Bookmark to="/home" svgIcon={<HomeIcon/>}>Home</Bookmark>
                <Bookmark to="/tasks" svgIcon={<TasksIcon/>}>Tasks</Bookmark>
                <Bookmark to="/grades" svgIcon={<NotesIcon/>}>Grades</Bookmark>
                <Bookmark to="/reports" svgIcon={<ReportIcon/>}>Reports</Bookmark>
            </div>
            <div className={classes.sidebar__profile}>
                <Bookmark to="/" svgIcon={<LogoutIcon/>}>Logout</Bookmark>
                <ProfileBookmark src={ProfileImg} to="/config">David Jasper</ProfileBookmark>
            </div>
        </aside>
    )
}

export default Sidebar;