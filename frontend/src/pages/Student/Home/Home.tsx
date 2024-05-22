import classes from "./Home.module.scss"
import LastGradeCard from "ui/Card/LastGradeCard/LastGradeCard.tsx";
import Grades from "api/Grades.tsx";
import LastTaskCard from "ui/Card/LastTaskCard/LastTaskCard.tsx";

const StudentHome = () => {
    return(
        <main className={classes.home}>
            {/*<Notific ations className={classes.notifications}></Notifications>*/}

            <LastGradeCard />
            <Grades />

            <LastTaskCard />
        </main>
    )
}

export default StudentHome;