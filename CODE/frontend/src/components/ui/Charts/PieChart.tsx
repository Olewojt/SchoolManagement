import { Chart } from "react-google-charts";
import "../../../index.scss"

// Po 2 piwach bylem jak to pisalem, ale dziala =)
const colors = {
    'grade_5': getComputedStyle(document.documentElement).getPropertyValue('--grade-card-bg-5'),
    'grade_4': getComputedStyle(document.documentElement).getPropertyValue('--grade-card-bg-4'),
    'grade_3': getComputedStyle(document.documentElement).getPropertyValue('--grade-card-bg-3'),
    'grade_2': getComputedStyle(document.documentElement).getPropertyValue('--grade-card-bg-2'),
    'grade_1': getComputedStyle(document.documentElement).getPropertyValue('--grade-card-bg-1')
}

const options = {
    title: "Grades",
    backgroundColor: "transparent",
    chartArea: {
        top: "15%",
        left: "15%",
        width: "100%",
        height: "100%"
    },
    titleTextStyle: {
        color: "white",
        fontSize: 30,
        bold: false
    },
    legend: {
        textStyle: {
            color: "white",
            fontSize: 20
        }
    },
    is3D: true,
    colors: [
        colors.grade_5,
        colors.grade_4,
        colors.grade_3,
        colors.grade_2,
        colors.grade_1,
    ],
};

export interface GradeDict {
    [key: string]: number;
    "5": number,
    "4": number,
    "3": number,
    "2": number,
    "1": number,
}

export interface ChartProps {
    data: GradeDict;
}

const PieChart = (props: ChartProps) => {
    const noDataToDisplay = ["5", "4", "3", "2", "1"].every(key => props.data[key] === 0);
    const gradesData = [
        ["Grade", "Amount"],
        ["5", props.data["5"]],
        ["4", props.data["4"]],
        ["3", props.data["3"]],
        ["2", props.data["2"]],
        ["1", props.data["1"]],
    ];

    if (noDataToDisplay) options.title = "No grades to display \nfor given filters"
    else options.title = "Grades"

    return (
        <Chart
            chartType="PieChart"
            data={gradesData}
            options={options}
            width={"100%"}
            height={"100%"}
        />
    );
}

export default PieChart