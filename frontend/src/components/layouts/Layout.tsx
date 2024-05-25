import Sidebar from "layouts/Sidebar/Sidebar.tsx";
import classes from "./Layout.module.scss"
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {useEffect} from "react";
import {getUserTasks} from "api/Task.tsx";
import {addTasks} from "state/tasks/tasksSlice.tsx";


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
    const user = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            getUserTasks(user.id)
                .then(data => {
                    console.log('User tasks:', data);
                    dispatch(addTasks(data));
                })
                .catch(error => {
                    console.error('Error fetching user grades:', error);
                });
        }
    }, [user, dispatch]);

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