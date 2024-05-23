import classes from "./Home.module.scss"
import LastGradeCard from "ui/Card/LastGradeCard/LastGradeCard.tsx";
import Grades from "api/Grades.tsx";
import LastTaskCard from "ui/Card/LastTaskCard/LastTaskCard.tsx";
import Notifications from "ui/Notifications/Notifications.tsx";

const StudentHome = () => {
    return (
        <main className={classes.home}>
            <Notifications className={classes.notifications}></Notifications>

            <LastGradeCard className={classes.grades}/>
            <Grades/>

            <LastTaskCard className={classes.tasks}/>
        </main>
    )
}

export default StudentHome;