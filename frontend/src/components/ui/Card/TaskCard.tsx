import {DragEvent, FormEvent, MouseEventHandler} from "react";
import classes from "./TaskCard.module.scss";
import {GroupIcon, PlusIcon} from "assets/icons/Icon.tsx";
import DropIndicator from "layouts/TaskBoard/DropIndicator.tsx";

interface CardInterface {
    title: string;
    subject: string;
    date: string;

    id: string;
    column: string;
    handleDragStart: (e: DragEvent<HTMLDivElement>, data: { title: string, id: string, column: string }) => void;

    onClick?: MouseEventHandler;
    active?: string
}

const TaskCard = (props: CardInterface) => {
    const formattedDate = new Date(props.date).toLocaleDateString(); // Formatowanie daty

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <>
            <DropIndicator beforeId={props.id} column={props.column}/>
            <div draggable="true"
                 onDragStart={(e) => props.handleDragStart(e, {title: props.title, id: props.id, column: props.column})}
                 className={classes.card}>
                <GroupIcon className={classes.card__icon}/>
                <h1 className={classes.card__title}>{props.title}</h1>
                <div className={classes.card__info}>
                    <h2>Subject <span>{props.subject}</span></h2>
                    <h2>Due Date <span>{formattedDate}</span></h2>
                </div>
                <button className={classes.card__btn} type="button" onClick={props.onClick}>
                    <PlusIcon/>
                </button>
            </div>
            {props.active
                && <>
                    <div className={classes.background}></div>
                    <div className={classes["open-card"]}>
                        <div className={classes["open-card__container"]}>
                            <div className={classes["open-card__blank"]}></div>
                            <div className={classes["open-card__content"]}>
                                <button className={classes["open-card__btn"]} type="button" onClick={props.onClick}>
                                    <PlusIcon/>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default TaskCard;
