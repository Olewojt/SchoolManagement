
import classes from "pages/Student/Grades/Grades.module.scss";
import Header from "ui/Header/Header.tsx";
import GradeCard from "ui/Card/GradeCard.tsx";
import {useState} from "react";

const Grades = () => {

    const [gradesData] = useState([
        { subject: 'Mathematics', grades: [{ grade: '5', date: new Date(Date.now()) }, { grade: '4', date: new Date(Date.now()) }] },
        { subject: 'Physics', grades: [{ grade: '5', date: new Date(Date.now()) }, { grade: '3', date: new Date(Date.now()) }] },
        { subject: 'Religion', grades: [{ grade: '1', date: new Date(Date.now()) }, { grade: '2', date: new Date(Date.now()) }] }
        //tutaj bedzie sie pobieralo z bazy danych oceny kazdego ucznia i przekazywalo liste
        //w zaleznosci od struktury tabeli mozliwe bedzie dodac funkcje co bedzie przeksztalcac dane zz bazy bo tu jakby jest
        // tablica w tablicy a w bazie chyba damy kolmny id,przedmiot,ocena i data i bedzie wiele wierszy z przedmiotem matematyka

    ]);

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
