import classes from "pages/Student/Grades/Grades.module.scss";
import Header from "ui/Header/Header.tsx";
import GradeCard from "ui/Card/GradeCard.tsx";
import {useEffect, useState} from "react";
import {DUMMY_GRADES, DummyGrades, GradeAPI} from "api/Grades.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {getUserGrades} from "@/axios-client.tsx";

function convertToDummyGrades(grades: GradeAPI[]): DummyGrades[] {

}

const StudentGrades = () => {
    const user = useSelector((state: RootState) => state.login);

    const [gradesData, setGradesData] = useState([]);

    useEffect(() => {
        if (user) {
            getUserGrades(user.id)
                .then(data => {
                    console.log('User grades:', data);

                    const grades = convertToDummyGrades(data);
                })
                .catch(error => {
                    console.error('Error fetching user grades:', error);
                });
        }
    }, [user]);

    return (
        <main className={classes.home}>
            <div className={classes.content}>
                {gradesData.map((subjectData, subjectIndex) => (
                    <Header key={subjectIndex} value={subjectData.subject} className={classes.navbar}>
                        <div className={classes.grades}>
                            {subjectData.grades.map((gradeInfo, gradeIndex) => (
                                <GradeCard key={gradeIndex} grade={gradeInfo.grade} date={gradeInfo.date}></GradeCard>
                            ))}
                        </div>
                    </Header>
                ))}
            </div>
        </main>
    );
}

export default StudentGrades;
