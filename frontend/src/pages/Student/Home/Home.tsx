import classes from "./Home.module.scss"
import Notifications from "ui/Notifications/Notifications.tsx";
import LastGradeCard from "ui/Card/LastGradeCard/LastGradeCard.tsx";

const StudentHome = () => {
    return(
        <main className={classes.home}>
            {/*<Notifications className={classes.notifications}></Notifications>*/}
            <LastGradeCard />
        </main>
    )
}

export default StudentHome;