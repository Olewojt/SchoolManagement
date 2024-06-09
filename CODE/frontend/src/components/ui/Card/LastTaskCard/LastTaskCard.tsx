import React from "react";
import { Link } from "react-router-dom";
import classes from "./LastTaskCard.module.scss";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "state/store.tsx";
import { formatDate } from "utilitiesdateUtils.tsx/";
import {checkTaskById} from "state/tasks/tasksSlice.tsx";

interface LastTaskCardProps {
    className?: string;
}

const LastTaskCard: React.FC<LastTaskCardProps> = (props) => {
    const tasks = useSelector((state: RootState) => state.studentTasks.tasks);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter(task => task.status === "TO_DO");

    const sortedTasks = filteredTasks.slice().sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());

    const lastTask = sortedTasks.length > 0 ? sortedTasks[0] : null;

    const handleLink = () => {
        if (lastTask)
            dispatch(checkTaskById(lastTask.id))
    }

    return (
        <Link to="/tasks" onClick={handleLink} className={`${classes["last-task"]} ${props.className}`}>
            <div className={classes["card"]}>
                <h3 className={classes["card__header"]}>Cumming Task</h3>
                {lastTask ? (
                    <>
                        <h1 className={classes["card__title"]}>{lastTask.title}</h1>
                        <h3 className={classes["card__subject"]}>Subject:</h3>
                        <h3 className={classes["card__subject--value"]}>{lastTask.subject}</h3>
                        <h3 className={classes["card__due-date"]}>Due date:</h3>
                        <h3 className={classes["card__due-date--value"]}>{formatDate(lastTask.date)}</h3>
                        <h3 className={classes["card__date"]}>{formatDate(lastTask.date)}</h3>
                    </>
                ) : (
                    <p>No tasks available</p>
                )}
            </div>
        </Link>
    );
};

export default LastTaskCard;
