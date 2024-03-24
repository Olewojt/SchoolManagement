import classes from "pages/Student/Grades/Grades.module.scss";
import Header from "ui/Header/Header.tsx";
import GradeCard from "ui/Card/GradeCard.tsx";
import {useState} from "react";
import {DUMMY_GRADES} from "api/Grades.tsx";

const Grades = () => {
    const [gradesData] = useState(DUMMY_GRADES);

    return (
        <main className={classes.home}>
            {gradesData.map((subjectData) => (
                <Header value={subjectData.subject} className={classes.navbar}>
                    <div className={classes.grades}>
                        {subjectData.grades.map((gradeInfo) => (
                            <GradeCard grade={gradeInfo.grade} date={gradeInfo.date}></GradeCard>
                        ))}
                    </div>
                </Header>
            ))}
        </main>
    );
}

export default Grades;
