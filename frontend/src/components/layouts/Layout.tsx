import Sidebar from "layouts/Sidebar/Sidebar.tsx";
import classes from "./Layout.module.scss"
import {Outlet} from "react-router-dom";

const Layout = () => {
    let isDark = localStorage.getItem("isDark") === 'true'

    if (isDark == null) {
        localStorage.setItem("isDark", JSON.stringify(false))
    }

    console.log(`isDark ${isDark}`)

    return (
        <>
            {isDark ?
                <main className={classes.student} data-theme="dark">
                    <Sidebar/>
                    <Outlet/>
                </main>
                :
                <main className={classes.student} >
                    <Sidebar/>
                    <Outlet/>
                </main>
            }
        </>
    )
}

export default Layout;