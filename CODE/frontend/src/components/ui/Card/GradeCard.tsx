import classes from './GradeCard.module.scss';
import {NewIcon} from "assets/icons/Icon.tsx";

interface GradeCardProps {
    grade: number;
    date: string | Date;
}

const GradeCard = (props: GradeCardProps) => {
    const formattedDate = new Date(props.date).toLocaleDateString();

    const currentDate = new Date();
    const weekAgo = new Date(currentDate);
    weekAgo.setDate(currentDate.getDate() - 7);

    const cardDate = new Date(props.date);

    // Sprawdź, czy data na karcie jest starsza niż tydzień
    const isLessThanAWeek = cardDate > weekAgo;

    return (
        <div className={classes.gradeCard} data-value={props.grade}>
            {isLessThanAWeek && <div className={classes.gradeCard__new}>{<NewIcon/>}</div>}
            <h1 className={classes.grade}>{props.grade}</h1>
            <div className={classes.line}></div>
            <span className={classes.date}>{formattedDate}</span>
        </div>
    );
};

export default GradeCard;
