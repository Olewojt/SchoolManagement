import classes from "./Sidebar.module.scss"
import Bookmark from "ui/Bookmark/Bookmark.tsx";
import ProfileBookmark from "ui/Bookmark/ProfileBookmark.tsx";
import ProfileStudent from "assets/images/Profile_student.png";
import ProfileAdmin from "assets/images/Profile_admin.png";
import ProfileTeacher from "assets/images/Profile_teacher.png";
import {HomeIcon, LogoShort, LogoutIcon, ManageIcon, NotesIcon, ReportIcon, TasksIcon} from "assets/icons/Icon.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {ADMIN, GUEST, PARENT, STUDENT, TEACHER} from "utilitiesconstants.tsx/";
import {removeToken} from "@/axios-client.tsx";
import {setLoggedInUser} from "state/auth/authSlice.tsx";

const Sidebar = () => {
    const user = useSelector((state: RootState) => state.login);
    const isStudent: boolean = (user.role == STUDENT);
    const isAdmin: boolean = (user.role == ADMIN);
    const isTeacher: boolean = (user.role == TEACHER);
    const isParent: boolean = (user.role == PARENT);

    const dispatch = useDispatch();

    const onLogoutHandler = () => {
        removeToken()

        dispatch(setLoggedInUser({
            id: 0,
            role: GUEST
        }))
    }

    return (
        <aside className={classes.sidebar}>
            <div className={classes.sidebar__title}>
                <LogoShort className={classes.logo}/>
                <h1>Logged as {user.role}</h1>
            </div>
            <div className={classes.sidebar__bookmarks}>
                <Bookmark to="/" svgIcon={<HomeIcon/>}>Home</Bookmark>
                { (isStudent || isTeacher) && <Bookmark to="/tasks" svgIcon={<TasksIcon/>}>Tasks</Bookmark>}
                { (isStudent || isParent) && <Bookmark to="/grades" svgIcon={<NotesIcon/>}>Grades</Bookmark>}
                { isAdmin && <Bookmark to="/manage" svgIcon={<ManageIcon/>}>Manage</Bookmark>}
                <Bookmark to="/reports" svgIcon={<ReportIcon/>}>Reports</Bookmark>
            </div>
            <div className={classes.sidebar__profile}>
                <Bookmark to="/" svgIcon={<LogoutIcon/>} onClick={onLogoutHandler}>Logout</Bookmark>
                {isStudent && <ProfileBookmark src={ProfileStudent} to="/config">David Jasper</ProfileBookmark>}
                {isAdmin && <ProfileBookmark src={ProfileAdmin} to="/config">Cat</ProfileBookmark>}
                {isTeacher && <ProfileBookmark src={ProfileTeacher} to="/config">Mr. Smith</ProfileBookmark>}
                {isParent && <ProfileBookmark src={ProfileAdmin} to="/config">Parentos</ProfileBookmark>}
            </div>
        </aside>
    )
}

export default Sidebar;