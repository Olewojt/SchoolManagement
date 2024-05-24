import classes from "./Tasks.module.scss"
import Board from "layouts/TaskBoard/Board.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {getUserTasks} from "api/Task.tsx";
import {addTasks} from "state/tasks/tasksSlice.tsx";
const StudentTasks = () => {
    const user = useSelector((state: RootState) => state.login);
    const task = useSelector((state: RootState) => state.studentTasks);
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

    return(
        <main className={classes.main}>
            <Board />
        </main>
    )
}

export default StudentTasks