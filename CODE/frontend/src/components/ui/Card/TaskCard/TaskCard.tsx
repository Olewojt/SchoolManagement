import { useEffect, useState } from "react";
import classes from "./TaskCard.module.scss";
import { GroupIcon, PlusIcon, SingleIcon } from "assets/icons/Icon.tsx";
import DropIndicator from "layouts/TaskBoard/DropIndicator.tsx";

import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import ReadTaskCard from "layouts/ReadTaskCard/ReadTaskCard.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store.tsx";
import { resetTaskId } from "state/tasks/tasksSlice.tsx";
import { formatDate } from "utilitiesdateUtils.tsx/";
import useAnimated from "hooks/useAnimated.tsx";

const TaskCard = (props: TaskCardInterface) => {
    const dispatch = useDispatch();
    const taskid = useSelector((state: RootState) => state.studentTasks.currentTaskId);

    const [active, setActive] = useState(false);
    const isAnimated = useAnimated()

    const formattedDate = formatDate(props.date);
    const deadline = formatDate(props.deadline);

    useEffect(() => {
        if (taskid && props.id === taskid) {
            setActive(true);
            dispatch(resetTaskId());
        }
    }, [taskid, props.id, dispatch]);

    const handleActive = () => {
        setActive(prevState => !prevState);
    };

    const activeBackgroundClass = active ? (isAnimated ? classes.background + " " + classes["background--active-anime"] : classes.background + " " + classes["background--active"]) : "";

    return (
        <>
            <DropIndicator beforeId={props.id.toString()} status={props.status} />
            <div className={classes.card}>
                {props.members.length === 1 ?
                    <SingleIcon className={classes.card__icon} />
                    :
                    <GroupIcon className={classes.card__icon} />
                }
                <h1 className={classes.card__title}>{props.title}</h1>
                <div className={classes.card__info}>
                    <h2>Subject <span>{props.subject}</span></h2>
                    <h2>Due Date <span>{formattedDate}</span></h2>
                </div>
                <button className={classes.card__btn} type="button" onClick={handleActive}>
                    <PlusIcon />
                </button>
            </div>
            {active && <div className={activeBackgroundClass}></div>}
            {active &&
                <ReadTaskCard
                    title={props.title}
                    subject={props.subject}
                    date={formattedDate}
                    members={props.members}
                    description={props.description}
                    id={props.id}
                    status={props.status}
                    handleDragStart={props.handleDragStart}
                    onClick={handleActive}
                    className={props.className}
                    grade={props.grade}
                    deadline={deadline}
                />
            }
        </>
    );
};

export default TaskCard;
