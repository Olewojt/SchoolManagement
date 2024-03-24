import classes from "./Tasks.module.scss"
import Board from "layouts/TaskBoard/Board.tsx";
const Tasks = () => {
    return(
        <main className={classes.main}>
            <Board />
        </main>
    )
}

export default Tasks