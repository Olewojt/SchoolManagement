import classes from "pages/Student/Grades/Grades.module.scss";
import Header from "ui/Header/Header.tsx";
import GradeCard from "ui/Card/GradeCard.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";

const StudentGrades = () => {
    const gradesDT = useSelector((state: RootState) => state.studentGrades);


    const gradesData = gradesDT.grades;

    return (
        <main className={classes.home}>
            <div className={classes.content}>
                {
                    (gradesData.length > 0)
                    ? gradesData.map((subject, subjectIndex) => (
                        <Header key={subjectIndex} value={subject.subjectName} className={classes.navbar}>
                            <div className={classes.grades}>
                                {subject.grades.map((gradeInfo, gradeIndex) => (
                                    <GradeCard key={gradeIndex} grade={gradeInfo.grade} date={gradeInfo.gradedAt}></GradeCard>
                                ))}
                            </div>
                        </Header>
                    ))
                    : <h1 className={classes.no_grades}>You haven't got any grades right now.</h1>
                }
            </div>
        </main>
    );
}

export default StudentGrades;
