import classes from "pages/Student/Grades/Grades.module.scss"
import Header from "ui/Header/Header.tsx";
import GradeCard from "ui/Card/GradeCard.tsx";

const Grades = () => {
    return(
        <main className={classes.home}>
            <Header value={'Mathematics'}>
                <div className={classes.grades}>
                    <GradeCard grade={"5"} date={new Date(Date.now())}></GradeCard>
                    <GradeCard grade={"5"} date={new Date(Date.now())}></GradeCard>
                </div>
            </Header>
        </main>
    )
}

export default Grades