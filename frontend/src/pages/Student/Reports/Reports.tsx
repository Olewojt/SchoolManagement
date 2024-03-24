import classes from "./Reports.module.scss"
import Header from "ui/Header/Header.tsx";
import PieChart from "ui/Charts/PieChart.tsx";
const Reports = () => {

    return (
        <main className={classes.content}>
            <div className={classes.filters}>
                <Header value={"Subject"}></Header>
                <Header value={"Subject"}></Header>
                <Header value={"Subject"}></Header>
            </div>

            <div className={classes.charts}>
                <PieChart></PieChart>
            </div>
        </main>
    )
}

export default Reports;