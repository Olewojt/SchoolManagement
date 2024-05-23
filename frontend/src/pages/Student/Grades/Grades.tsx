import classes from "pages/Student/Grades/Grades.module.scss";
import Header from "ui/Header/Header.tsx";
import GradeCard from "ui/Card/GradeCard.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {getUserGrades} from "api/User.tsx";
import {addGrades} from "state/grades/studentGradesSlice.tsx";

const StudentGrades = () => {
    const user = useSelector((state: RootState) => state.login);
    const gradesDT = useSelector((state: RootState) => state.studentGrades);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            getUserGrades(user.id)
                .then(data => {
                    console.log('User grades:', data);
                    dispatch(addGrades(data));
                })
                .catch(error => {
                    console.error('Error fetching user grades:', error);
                });
        }
    }, [user, dispatch]);

    const gradesData = gradesDT.grades;

    return (
        <main className={classes.home}>
            <div className={classes.content}>
                {gradesData.map((subject, subjectIndex) => (
                    <Header key={subjectIndex} value={subject.subjectName} className={classes.navbar}>
                        <div className={classes.grades}>
                            {subject.grades.map((gradeInfo, gradeIndex) => (
                                <GradeCard key={gradeIndex} grade={gradeInfo.grade} date={gradeInfo.gradedAt}></GradeCard>
                            ))}
                        </div>
                    </Header>
                ))}
            </div>
        </main>
    );
}

export default StudentGrades;
