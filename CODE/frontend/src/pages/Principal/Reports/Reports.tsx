import classes from "./Reports.module.scss";
import SelectDate, {currentDate} from "forms/SelectHeaders/SelectDate.tsx";
import React, {useEffect, useState} from "react";
import SelectOption from "forms/SelectHeaders/SelectOption.tsx";
import Button from "ui/Button/Button.tsx";
import {exportTeacherTasks, getBasicTeachers, TeacherSelection} from "api/Teachers.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";

const selectedTeacherInitialState = {
    id: -1,
    firstName: "NO",
    lastName: "DATA"
}

const PrincipalReports = () => {
    const user = useSelector((state: RootState) => state.login);
    const [teachers, setTeachers] = useState<TeacherSelection[]>([]);
    const [selectedTeacher, setSelectedTeacher] = useState<TeacherSelection>(selectedTeacherInitialState);

    // State of export
    const [exportState, setExportState] = useState<string>("Export");
    const [fromDate, setFromDate] = useState(currentDate(-180));
    const [toDate, setToDate] = useState(currentDate());

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        getBasicTeachers()
            .then((data) => {
                setTeachers(data)
                setSelectedTeacher(data[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error getting teachers in principal report tab", error)
            })
    }, [user]);

    useEffect(() => {
    }, [loading]);

    const handleTeacherChange = (selected: string) => {
        const id = teachers.findIndex(
            (teacher) => `${teacher.firstName} ${teacher.lastName}` == selected);

        setSelectedTeacher(teachers[id]);
    };

    const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromDate(event.target.value);
    };

    const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDate(event.target.value);
    };

    const resetFilters = () => {
        setToDate(currentDate());
        setFromDate(currentDate(-180));
    }

    function displayExportState(state: string) {
        setExportState(state);

        setTimeout(() => {
            setExportState("Export");

        }, 2000);
    }

    const exportRequest = () => {
        setExportState("Exporting...");

        exportTeacherTasks(selectedTeacher?.id, new Date(fromDate), new Date(toDate))
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
                    options={teachers.map((teacher) => `${teacher.firstName} ${teacher.lastName}`)}
                    selected={`${selectedTeacher.firstName} ${selectedTeacher.lastName}`}
                    onOptionChange={handleTeacherChange}
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
            <div className={classes.buttons}>
                <Button type={"button"} children={"School principal Report"} className={classes.buttons}
                        onClick={exportRequest}/>
            </div>
        </main>
    );
};

export default PrincipalReports;