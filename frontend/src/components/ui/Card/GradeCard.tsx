import classes from './GradeCard.module.scss';

interface GradeCardProps {
    grade: number;
    date: Date;
}

const GradeCard = (props:GradeCardProps) => {
    const formattedDate = props.date.toLocaleDateString();

    return (
        <div className={classes.gradeCard}  data-value={props.grade}>
            <h1 className={classes.grade}>{props.grade}</h1>
            <div className={classes.line}></div>
            <span className={classes.date}>{formattedDate}</span>
        </div>
    );
};

export default GradeCard;
