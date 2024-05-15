import classes from "./Reports.module.scss";
import SelectOptions, {Subject} from "forms/SelectOptions.tsx";
import PieChart, {GradeDict} from "ui/Charts/PieChart.tsx";
import SelectDate, {currentDate} from "forms/SelectDate.tsx";
import {DUMMY_GRADES, DummyGrades} from "api/Grades.tsx";
import React, {useEffect, useState} from "react";
import SelectOption from "forms/SelectOption.tsx";

interface InitialState {
    [key: string]: boolean;
}

function generateInitialState(subjects: Subject[]): InitialState {
    const initialState: { [key: string]: boolean } = {};
    subjects.forEach((subject) => {
        initialState[subject.name] = true;
    });
    return initialState;
}

function getSubjects(dummyGrades: DummyGrades[]): Subject[] {
    const subjects: Subject[] = [];
    for (const grade of dummyGrades) {
        subjects.push({
            name: grade.subject,
        });
    }
    return subjects;
}

function getGradesCount(dummyGrades: DummyGrades[]): GradeDict {
    const sampleGrades: GradeDict = {
        "5": 0,
        "4": 0,
        "3": 0,
        "2": 0,
        "1": 0,
    };

    for (const subject of dummyGrades) {
        for (const gradeData of subject.grades) {
            const grade = gradeData.grade.toString();
            sampleGrades[grade]++;
        }
    }

    return sampleGrades;
}

const TeacherReports = () => {
    const initialState = generateInitialState(getSubjects(DUMMY_GRADES));
    const grades = getGradesCount(DUMMY_GRADES);
    const DUMMY_CLASSES = ["5C", "4A", "3B", "1A", "7D", "2D"];

    const [selectedSubjects, setSelectedSubjects] = useState<InitialState>(initialState);
    const [sampleGrades, setSampleGrades] = useState<GradeDict>(grades);
    const [fromDate, setFromDate] = useState(currentDate());
    const [toDate, setToDate] = useState(currentDate());
    const [selectedClass, setSelectedClass] = useState<string>(DUMMY_CLASSES[0]);

    // Filter grades when selectedSubjects or date range changes
    useEffect(() => {
        const filteredGrades = filterGrades();
        const newSampleGrades = getGradesCount(filteredGrades);
        setSampleGrades(newSampleGrades);
    }, [selectedSubjects, fromDate, toDate]);

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

    const handleClassChange = (selected: string) => {
        setSelectedClass(selected);
        console.log(selected);
    };

    const filterGrades = (): DummyGrades[] => {
        return DUMMY_GRADES.map((grade) => ({
            ...grade,
            grades: grade.grades.filter((specificGrade) => {
                const from = new Date(fromDate);
                from.setHours(0, 0, 0, 0); // Set time to midnight

                const to = new Date(toDate);
                to.setHours(23, 59, 59, 999); // Set time to 23:59:59

                const current = new Date(specificGrade.date);

                return current >= from && current <= to;
            })
        })).filter((grade) => {
            const isSelected = selectedSubjects[grade.subject];
            return isSelected && grade.grades.length > 0;
        });
    };

    return (
        <main className={classes.content}>
            <div className={classes.filters}>
                <SelectOption
                    name={"Class"}
                    options={DUMMY_CLASSES}
                    selected={selectedClass}
                    onOptionChange={handleClassChange}
                ></SelectOption>
                <SelectOptions
                    name={"Subject"}
                    options={getSubjects(DUMMY_GRADES)}
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
                <PieChart data={sampleGrades} />
            </div>
        </main>
    );
};

export default TeacherReports;