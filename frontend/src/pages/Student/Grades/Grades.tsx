import classes from "pages/Student/Grades/Grades.module.scss";
import Header from "ui/Header/Header.tsx";
import GradeCard from "ui/Card/GradeCard.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {getUserGrades} from "api/User.tsx";
import {addGrades} from "state/grades/studentGradesSlice.tsx";
import {PARENT} from "utilitiesconstants.tsx/";

const StudentGrades = () => {
    const parent = useSelector((state: RootState) => state.parentChildrenData);
    const user = useSelector((state: RootState) => state.login);
    const gradesDT = useSelector((state: RootState) => state.studentGrades);
    const dispatch = useDispatch();

    useEffect(() => {
        let id = user.id

        if (user.role === PARENT && parent.selected != -1)
            id = parent.children[parent.selected].id

        if (user) {
            getUserGrades(id)
                .then(data => {
                    console.log('User grades:', data);
                    dispatch(addGrades(data));
                })
                .catch(error => {
                    console.error('Error fetching user grades:', error);
                });
        }
    }, [user, parent, dispatch]);

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
