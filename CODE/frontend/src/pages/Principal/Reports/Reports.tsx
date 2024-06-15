import classes from "./Reports.module.scss";
import SelectDate, {currentDate} from "forms/SelectHeaders/SelectDate.tsx";
import React, {useEffect, useState} from "react";
import SelectOption from "forms/SelectHeaders/SelectOption.tsx";
import Button from "ui/Button/Button.tsx";
import {exportTeacherTasks, getBasicTeachers, TeacherSelection} from "api/Teachers.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {exportPrincipalStudentReport} from "api/User.tsx";

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
    const [principalExportState, setPrincipalExportState] = useState<string>("Export school principal report");
    const [clearState, setClearState] = useState<string>("Clear");
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
        displayExportState("Cleared!", "clear");
    }

    function displayExportState(state: string, type: "export" | "clear" | "admin") {
        switch (type) {
            case "export":
                setExportState(state);

                setTimeout(() => {
                    setExportState("Export");

                }, 2000);
                break

            case "clear":
                setClearState(state)

                setTimeout(() => {
                    setClearState("Clear");

                }, 2000);
                break

            case "admin":
                setPrincipalExportState(state)

                setTimeout(() => {
                    setPrincipalExportState("Export school principal report");

                }, 2000);
                break
        }
    }

    const exportRequest = () => {
        setExportState("Exporting...");

        exportTeacherTasks(selectedTeacher?.id, new Date(fromDate), new Date(toDate))
            .then(data => {
                console.log('Export request response', data);

                displayExportState("Exported!", "export")
            })
            .catch(error => {
                console.error('Error requesting student grades report', error);

                displayExportState("Export failure!", "export");
            });
    }

    const exportPrincipalRequest = () => {
        setPrincipalExportState("Exporting...")

        exportPrincipalStudentReport()
            .then(data => {
                console.log('Export request response', data);
                displayExportState("Exported!", "admin")
            })
            .catch(error => {
                console.error('Error requesting principal students report', error);
                displayExportState("Exported failure!", "admin")
            });
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
                <Button
                    type={"button"}
                    children={exportState}
                    className={
                        exportState == "Exported!"
                            ? classes.export_success
                            : exportState == "Export failure!"
                                ? classes.export_failure
                                : ""
                    }
                    onClick={exportRequest}/>
                <Button
                    type={"button"}
                    children={clearState}
                    onClick={resetFilters}
                    className={
                        clearState == "Cleared!"
                            ? classes.export_success
                            : ""
                    }
                />
            </div>
            <div className={classes.buttons}>
                <Button
                    type={"button"}
                    children={principalExportState}
                    onClick={exportPrincipalRequest}
                    className={`${classes.buttons} ${
                        principalExportState == "Exported!" 
                            ? classes.export_success
                            : principalExportState == "Export failure!"
                                ? classes.export_failure
                                : ""
                    }`}
                />
            </div>
        </main>
    );
};

export default PrincipalReports;