import {useState} from "react";
import classes from "./TaskCard.module.scss";
import {GroupIcon, PlusIcon} from "assets/icons/Icon.tsx";
import DropIndicator from "layouts/TaskBoard/DropIndicator.tsx";

import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import ReadTaskCard from "layouts/ReadTaskCard/ReadTaskCard.tsx";


const TaskCard = (props: TaskCardInterface) => {
    const [active, setActive] = useState(false)
    const formattedDate = new Date(props.date).toLocaleDateString(); // Formatowanie daty


    const handleActive = () => {
        setActive(prevState => !prevState)
    }

    return (
        <>
            <DropIndicator beforeId={props.id} status={props.status}/>
            <div //draggable="true"
                 //onDragStart={(e) => props.handleDragStart(e, {title: props.title, id: props.id, column: props.column})}
                 className={classes.card}>
                <GroupIcon className={classes.card__icon}/>
                <h1 className={classes.card__title}>{props.title}</h1>
                <div className={classes.card__info}>
                    <h2>Subject <span>{props.subject}</span></h2>
                    <h2>Due Date <span>{formattedDate}</span></h2>
                </div>
                <button className={classes.card__btn} type="button" onClick={handleActive}>
                    <PlusIcon/>
                </button>
            </div>
            {active && <div className={classes.background}></div>}
            {/*TODO: będzie można tutaj coś kombinwować z nowym komponenetem dla Studenta/Nauczyciela*/}
            {active
                &&
                <ReadTaskCard title={props.title} subject={props.subject} date={formattedDate} members={props.members}
                              description={props.description} id={props.id} status={props.status}
                              handleDragStart={props.handleDragStart} onClick={handleActive}/>
            }
        </>
    );
}

export default TaskCard;