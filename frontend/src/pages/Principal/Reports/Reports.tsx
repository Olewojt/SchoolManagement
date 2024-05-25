import classes from "./Reports.module.scss";
import SelectDate, {currentDate} from "forms/SelectDate.tsx";
import React, {useState} from "react";
import SelectOption from "forms/SelectOption.tsx";
import Button from "ui/Button/Button.tsx";
import {exportTeacherTasks} from "api/Teachers.tsx";

const PrincipalReports = () => {
    // const user = useSelector((state: RootState) => state.login);

    // const [selectedTeacher, setSelectedTeacher] = useState<number>();

    // State of export
    const [exportState, setExportState] = useState<string>("Export");
    const [fromDate, setFromDate] = useState(currentDate());
    const [toDate, setToDate] = useState(currentDate());

    // const [loading, setLoading] = useState<boolean>(true);

    const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromDate(event.target.value);
    };

    const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDate(event.target.value);
    };

    const resetFilters = () => {
        setToDate(currentDate());
        setFromDate(currentDate());
    }

    function displayExportState(state: string) {
        setExportState(state);

        setTimeout(() => {
            setExportState("Export");

        }, 2000);
    }

    const exportRequest = () => {
        setExportState("Exporting...");

        exportTeacherTasks(8, new Date("2024-01-01"), new Date("2024-12-30"))
            .then(data => {
                console.log('Export request response', data);

                displayExportState("Exported!")
            })
            .catch(error => {
                console.error('Error requesting student grades report', error);

                displayExportState("Export failure!");
            });
    }

    const getExportButtonClass = () => {
        switch (exportState) {
            case "Exported!":
                return classes.export_success;
            case "Export failure!":
                return classes.export_failure;
            default:
                return "";
        }
    }

    return (
        <main className={classes.content}>
            <div className={classes.filters}>
                <SelectOption
                    name={"Teacher"}
                    options={[]}
                    selected={""}
                    onOptionChange={() => {}}
                ></SelectOption>
                <SelectDate
                    name={"Date"}
                    fromDate={fromDate}
                    toDate={toDate}
                    handleFromDateChange={handleFromDateChange}
                    handleToDateChange={handleToDateChange}
                />
            </div>

            <div className={classes.charts}>
                <h1>Pick up a teacher and select date range you want to include in the report.</h1>
            </div>

            <div className={classes.buttons}>
                <Button type={"button"} children={exportState} className={getExportButtonClass()}
                        onClick={exportRequest}/>
                <Button type={"button"} children={"Clear"} onClick={resetFilters}/>
            </div>
        </main>
    );
};

export default PrincipalReports;