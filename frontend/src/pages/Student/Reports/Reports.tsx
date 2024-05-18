import classes from "./Reports.module.scss";
import SelectOptions, { Subject } from "forms/SelectOptions.tsx";
import PieChart, { GradeDict } from "ui/Charts/PieChart.tsx";
import SelectDate, { currentDate } from "forms/SelectDate.tsx";
import { getUserGrades } from "src/axios-client.tsx";
import { GradeAPI } from "api/Grades.tsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store.tsx";

const initialGradesDict: GradeDict = {
    "5": 0,
    "4": 0,
    "3": 0,
    "2": 0,
    "1": 0,
};

interface SubjectSelectionState {
    [key: string]: boolean;
}

// Generate initial state of selected subjects
function generateSubjectSelectionStates(subjects: Subject[]): SubjectSelectionState {
    const initialState: { [key: string]: boolean } = {};
    subjects.forEach((subject) => {
        initialState[subject.name] = true;
    });
    return initialState;
}

// Extract subjects from response
function getSubjects(grades: GradeAPI[]): Subject[] {
    const subjectsSet = new Set<string>();

    for (const grade of grades) {
        subjectsSet.add(grade.subjectName);
    }

    return Array.from(subjectsSet).map(subjectName => ({ name: subjectName }));
}

// Get distinct grades count to pass to PieChart module
function getGradesCount(grades: GradeAPI[]): GradeDict {
    const sampleGrades: GradeDict = {
        "5": 0,
        "4": 0,
        "3": 0,
        "2": 0,
        "1": 0,
    };

    for (const grade of grades) {
        const gradeKey = grade.grade.toString();
        sampleGrades[gradeKey]++;
    }

    return sampleGrades;
}

const StudentReports = () => {
    const user = useSelector((state: RootState) => state.login);

    // Grades API response
    const [studentGradesResponse, setStudentGradesResponse] = useState<GradeAPI[]>([]);
    // Subjects extracted from response
    const [subjects, setSubjects] = useState<Subject[]>([]);
    // Subjects selected in filter
    const [selectedSubjects, setSelectedSubjects] = useState<SubjectSelectionState>({});
    // Grades prepared for PieChart module
    const [studentGrades, setStudentGrades] = useState<GradeDict>(initialGradesDict);

    const [fromDate, setFromDate] = useState(currentDate());
    const [toDate, setToDate] = useState(currentDate());

    useEffect(() => {
        if (user) {
            getUserGrades(user.id)
                .then(data => {
                    console.log('User grades:', data);

                    const fetchedSubjects = getSubjects(data);
                    const subjectSelectionStates = generateSubjectSelectionStates(fetchedSubjects);
                    const gradesCount = getGradesCount(data);

                    setStudentGradesResponse(data);
                    setSubjects(fetchedSubjects);
                    setSelectedSubjects(subjectSelectionStates);
                    setStudentGrades(gradesCount);
                })
                .catch(error => {
                    console.error('Error fetching user grades:', error);
                });
        }
    }, [user]);

    // Filter grades when selectedSubjects or date range changes
    useEffect(() => {
        if (studentGradesResponse.length > 0) {
            const filteredGrades = filterGrades();
            const newGrades = getGradesCount(filteredGrades);
            setStudentGrades(newGrades);
        }
    }, [selectedSubjects, fromDate, toDate, studentGradesResponse]);

    const onCheckboxChange = (subject: string) => {
        setSelectedSubjects((prevState) => ({
            ...prevState,
            [subject]: !prevState[subject],
        }));
    };

    const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromDate(event.target.value);
    };

    const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDate(event.target.value);
    };

    const filterGrades = (): GradeAPI[] => {
        const from = new Date(fromDate);
        from.setHours(0, 0, 0, 0); // Set time to midnight

        const to = new Date(toDate);
        to.setHours(23, 59, 59, 999); // Set time to 23:59:59

        return studentGradesResponse.filter((grade) => {
            const current = new Date(grade.gradedAt);
            const isWithinDateRange = current >= from && current <= to;
            const isSelectedSubject = selectedSubjects[grade.subjectName];

            return isWithinDateRange && isSelectedSubject;
        });
    };

    return (
        <main className={classes.content}>
            <div className={classes.filters}>
                <SelectOptions
                    name={"Subject"}
                    options={subjects}
                    onCheckboxChange={onCheckboxChange}
                    checkedItems={selectedSubjects}
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
                <PieChart data={studentGrades} />
            </div>
        </main>
    );
};

export default StudentReports;
