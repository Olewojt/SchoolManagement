import classes from "./Sidebar.module.scss"
import Logo from "assets/images/LogoShort.png"
import Bookmark from "ui/Bookmark/Bookmark.tsx";
import ProfileBookmark from "ui/Bookmark/ProfileBookmark.tsx";
import ProfileImg from "assets/images/Profile.png";
import {LogoutIcon, NotesIcon, ReportIcon, TasksIcon} from "assets/icons/Icon.tsx";

const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
            <div className={classes.sidebar__title}>
                <img src={Logo} alt=""/>
                <h1>Class 5C</h1>
            </div>
            <div className={classes.sidebar__bookmarks}>
                <Bookmark to="#" svgIcon={<TasksIcon/>}>Tasks</Bookmark>
                <Bookmark to="/grades" svgIcon={<NotesIcon/>}>Grades</Bookmark>
                <Bookmark to="#" svgIcon={<ReportIcon/>}>Reports</Bookmark>
            </div>
            <div className={classes.sidebar__profile}>
                <Bookmark to="/" svgIcon={<LogoutIcon/>}>Logout</Bookmark>
                <ProfileBookmark src={ProfileImg} to="/config">David Jasper</ProfileBookmark>
            </div>
        </aside>
    )
}

export default Sidebar;