import { Chart } from "react-google-charts";

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
        fontSize: 20,
        bold: false
    },
    is3D: true
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