import classes from "./Reports.module.scss"
import SelectOptions, {Subject} from "forms/SelectOptions.tsx";
import PieChart, {GradeDict} from "ui/Charts/PieChart.tsx";
import SelectDate from "forms/SelectDate.tsx";
import {DUMMY_GRADES, DummyGrades} from "api/Grades.tsx";
import {useState} from "react";

interface InitialState {
    [key: string]: boolean
}

function generateInitialState(subjects: Subject[]): InitialState {
    const initialState: { [key: string]: boolean } = {};
    subjects.forEach(subject => {
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

// Absolutnie nie korzystalem z Chatu GPT.
// Łotasiet
const StudentReports = () => {

    const subjects = getSubjects(DUMMY_GRADES);
    const initialState = generateInitialState(subjects)

    const [selectedSubjects, setSelectedSubjects] = useState<InitialState>(initialState);
    const [sampleGrades, setSampleGrades] = useState<GradeDict>(getGradesCount(DUMMY_GRADES));

    const onCheckboxChange = (subject: string) => {
        // Create a copy of the current selectedSubjects state
        const newSelectedSubjects = { ...selectedSubjects };

        // Toggle the checkbox state for the subject
        newSelectedSubjects[subject] = !newSelectedSubjects[subject];

        // Update the state with the new selectedSubjects
        setSelectedSubjects(newSelectedSubjects);

        // Filter DUMMY_GRADES based on selected subjects
        const filteredGrades = DUMMY_GRADES.filter(grade => newSelectedSubjects[grade.subject]);

        // Recalculate grades count based on filtered grades
        const newSampleGrades = getGradesCount(filteredGrades);

        // Update the state with the new sampleGrades
        setSampleGrades(newSampleGrades);
    };

    return (
        <main className={classes.content}>
            <div className={classes.filters}>
                <SelectOptions name={"Subject"} options={subjects} onCheckboxChange={onCheckboxChange} checkedItems={selectedSubjects}/>
                <SelectDate name={"Date"} />
            </div>

            <div className={classes.charts}>
                <PieChart data={sampleGrades} />
            </div>
        </main>
    );
}

export default StudentReports;