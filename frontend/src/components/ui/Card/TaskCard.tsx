import classes from "./TaskCard.module.scss";
import { GroupIcon } from "assets/icons/Icon.tsx";

interface CardInterface {
    title: string;
    subject: string;
    date: string;
}

const TaskCard = (props: CardInterface) => {
    const formattedDate = new Date(props.date).toLocaleDateString(); // Formatowanie daty
    return (
        <div className={classes.card}>
            <GroupIcon className={classes.card__icon}/>
            <h1 className={classes.card__title}>{props.title}</h1>
            <div className={classes.card__info}>
                <h2>Subject <span>{props.subject}</span></h2>
                <h2>Due Date <span>{formattedDate}</span></h2>
            </div>
        </div>
    );
}

export default TaskCard;
