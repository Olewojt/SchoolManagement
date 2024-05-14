import classes from "./Home.module.scss"
import Notifications from "ui/Notifications/Notifications.tsx";
import LastGradeCard from "ui/Card/LastGradeCard/LastGradeCard.tsx";
import Grades from "api/Grades.tsx";

const StudentHome = () => {
    return(
        <main className={classes.home}>
            {/*<Notific ations className={classes.notifications}></Notifications>*/}
            <LastGradeCard />
            <Grades />
        </main>
    )
}

export default StudentHome;