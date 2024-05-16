import classes from "./Sidebar.module.scss"
import Bookmark from "ui/Bookmark/Bookmark.tsx";
import ProfileBookmark from "ui/Bookmark/ProfileBookmark.tsx";
import ProfileStudent from "assets/images/Profile_student.png";
import ProfileAdmin from "assets/images/Profile_admin.png";
import ProfileTeacher from "assets/images/Profile_teacher.png";
import {LogoShort, LogoutIcon, NotesIcon, ReportIcon, TasksIcon, HomeIcon, ManageIcon} from "assets/icons/Icon.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";

const Sidebar = () => {
    const user = useSelector((state: RootState) => state.login.loggedInUser);
    const isStudent: boolean = (user == "student");
    const isAdmin: boolean = (user == "admin");
    const isTeacher: boolean = (user == "teacher");
    const isParent: boolean = (user == "parent");

    return (
        <aside className={classes.sidebar}>
            <div className={classes.sidebar__title}>
                <LogoShort className={classes.logo}/>
                <h1>Logged as {user}</h1>
            </div>
            <div className={classes.sidebar__bookmarks}>
                <Bookmark to="/home" svgIcon={<HomeIcon/>}>Home</Bookmark>
                { (isStudent || isTeacher) && <Bookmark to="/tasks" svgIcon={<TasksIcon/>}>Tasks</Bookmark>}
                { (isStudent || isTeacher || isParent) && <Bookmark to="/grades" svgIcon={<NotesIcon/>}>Grades</Bookmark>}
                { isAdmin && <Bookmark to="/manage" svgIcon={<ManageIcon/>}>Manage</Bookmark>}
                <Bookmark to="/reports" svgIcon={<ReportIcon/>}>Reports</Bookmark>
            </div>
            <div className={classes.sidebar__profile}>
                <Bookmark to="/" svgIcon={<LogoutIcon/>}>Logout</Bookmark>
                {isStudent && <ProfileBookmark src={ProfileStudent} to="/config">David Jasper</ProfileBookmark>}
                {isAdmin && <ProfileBookmark src={ProfileAdmin} to="/config">Cat</ProfileBookmark>}
                {isTeacher && <ProfileBookmark src={ProfileTeacher} to="/config">Mr. Smith</ProfileBookmark>}
                {isParent && <ProfileBookmark src={ProfileAdmin} to="/config">Parentos</ProfileBookmark>}
            </div>
        </aside>
    )
}

export default Sidebar;