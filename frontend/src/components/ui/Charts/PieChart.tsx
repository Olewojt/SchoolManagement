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

export const data = [
    ["Grade", "Amount"],
    ["5", 4],
    ["4", 5],
    ["3", 5],
    ["2", 4],
    ["1", 2],
];

export const options = {
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
    ]
};

const PieChart = () => {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"100%"}
        />
    );
}

export default PieChart