import classes from "./Tasks.module.scss"
import Board from "layouts/TaskBoard/Board.tsx";

const StudentTasks = () => {
    return (
        <main className={classes.main}>
            <Board/>
        </main>
    )
}

export default StudentTasks