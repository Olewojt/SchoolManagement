import React from 'react';
import classes from "./LastGradeCard.module.scss";
// import {useSelector} from "react-redux";
// import {RootState} from "state/store.tsx";
// import {formatDate} from "src/utilities/dateUtils.tsx";

interface LastGradeCardProps {
    className?: string;
}

const LastGradeCard: React.FC<LastGradeCardProps> = (props) => {
    // const lastGrade = useSelector((state: RootState) => state.grade.grades[state.grade.grades.length - 1]);
    // const lastSubject = useSelector((state: RootState) => state.grade.subject);

    // if (!lastGrade) {
    //     return (
    //         <div className={classes["empty-grade"]}>
    //             Brak ocen
    //         </div>
    //     );
    // }

    return (
        <section className={`${classes["last-grade"]} ${props.className}`}>
            <div className={classes["lolipop"]}>
                <img className={classes["lolipop--2"]} src="src/assets/images/lolipop-icon-stick.png"
                     alt="Lolipop stick"/>
                <img className={classes["lolipop--1"]} src="src/assets/images/lolipop-icon-sugar.png"
                     alt="Lolipop sugar"/>
            </div>
            <div className={classes["card"]}>
                <h3 className={classes["card__header"]}>Last grade</h3>
                {/*<h1 className={classes["card__grade"]}>{lastGrade.grade}</h1>*/}
                {/*<h3 className={classes["card__subject"]}>{lastSubject}</h3>*/}
                {/*<h3 className={classes["card__date"]}>{formatDate(lastGrade.gradedAt.toString())}</h3>*/}
            </div>
        </section>
    );
};

export default LastGradeCard;
