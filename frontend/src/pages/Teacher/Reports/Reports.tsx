import classes from "./Reports.module.scss";
import {GradeDict} from "ui/Charts/PieChart.tsx";
import SelectDate, {currentDate} from "forms/SelectDate.tsx";
import {DUMMY_GRADES, SubjectsGrades} from "api/Grades.tsx";
import React, {useEffect, useState} from "react";
import SelectOption from "forms/SelectOption.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {addGrades} from "state/grades/studentGradesSlice.tsx";
import Button from "ui/Button/Button.tsx";
import {getUserGrades} from "api/User.tsx";
import {exportSubjectClassGrades} from "api/Teachers.tsx";

// Extract subjects from response
function getSubjects(grades: SubjectsGrades[]): string[] {
    const subjects: string[] = []

    grades.forEach( (item) => {
        subjects.push(item.subjectName)
    })

    return subjects;
}

// Get distinct grades count to pass to PieChart module
function getGradesCount(grades: SubjectsGrades[]): GradeDict {
    const sampleGrades: GradeDict = {
        "5": 0,
        "4": 0,
        "3": 0,
        "2": 0,
        "1": 0,
    };

    for (const subject of grades) {
        for (const grade of subject.grades) {
            const gradeKey = grade.grade.toString();
            sampleGrades[gradeKey]++;
        }
    }

    return sampleGrades;
}

const TeacherReports = () => {
    const user = useSelector((state: RootState) => state.login);
    const grades = useSelector((state: RootState) => state.studentGrades.grades);
    // const grades = DUMMY_GRADES
    const dispatch = useDispatch();

    // Subjects extracted from response
    const [subjects, setSubjects] = useState<string[]>(getSubjects(grades));
    // Subjects selected in filter
    const [selectedSubject, setSelectedSubject] = useState<string>("-");
    // Grades prepared for PieChart module
    const [studentGrades, setStudentGrades] = useState<GradeDict>(getGradesCount(grades));
    // State of export
    const [exportState, setExportState] = useState<string>("Export");
    const [fromDate, setFromDate] = useState(currentDate());
    const [toDate, setToDate] = useState(currentDate());

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        if (user) {
            getUserGrades(user.id)
                .then(data => {
                    console.log('User grades:', data);

                    dispatch(addGrades(data))

                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching user grades:', error);
                    setLoading(true)
                });
        }
    }, [user]);

    useEffect(() => {
        setSubjects(getSubjects(grades));
        setStudentGrades(getGradesCount(grades));
    }, [loading]);

    // Filter grades when selectedSubjects or date range changes
    useEffect(() => {
        if (grades.length > 0) {
            const filteredGrades = filterGrades();
            const newGrades = getGradesCount(filteredGrades);
            setStudentGrades(newGrades);
        }
    }, [selectedSubject, fromDate, toDate, grades]);

    const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromDate(event.target.value);
    };

    const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDate(event.target.value);
    };

    const filterGrades = () => {
        const from = new Date(fromDate);
        from.setHours(0, 0, 0, 0); // Set time to midnight

        const to = new Date(toDate);
        to.setHours(23, 59, 59, 999); // Set time to 23:59:59

        // return grades
        //     .filter((subject) => selectedSubjects[subject.subjectName]) // Filter by selected subjects
        //     .map((subject) => {
        //         // Filter grades within date range
        //         const filteredGrades = subject.grades.filter((grade) => {
        //             const current = new Date(grade.gradedAt);
        //             return current >= from && current <= to;
        //         });
        //
        //         return {
        //             ...subject,
        //             grades: filteredGrades
        //         };
        //     })
        //     .filter((subject) => subject.grades.length > 0); // Remove subjects with no grades in range

        return []
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

        exportSubjectClassGrades(1, 1)
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
                    name={"Class"}
                    options={[]}
                    selected={""}
                    onOptionChange={() => {}}
                ></SelectOption>
                <SelectOption
                    name={"Subject"}
                    options={getSubjects(DUMMY_GRADES)}
                    selected={selectedSubject}
                    onOptionChange={() => {}}
                />
                <SelectDate
                    name={"Date"}
                    fromDate={fromDate}
                    toDate={toDate}
                    handleFromDateChange={handleFromDateChange}
                    handleToDateChange={handleToDateChange}
                />
            </div>

            <div className={classes.charts}>
                {/*<PieChart data={}/>*/}
            </div>

            <div className={classes.buttons}>
                <Button type={"button"} children={exportState} className={getExportButtonClass()}
                        onClick={exportRequest}/>
                <Button type={"button"} children={"Clear"} onClick={resetFilters}/>
            </div>
        </main>
    );
};

export default TeacherReports;