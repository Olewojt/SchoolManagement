import classes from "./Reports.module.scss"
import Select, {Subject} from "forms/Select.tsx";
import PieChart from "ui/Charts/PieChart.tsx";
const Reports = () => {

    const subjects: Subject[] = [
        {
            name: "math",
            display_name: "Mathematics"
        },
        {
            name: "english",
            display_name: "English"
        },
        {
            name: "physics",
            display_name: "Physics"
        },
        {
            name: "chemistry",
            display_name: "Chemistry"
        },
        {
            name: "history",
            display_name: "History"
        },
        {
            name: "biology",
            display_name: "Biology"
        }
    ];

    return (
        <main className={classes.content}>
            <div className={classes.filters}>
                <Select name={"Subject"} options={subjects}></Select>
            </div>

            <div className={classes.charts}>
                <PieChart></PieChart>
            </div>
        </main>
    )
}

export default Reports;