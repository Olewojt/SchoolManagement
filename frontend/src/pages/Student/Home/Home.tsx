import classes from "./Home.module.scss"
import TaskCard from "ui/Card/TaskCard.tsx";

const Home = () => {
    const date = new Date();
    return(
        <main className={classes.home}>
            <TaskCard title={"Rozprawka o miśce w bojlerze"} subject={"Bojlerowanie"} date={date} />
        </main>
    )
}

export default Home;