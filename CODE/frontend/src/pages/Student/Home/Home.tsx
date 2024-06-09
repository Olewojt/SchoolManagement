import classes from "./Home.module.scss"
import LastGradeCard from "ui/Card/LastGradeCard/LastGradeCard.tsx";
import LastTaskCard from "ui/Card/LastTaskCard/LastTaskCard.tsx";
import Notifications from "layouts/Notifications/Notifications.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";

const StudentHome = () => {
    const user = useSelector((state: RootState) => state.login);
    return (
        <main className={classes.home}>
            <Notifications className={classes.notifications} style={user.role !== "Student" ? { gridColumn: "1 / 3" } : {}} />
            {user.role === "Student" &&
                <>
                    <LastGradeCard className={classes.grades} />
                    <LastTaskCard className={classes.tasks} />
                </>
            }
        </main>
    )
}

export default StudentHome;
