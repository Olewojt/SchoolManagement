import Sidebar from "layouts/Sidebar/Sidebar.tsx";
import classes from "./Layout.module.scss"
import {Outlet} from "react-router-dom";

let isDark = localStorage.getItem("isDark") === 'true'

if (isDark == null) {
    localStorage.setItem("isDark", 'false');
    isDark = false;
}

const Layout = () => {
    return (
        <Outlet/>
    )
}
export default Layout;

export const LayoutMain = () => {
    return (
        <main className={classes.student} data-theme={isDark ? "dark" : ""}>
            <Sidebar/>
            <Outlet/>
        </main>
    )
}

export const LayoutAuth = () => {
    return (
        <main data-theme={isDark ? "dark" : ""}>
            <Outlet/>
        </main>
    )
}