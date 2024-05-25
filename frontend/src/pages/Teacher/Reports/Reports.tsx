import classes from "./Reports.module.scss";
import {useEffect, useState} from "react";
import SelectOption from "forms/SelectOption.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import Button from "ui/Button/Button.tsx";
import {ClassesSubjects, exportSubjectClassGrades, getTeacherClassesSubjects} from "api/Teachers.tsx";
import SelectOptions from "forms/SelectOptions.tsx";
import {generateSubjectSelectionStates, SubjectSelectionState} from "pages/Student/Reports/Reports.tsx";

const classInitialState: ClassesSubjects = {
    className: "-",
    subjectNames: ["NO DATA"]
}

function getClass(data: ClassesSubjects[], className: string) {
    const cls = data.find((item) => item.className === className)

    if (cls)
        return cls

    return classInitialState;
}

function getClasses(data: ClassesSubjects[]) {
    if (data.length > 0)
        return data.map((item) => item.className)

    return ["-"]
}

const TeacherReports = () => {
    const user = useSelector((state: RootState) => state.login);
    // const grades = DUMMY_GRADES

    // Classes and subjects taught by teacher in given class
    const [classesSubjects, setClassesSubjects] = useState<ClassesSubjects[]>([]);
    // Selected class
    const [selectedClass, setSelectedClass] = useState<ClassesSubjects>(classInitialState)
    // Subjects selected in filter
    const [selectedSubjects, setSelectedSubjects] = useState<SubjectSelectionState>(generateSubjectSelectionStates(classInitialState.subjectNames));
    // State of export
    const [exportState, setExportState] = useState<string>("Export");
    // State of data loading
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        if (user) {
            getTeacherClassesSubjects(user.id)
                .then(data => {
                    console.log('Teacher classes and subjects:', data);

                    setClassesSubjects(data)

                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching teacher classes and subjects:', error);
                    setLoading(true)
                });
        }
    }, [user]);

    useEffect(() => {
    }, [loading]);

    const handleClassChange = (selected: string) => {
        setSelectedClass(getClass(classesSubjects, selected));
    };

    const onSubjectChange = (subject: string) => {
        setSelectedSubjects((prevState) => ({
            ...prevState,
            [subject]: !prevState[subject],
        }));
    };

    const resetFilters = () => {
        setSelectedClass(classesSubjects[0]);
        setSelectedSubjects(generateSubjectSelectionStates(classInitialState.subjectNames));
    }

    function displayExportState(state: string) {
        setExportState(state);

        setTimeout(() => {
            setExportState("Export");

        }, 2000);
    }

    const exportRequest = () => {
        setExportState("Exporting...");

        const selectedSubjectNames = Object.keys(selectedSubjects)
            .filter(subject => selectedSubjects[subject] && selectedClass.subjectNames.includes(subject));

        console.log('Selected subjects:', selectedSubjectNames);

        if (selectedClass.className != "-") {
            if (selectedSubjectNames.length > 0) {
                exportSubjectClassGrades(selectedClass.className, selectedSubjectNames)
                    .then(data => {
                        console.log('Export request response', data);

                        displayExportState("Exported!")
                    })
                    .catch(error => {
                        console.error('Error requesting student grades report', error);

                        displayExportState("Export failure!");
                    });
            } else {
                displayExportState("Select subjects!")
            }
        } else {
            displayExportState("Select class!");
        }
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
                    options={getClasses(classesSubjects)}
                    selected={selectedClass.className}
                    onOptionChange={handleClassChange}
                ></SelectOption>
                <SelectOptions
                    name={"Subject"}
                    options={selectedClass.subjectNames}
                    checkedItems={selectedSubjects}
                    onCheckboxChange={onSubjectChange}
                />
            </div>

            <div className={classes.charts}>
                {/*<PieChart data={}/>*/}
                <h1>Pick up a class and select subjects you want to include in the report.</h1>
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