import React from 'react';
import classes from "./LastGradeCard.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "state/store.tsx";
import { formatDate } from "utilitiesdateUtils.tsx/";
import { SubjectsGrades } from "api/Grades.tsx";

interface LastGradeCardProps {
    className?: string;
}

const LastGradeCard: React.FC<LastGradeCardProps> = (props) => {
    const grades = useSelector((state: RootState) => state.studentGrades.grades);

    const sortedGrades = grades.slice().sort((a: SubjectsGrades, b: SubjectsGrades) => {
        const aDate = new Date(a.grades[a.grades.length - 1].gradedAt).getTime();
        const bDate = new Date(b.grades[b.grades.length - 1].gradedAt).getTime();
        return bDate - aDate;
    });

    const lastGrade = sortedGrades[0];
    const lastSubject = lastGrade ? lastGrade.subjectName : "";

    return (
        <section className={`${classes["last-grade"]} ${props.className}`}>
            <div className={classes["lolipop"]}>
                <img className={classes["lolipop--2"]} src="src/assets/images/lolipop-icon-stick.png" alt="Lolipop stick"/>
                <img className={classes["lolipop--1"]} src="src/assets/images/lolipop-icon-sugar.png" alt="Lolipop sugar"/>
            </div>
            <div className={classes["card"]}>
                {lastGrade ? (
                    <>
                        <h3 className={classes["card__header"]}>Ostatnia ocena</h3>
                        <h1 className={classes["card__grade"]}>{lastGrade.grades[lastGrade.grades.length - 1].grade}</h1>
                        <h3 className={classes["card__subject"]}>{lastSubject}</h3>
                        <h3 className={classes["card__date"]}>{formatDate(lastGrade.grades[lastGrade.grades.length - 1].gradedAt)}</h3>
                    </>
                ) : (
                    <div className={classes["card__subject"]}>Brak ocen</div>
                )}
            </div>
        </section>
    );
};

export default LastGradeCard;
