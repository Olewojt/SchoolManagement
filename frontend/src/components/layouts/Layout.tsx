import Sidebar from "layouts/Sidebar/Sidebar.tsx";
import classes from "./Layout.module.scss"
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <main className={classes.student}>
            <Sidebar />
            <Outlet />
        </main>
    )
}

export default Layout;