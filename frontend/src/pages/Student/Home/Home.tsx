import classes from "./Home.module.scss"
import GradeCard from "ui/Card/GradeCard.tsx";

const Home = () => {

    return(
        <main className={classes.home}>
            <GradeCard grade={"5"} date={new Date(Date.now())}></GradeCard>

        </main>
    )
}

export default Home;