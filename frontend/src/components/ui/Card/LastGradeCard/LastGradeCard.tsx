import React from 'react';
import classes from "./LastGradeCard.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "state/store.tsx";
import {formatDate} from "utilitiesdateUtils.tsx/";
import { Grade } from "api/Grades.tsx";

interface LastGradeCardProps {
    className?: string;
}

const LastGradeCard: React.FC<LastGradeCardProps> = (props) => {
    const grades = useSelector((state: RootState) => state.studentGrades.grades);

    // Find the latest grade across all subjects
    const allGrades: Grade[] = grades.flatMap(subjectGrade => subjectGrade.grades);
    const latestGrade = allGrades.sort((a, b) => new Date(b.gradedAt).getTime() - new Date(a.gradedAt).getTime())[0];

    // Find the subject corresponding to the latest grade
    const lastSubject = latestGrade ? grades.find(subjectGrade =>
        subjectGrade.grades.some(grade => grade.gradedAt === latestGrade.gradedAt)
    )?.subjectName : "";

    return (
        <section className={`${classes["last-grade"]} ${props.className}`}>
            <div className={classes["lolipop"]}>
                <img className={classes["lolipop--2"]} src="src/assets/images/lolipop-icon-stick.png" alt="Lolipop stick"/>
                <img className={classes["lolipop--1"]} src="src/assets/images/lolipop-icon-sugar.png" alt="Lolipop sugar"/>
            </div>
            <div className={classes["card"]}>
                {latestGrade ? (
                    <>
                        <h3 className={classes["card__header"]}>Last Grade</h3>
                        <h1 className={classes["card__grade"]}>{latestGrade.grade}</h1>
                        <h3 className={classes["card__subject"]}>{lastSubject}</h3>
                        <h3 className={classes["card__date"]}>{formatDate(latestGrade.gradedAt)}</h3>
                    </>
                ) : (
                    <div className={classes["card__subject"]}>Brak ocen</div>
                )}
            </div>
        </section>
    );
};

export default LastGradeCard;
