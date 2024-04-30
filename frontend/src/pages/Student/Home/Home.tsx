import classes from "./Home.module.scss"
import Notifications from "ui/Notifications/Notifications.tsx";

const StudentHome = () => {
    return(
        <main className={classes.home}>
            <Notifications className={classes.notifications}></Notifications>
        </main>
    )
}

export default StudentHome;