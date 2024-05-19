import classes from "pages/Student/Grades/Grades.module.scss";
import Header from "ui/Header/Header.tsx";
import GradeCard from "ui/Card/GradeCard.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {getUserGrades} from "@/axios-client.tsx";
import {addGrades} from "state/grades/studentGradesSlice.tsx";

const StudentGrades = () => {
    const user = useSelector((state: RootState) => state.login);
    const gradesDT = useSelector((state: RootState) => state.studentGrades);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            getUserGrades(user.id)
                .then(data => {
                    console.log('User grades:', data);
                    dispatch(addGrades(data));
                    setIsLoading(false); // Set loading to false after grades are fetched
                })
                .catch(error => {
                    console.error('Error fetching user grades:', error);
                    setIsLoading(false); // Set loading to false if there's an error
                });
        }
    }, [user, dispatch]);

    const gradesData = isLoading ? [] : gradesDT.grades;

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
