import classes from "./UserManagement.module.scss"
import Search from "ui/Management/Search.tsx";
import Button from "ui/Button/Button.tsx";
import {
    createNewTeacher,
    defaultTeacherData,
    getTeachers,
    SchoolClassWithSubjects,
    setTeacherSubjectInClass,
    Teacher
} from "api/Teachers.tsx";
import {
    createNewParent,
    createNewStudent, defaultParentData,
    defaultStudentData,
    defaultUserPersonalInfoDTO, deleteUser,
    getParents,
    getStudents,
    Parent,
    setParentChildren,
    Student,
    updateUserClass,
    updateUserData
} from "api/User.tsx";
import {SetStateAction, useEffect, useState} from "react";
import Input from "forms/Input.tsx";
import SelectOption from "forms/SelectHeaders/SelectOption.tsx";
import {
    defaultSchoolClassSubject,
    getSchoolClasses,
    getSchoolClassesSubjects,
    SchoolClassSubject
} from "api/Classes.tsx";
import SelectOptions from "forms/SelectHeaders/SelectOptions.tsx";
import {generateSubjectSelectionStates, SubjectSelectionState} from "pages/Student/Reports/Reports.tsx";
import {STUDENT, TEACHER} from "utilitiesconstants.tsx/";

enum TABS {
    TEACHERS = "TEACHERS",
    STUDENTS = "STUDENTS",
    CLASSES = "CLASSES",
    PARENTS = "PARENTS"
}

function getClasses(data: SchoolClassWithSubjects[]): string[] {
    return data.map(schoolClass => schoolClass.name)
}

function getSubjects(data: SchoolClassWithSubjects[]): string[] {
    const subNames = data.flatMap(schoolClass =>
        schoolClass.subjectDTOs.map(subject => subject.name)
    );

    return Array.from(new Set(subNames));
}

const UserManagement = () => {

    const [schoolClassesWithSubjects, setSchoolClassesWithSubjects] = useState<SchoolClassWithSubjects[]>([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [currentTab, setCurrentTab] = useState(TABS.TEACHERS); // State to track current tab

    const [teachersData, setTeachersData] = useState<Teacher[]>([]);
    const [studentsData, setStudentsData] = useState<Student[]>([]);
    const [parentsData, setParentsData] = useState<Parent[]>([]);
    const [classSubjectsData, setClassSubjectsData] = useState<SchoolClassSubject[]>([]);

    const [editedRow, setEditedRow] = useState(-1); // Track the currently edited row (item.personalInfoDTO.id)
    const [editedRowInfo, setEditedRowInfo] = useState<Student | Teacher | Parent | SchoolClassSubject>(null); // Track the currently edited row info (item)

    const [editMode, setEditMode] = useState(false); // State to track edit mode
    const [selectMode, setSelectMode] = useState(false); // State to track selection mode
    const [addMode, setAddMode] = useState(false); // State to track add mode

    const [rowsToUpdate, setRowsToUpdate] = useState<number[]>([])
    const [rowsToDelete, setRowsToDelete] = useState<number[]>([])
    const [rowsToAdd, setRowsToAdd] = useState<number[]>([])

    const [selectedClass, setSelectedClass] = useState("Class"); // Track the currently selected class
    const [selectedClasses, setSelectedClasses] = useState<SubjectSelectionState>({});
    const [selectedSubjects, setSelectedSubjects] = useState<SubjectSelectionState>({});
    const [selectedSubject, setSelectedSubject] = useState<string>("Subject");
    const [selectedIsFromCity, setSelectedIsFromCity] = useState<"Yes" | "No" | "">("");
    const [selectedPeople, setSelectedPeople] = useState<number[]>([])

    const [updateButtonState, setUpdateButtonState] = useState<string>("Save");

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    interface TabConfig {
        headers: string[];
        data: Teacher[] | Student[] | Parent[] | SchoolClassSubject[];
    }

    const tabConfig: { [key : string]: TabConfig } = {
        TEACHERS: {
            headers: ["Name", "Surname", "E-Mail", "Subject", "PESEL", "Country", "City", "Street", "Home number", "Flat number"],
            data: teachersData
        },
        STUDENTS: {
            headers: ["Name", "Surname", "E-Mail", "Class", "PESEL", "Country", "City", "Street", "Home number", "Flat number", "isFromCity"],
            data: studentsData
        },
        CLASSES: {
            headers: ["Subject", "Teacher"],
            data: classSubjectsData
        },
        PARENTS: {
            headers: ["Name", "Surname", "E-Mail", "Children", "Phone Number"],
            data: parentsData
        }
    };

    const fetchData = () => {
        setLoading(true);

        if (currentTab === TABS.STUDENTS) {
            getStudents()
                .then(data => {
                    console.log("Students", data);

                    // Map through the returned data to ensure personalInfoDTO is used correctly
                    const processedData = data.map(student => ({
                        ...student,
                        personalInfoDTO: student.personalInfo,
                    }));

                    setStudentsData(processedData);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching students', error);
                });

            getSchoolClasses()
                .then(data => {
                    console.log('Classes', data);
                    setSelectedClass(data[0].name);
                    setSelectedClasses(generateSubjectSelectionStates(getClasses(schoolClassesWithSubjects)));
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching classes', error);
                });
        }

        if (currentTab === TABS.TEACHERS) {
            getTeachers()
                .then(data => {
                    console.log("Teachers", data);
                    setTeachersData(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.log("Couldn't fetch teachers data", error);
                });

            getSchoolClassesSubjects()
                .then(data => {
                    console.log(data)
                    setSchoolClassesWithSubjects(data);
                    setSelectedSubjects(generateSubjectSelectionStates(getSubjects(schoolClassesWithSubjects)))
                })
                .catch(error => {
                    console.log("Error fetching schoolClassesWithSubjects", error);
                });
        }

        if (currentTab === TABS.CLASSES) {
            getSchoolClassesSubjects()
                .then(data => {
                    setSchoolClassesWithSubjects(data);
                })
                .catch(error => {
                    console.log("Error fetching schoolClassesWithSubjects", error);
                });

            getTeachers()
                .then(data => {
                    console.log("Teachers", data);
                    setTeachersData(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.log("Couldn't fetch teachers data", error);
                });
        }

        if (currentTab === TABS.PARENTS) {
            getParents()
                .then(data => {
                    // Map through the returned data to ensure personalInfoDTO is used correctly
                    const processedData = data.map(parent => ({
                        ...parent,
                        personalInfoDTO: {
                            ...defaultUserPersonalInfoDTO,
                            firstName: parent.firstName,
                            lastName: parent.lastName,
                            phoneNumber: parent.phoneNumber,
                        },
                    }));
                    setParentsData(processedData);
                })
                .catch(error => {
                    console.log("Couldn't fetch parents data", error);
                });
        }
    };

    const handleUpdateButton = () => {
        if (selectMode && selectedPeople.length > 0) {
            if (currentTab === TABS.TEACHERS) {
                setTeacherSubjectInClass(
                    selectedClass,
                    (editedRowInfo as SchoolClassSubject).name,
                    teachersData[selectedPeople[0]].id
                ).then(() => {
                    handleClearButton()
                    setSelectMode(false)
                    editModeChange(false)
                    setCurrentTab(TABS.CLASSES)
                }).catch(error => {
                    console.log("Error setTeacherSubjectInClass ", error)
                })
            } else if (currentTab === TABS.STUDENTS) {
                const parentId = (editedRowInfo as Parent).id;
                const parentChildrenIds = selectedPeople.map(index => studentsData[index].id);

                setParentChildren(
                    parentId,
                    parentChildrenIds
                ).then(() => {
                    handleClearButton()
                    setSelectMode(false)
                    editModeChange(false)
                    setCurrentTab(TABS.PARENTS)
                }
                ).catch(error => {
                    console.log("Error setParentTeacher ", error)
                })
            }
        }
        else if (rowsToUpdate.length > 0) {
            const data: Teacher[] | Student[] | Parent[] | SchoolClassSubject[] = tabConfig[currentTab].data

            setUpdateButtonState("Saving");

            rowsToUpdate.forEach((index) => {
                updateUserData(data[index].id, (data[index] as Teacher | Student | Parent).personalInfoDTO)
                    .then(() => {
                        switch (currentTab) {
                            case TABS.STUDENTS:
                                updateUserClass((data[index] as Student).id, (data[index] as Student).schoolClassDTO.name)
                                    .catch((error) => {
                                        setUpdateButtonState("Saved!");
                                        console.log("Couldn't update class! ", error)
                                    })
                        }
                    })
                    .catch(error => {
                        setUpdateButtonState("Error!");
                        console.log("Couldn't update personalData! ", error)
                    })
            })

            setRowsToUpdate([])
        } else if (rowsToAdd.length > 0) {
            setUpdateButtonState("Saving...")
            rowsToAdd.forEach((row) => {
                if (currentTab === TABS.TEACHERS) {
                    createNewTeacher(teachersData[row])
                        .then(() => {
                            console.log("New teacher created!")
                            setRowsToAdd([])
                            setUpdateButtonState("Saved!")
                        })
                        .catch(() => {
                            setError("Couldn't add teacher to the database.")
                        })
                } else if (currentTab === TABS.STUDENTS) {
                    createNewStudent(studentsData[row])
                        .then(() => {
                            console.log("New student created!")
                            setRowsToAdd([])
                            setUpdateButtonState("Saved!")
                        }).catch(() => {
                            setError("Couldn't add student to the database.")
                    })
                } else if (currentTab === TABS.PARENTS) {
                    createNewParent(parentsData[row])
                        .then(() => {
                            console.log("New parent created!")
                            setRowsToAdd([])
                            setUpdateButtonState("Saved!")
                        }).catch(() => {
                        setError("Couldn't add parent to the database.")
                    })
                }
            })
        } else if (rowsToDelete.length > 0) {
            rowsToDelete.forEach((row) => {
                deleteUser(tabConfig[currentTab].data[row].id)
                    .then(() => {
                        handleClearButton()
                    })
                    .catch(error => {
                        if (currentTab === TABS.TEACHERS) setError("Cannot remove this teacher!")
                        console.log("Couldn't remove user ", error)
                    })
            })
            setRowsToDelete([])
        }

        setTimeout(() => {setUpdateButtonState("Save")},2000)
        setTimeout(() => {setError("")},3000)
    }

    useEffect(() => {
        fetchData()
    }, [currentTab]);

    useEffect(() => {
    }, [loading]);

    const onClassChange = (subject: string) => {
        setSelectedClasses((prevState) => ({
            ...prevState,
            [subject]: !prevState[subject],
        }));
    };

    const onSubjectsChange = (subject: string) => {
        setSelectedSubjects((prevState) => ({
            ...prevState,
            [subject]: !prevState[subject],
        }));
    };

    const onSubjectChange = (subject: string) => {
        setSelectedSubject(subject)
        setEditedRowInfo(prev => {
            return {
                ...prev,
                name: subject
            }
        })
    };

    const onIsFromCityChange = (option: "" | "Yes" | "No") => {
        setSelectedIsFromCity(option);
        setEditedRowInfo(prev => {
            if ('personalInfoDTO' in prev && prev.personalInfoDTO) {
                return {
                    ...prev,
                    personalInfoDTO: {
                        ...prev.personalInfoDTO,
                        isFromCity: option === "Yes"
                    }
                };
            } else {
                return prev; // Return previous state if personalInfoDTO is not present
            }
        });
    };


    const handleInputChange = (field: string, value: string) => {
        setEditedRowInfo(prev => {
            if (field === "name") {
                return {
                    ...prev,
                    name: value
                }
            }

            if (field === "email") {
                return {
                    ...prev,
                    email: value
                };
            }

            if ('personalInfoDTO' in prev && prev.personalInfoDTO) {
                return {
                    ...prev,
                    personalInfoDTO: { ...prev.personalInfoDTO, [field]: value }
                };
            } else if ('subject' in prev) {
                return {
                    ...prev,
                    [field]: value
                };
            } else if ('schoolClassDTO' in prev) {
                return {
                    ...prev,
                    personalInfoDTO: { ...prev.personalInfoDTO, [field]: value }
                };
            }

            return prev;
        });
    };

    const isEmailValid = (email: string): boolean => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isPhoneNumberValid = (phoneNumber: string): boolean => {
        // Regular expression for phone number validation (allows only digits and optional dashes or spaces)
        const phoneRegex = /^\d{3}-?\d{3}-?\d{3}$/;
        return phoneRegex.test(phoneNumber);
    };

    const isPeselValid = (pesel: string): boolean => {
        // Regular expression for PESEL number validation (allows only 11 digits)
        const peselRegex = /^\d{11}$/;
        return peselRegex.test(pesel);
    };

    const isNumberValid = (number: string): boolean => {
        // Regular expression for number validation (allows only digits)
        const numberRegex = /^\d+$/;
        return numberRegex.test(number);
    };

    const isTeacherDataValid = (teacher: Teacher): boolean => {
        const { email, personalInfoDTO } = teacher;
        const { firstName, lastName, pesel, country, city, street, homeNumber, flatNumber } = personalInfoDTO;

        if (!isEmailValid(email)) {
            setError("Enter correct email (e.g., example@example.com)!");
            return false;
        }

        if (!isPeselValid(pesel)) {
            setError("Insert valid PESEL number (11 digits)!");
            return false;
        }

        if (!isNumberValid(homeNumber) || !isNumberValid(flatNumber)) {
            setError("Home number and flat number should be numbers!");
            return false;
        }

        if (!(firstName && lastName && pesel && country && city && street && homeNumber && flatNumber)) {
            setError("Please fill in all needed data!");
            return false;
        }

        return true;
    };

    const isStudentDataValid = (student: Student): boolean => {
        const { email, personalInfoDTO } = student;
        const { firstName, lastName, pesel, country, city, street, homeNumber, flatNumber } = personalInfoDTO;

        if (!isEmailValid(email)) {
            setError("Enter correct email (e.g., example@example.com)!");
            return false;
        }

        if (!(firstName && lastName && pesel && country && city && street && homeNumber && flatNumber)) {
            setError("Please fill in all needed data!");
            return false;
        }

        if (!isPeselValid(pesel)) {
            setError("Insert valid PESEL number (11 digits)!");
            return false;
        }

        if (!isNumberValid(homeNumber) || !isNumberValid(flatNumber)) {
            setError("Home number and flat number should be numbers!");
            return false;
        }

        return true;
    };

    const isParentDataValid = (parent: Parent): boolean => {
        const { email, personalInfoDTO } = parent;
        const { firstName, lastName, phoneNumber } = personalInfoDTO;

        if (!isEmailValid(email)) {
            setError("Enter correct email (e.g., example@example.com)!");
            return false;
        }

        if (!(firstName && lastName && phoneNumber)) {
            setError("Please fill in all needed data!");
            return false;
        }

        if (!isPhoneNumberValid(phoneNumber)) {
            setError("Insert valid phone number (e.g., 123-456-789)!");
            return false;
        }

        return true;
    };


    const handleRowUpdate = (index: number) => {
        let original: Student | Teacher | Parent| SchoolClassSubject = null;

        switch (currentTab) {
            case TABS.TEACHERS:
                original = teachersData[index]
                break;

            case TABS.STUDENTS:
                original = studentsData[index]
                break;

            case TABS.CLASSES:
                original = classSubjectsData[index]
                break;

            case TABS.PARENTS:
                original = parentsData[index]
                break;
        }

        if (original !== editedRowInfo && original.id == editedRowInfo.id) {
            switch (currentTab) {
                case TABS.TEACHERS:
                    if (isTeacherDataValid((editedRowInfo as Teacher))) {
                        teachersData[index] = (editedRowInfo as Teacher)
                        if (addMode) setRowsToAdd((prevState) => [...prevState, index])
                        else setRowsToUpdate((prevState) => [...prevState, index])
                    } else return
                    break;

                case TABS.STUDENTS:
                    if (isStudentDataValid((editedRowInfo as Student))) {
                        studentsData[index] = (editedRowInfo as Student)
                        if (addMode) setRowsToAdd((prevState) => [...prevState, index])
                        else setRowsToUpdate((prevState) => [...prevState, index])
                    } else return
                    break;

                case TABS.CLASSES:
                    classSubjectsData[index] = (editedRowInfo as SchoolClassSubject)
                    if (addMode) setRowsToAdd((prevState) => [...prevState, index])
                    else setRowsToUpdate((prevState) => [...prevState, index])
                    break;

                case TABS.PARENTS:
                    if (isParentDataValid((editedRowInfo as Parent))) {
                        parentsData[index] = (editedRowInfo as Parent)
                        if (addMode) setRowsToAdd((prevState) => [...prevState, index])
                        else setRowsToUpdate((prevState) => [...prevState, index])
                    } else return
                    break;
            }

            setAddMode(false)
            setError("")
            setEditedRow(-1);
            setEditedRowInfo(null);
        }

        console.log("rows to add = ", rowsToAdd)
        console.log("rows to update = ", rowsToUpdate)
    }


    const handleEditRow = (row: Teacher | Student | Parent| SchoolClassSubject) => {
        if (editedRow == -1) {
            setEditedRow(row.id);
            setEditedRowInfo(row);
        }
        else {
            setEditedRow(-1)
            setEditedRowInfo(null)
        }

    }

    const handleSelectMode = (type: string) => {
        if (selectMode) {
            setSelectMode(false)
        } else {
            setSelectMode(true)
            if (type === TEACHER) {
                setCurrentTab(TABS.TEACHERS)
            } else if (type == STUDENT) {
                setCurrentTab(TABS.STUDENTS)
            }
        }
    }

    const handlePersonSelection = (row: number) => {
        switch (currentTab) {
            case TABS.STUDENTS:
                setSelectedPeople(prevState => {
                    if (prevState.includes(row)) {
                        return prevState.filter(r => r !== row);
                    } else {
                        return [...prevState, row];
                    }
                });
                break

            case TABS.TEACHERS:
                setSelectedPeople([row])
                break
        }
    }

    const addModeChange = () => {
        if (!addMode && !editMode) {
            setAddMode(true);

            const newTeacher = { ...defaultTeacherData };
            const newStudent = { ...defaultStudentData };
            const newParent = { ...defaultParentData };
            const newSubject = { ...defaultSchoolClassSubject };

            if (teachersData.length > 0) newTeacher.id = teachersData[teachersData.length - 1].id + 1;
            if (studentsData.length > 0) newStudent.id = studentsData[studentsData.length - 1].id + 1;
            if (parentsData.length > 0) newParent.id = parentsData[parentsData.length - 1].id + 1;
            if (classSubjectsData.length > 0) newSubject.id = classSubjectsData[classSubjectsData.length - 1].id + 100;

            switch (currentTab) {
                case TABS.TEACHERS:
                    setTeachersData(prevState => {
                        const updatedData = [...prevState, newTeacher];
                        handleEditRow(newTeacher);
                        return updatedData;
                    });
                    break;

                case TABS.STUDENTS:
                    setStudentsData(prevState => {
                        const updatedData = [...prevState, newStudent];
                        handleEditRow(newStudent);
                        return updatedData;
                    });
                    break;

                case TABS.CLASSES:
                    setClassSubjectsData(prevState => {
                        const updatedData = [...prevState, newSubject];
                        handleEditRow(newSubject);
                        console.log(classSubjectsData)
                        return updatedData;
                    });
                    break;

                case TABS.PARENTS:
                    setParentsData(prevState => {
                        const updatedData = [...prevState, newParent];
                        handleEditRow(newParent);
                        return updatedData;
                    });
                    break;
            }
        } else {
            if (!rowsToAdd.includes(tabConfig[currentTab].data.length-1)) {
                handleEditRow(null)
                tabConfig[currentTab].data.pop()
            }

            setError("")
            setAddMode(false)
        }
    }

    const handleDeleteRow = (row: number) => {
        if (rowsToAdd.includes(row)) {
            setRowsToAdd(prevState => prevState.slice(0, -1));

            if (currentTab === TABS.TEACHERS) {
                setTeachersData(prevState => prevState.slice(0, -1));
            }

            if (currentTab === TABS.STUDENTS) {
                setStudentsData(prevState => prevState.slice(0, -1));
            }

            if (currentTab === TABS.PARENTS) {
                setParentsData(prevState => prevState.slice(0, -1));
            }

            setEditedRow(-1);
            setAddMode(false);
        }
        else {
            setRowsToDelete(prevState => {
                if (prevState.includes(row)) {
                    return prevState.filter(r => r !== row);
                } else {
                    return [...prevState, row];
                }
            });
            console.log("rows to delete = ", rowsToDelete)
        }
    }

    const handleClearButton = () => {
        setError("")
        fetchData()
        setRowsToDelete([])
        setRowsToUpdate([])
        setRowsToAdd([])
        if (addMode) {
            addModeChange()
        }
    }

    const handleTabChange = (tabName: TABS) => {
        setError("")
        setSelectMode(false)
        setAddMode(false)
        setEditMode(false)
        setEditedRow(-1)
        setRowsToDelete([])
        setSelectedPeople([])
        setRowsToUpdate([])
        setCurrentTab(tabName);
    }

    const editModeChange = (mode: boolean) => {
        if (!addMode) {
            setEditedRow(-1);
            setEditMode(mode);
        }
    }

    const onSearchInput = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchQuery(event.target.value);
    }

    const handleClassFilterChange = (selected: string) => {
        setSelectedClass(selected);
        const selectedClassData = schoolClassesWithSubjects.find(schoolClass => schoolClass.name === selected);
        if (selectedClassData) {
            setClassSubjectsData(selectedClassData.subjectDTOs);
        } else {
            setClassSubjectsData([]);
        }
    };

    const handleClassChange = (selected: string) => {
        setEditedRowInfo(prevState => ({
            ...prevState,
            schoolClassDTO: {
                ...(prevState as Student).schoolClassDTO,
                name: selected
            }
        }));

        console.log(editedRowInfo)
    };

    const handleGoToChild = (child_id: number) => {
        setLoading(true)
        setCurrentTab(TABS.STUDENTS);

        const child = studentsData.find((child) => child.id === child_id);

        if (child !== undefined) {
            setSearchQuery(child.email);
        }

        setLoading(false)
    };

    const handleGoToClass = (className: string) => {
        setLoading(true)
        setCurrentTab(TABS.CLASSES)

        setSelectedClass(className)

        setLoading(false)
    };

    const filteredData = tabConfig[currentTab].data.filter((item: Student | Teacher) => {
        // Skip filtering for the CLASSES tab
        if (currentTab === TABS.CLASSES) return true;

        // Ensure firstName and lastName are not undefined or null
        if (!item.personalInfoDTO.firstName) item.personalInfoDTO.firstName = "-";
        if (!item.personalInfoDTO.lastName) item.personalInfoDTO.lastName = "-";

        // Common filter logic for search query
        const matchesSearchQuery = (
            item.personalInfoDTO.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.personalInfoDTO.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Additional filter logic based on current tab
        if (currentTab === TABS.STUDENTS) {
            return matchesSearchQuery && selectedClasses[(item as Student).schoolClassDTO.name];
        }

        if (currentTab === TABS.TEACHERS) {
            const teacher = item as Teacher;
            const matchesSelectedClasses = teacher.schoolClassWithSubjectsDTOs.some(schoolClass =>
                schoolClass.subjectDTOs.some(subject =>
                    selectedSubjects[subject.name]
                )
            );
            return matchesSearchQuery && matchesSelectedClasses;
        }

        return matchesSearchQuery;
    });


    return (
        <div className={classes.content}>
            <div className={classes.filters}>
                {Object.values(TABS).map((tab) => (
                    <Button
                        key={tab}
                        className={`${classes.tab} ${currentTab === tab ? classes.buttonOn : ''}`}
                        type="button"
                        onClick={() => handleTabChange(tab)}
                        children={tab}
                    />
                ))}
            </div>

            <div className={classes.filters}>
                {currentTab === TABS.CLASSES &&
                    <>
                        <SelectOption
                            name={selectedClass}
                            options={getClasses(schoolClassesWithSubjects)}
                            selected={selectedClass}
                            onOptionChange={handleClassFilterChange}
                        />
                    </>
                }

                {currentTab === TABS.TEACHERS &&
                    <>
                        <SelectOptions
                            name={"Subject"}
                            options={getSubjects(schoolClassesWithSubjects)}
                            onCheckboxChange={onSubjectsChange}
                            checkedItems={selectedSubjects}
                        />
                        <Search onInput={onSearchInput} value={searchQuery}></Search>
                    </>
                }

                {currentTab === TABS.STUDENTS &&
                    <>
                        <SelectOptions
                            name={"Classes"}
                            options={getClasses(schoolClassesWithSubjects)}
                            checkedItems={selectedClasses}
                            onCheckboxChange={onClassChange}
                        />
                        <Search onInput={onSearchInput} value={searchQuery}></Search>
                    </>
                }
            </div>

            <div className={classes.table_container}>
                <table>
                    <thead>
                    {currentTab && (
                        <tr>
                            {editMode && !selectMode && <th colSpan={3}>EDIT</th>}
                            {selectMode && <th colSpan={3}>SELECTION</th>}
                            {addMode && <th colSpan={3}>ADDING</th>}
                            {tabConfig[currentTab].headers.map((header, index) => (
                                <th key={index} colSpan={4}>{header}</th>
                            ))}
                        </tr>
                    )}
                    </thead>

                    <tbody>
                        {(currentTab === TABS.TEACHERS || currentTab === TABS.STUDENTS) && filteredData.map((item: Student | Teacher, index) => (
                            <tr
                                key={index}
                                id={item.id.toString()}
                                className={`
                                            ${rowsToDelete.includes(index) ? classes.deleted_row : ""}
                                            ${rowsToUpdate.includes(index) ? classes.updated_row : ""}
                                            ${rowsToAdd.includes(index) ? classes.selected : ""}
                                        `}
                            >
                                {editMode && !selectMode && (
                                    <td colSpan={3}>
                                        <Button type="button" className={classes.editButton} onClick={() => handleEditRow(item)} children="✏️"/>
                                        <Button type="button" className={classes.editButton} children="❌" onClick={() => handleDeleteRow(index)}/>
                                        <Button type="button" className={classes.editButton} children="✔️" onClick={() => handleRowUpdate(index)}/>
                                    </td>
                                )}

                                {selectMode && (
                                    <td colSpan={3}>
                                        <Button
                                            type="button"
                                            children="✔️"
                                            onClick={() => handlePersonSelection(index)}
                                            className={`${classes.editButton} ${selectedPeople.includes(index) ? classes.selected : ''}`}
                                        />
                                    </td>
                                )}

                                {addMode && (
                                    <td colSpan={3}>
                                        {editedRow === item.id ? (
                                            <>
                                                <Button type="button" className={classes.editButton} children="✔️" onClick={() => handleRowUpdate(index)} />
                                            </>
                                        ) : null}
                                    </td>
                                )}

                                <td colSpan={4}>
                                    {(editMode || addMode) && editedRow == item.id
                                        ? <Input
                                            type={"text"}
                                            placeholder={item.personalInfoDTO.firstName ? item.personalInfoDTO.firstName : "-"}
                                            onChange={(item) => handleInputChange("firstName", item.target.value)}/>
                                        : item.personalInfoDTO.firstName
                                    }
                                </td>
                                <td colSpan={4}>
                                    {(editMode || addMode) && editedRow == item.id
                                        ? <Input
                                                type={"text"}
                                                placeholder={item.personalInfoDTO.lastName ? item.personalInfoDTO.lastName : "-"}
                                                onChange={(item) => handleInputChange("lastName", item.target.value)}/>
                                        : item.personalInfoDTO.lastName
                                    }
                                </td>
                                <td colSpan={4}>
                                    {addMode && editedRow == item.id
                                        ? <Input
                                            type={"email"}
                                            placeholder={item.email ? item.email : "-"}
                                            onChange={(item) => handleInputChange("email", item.target.value)}/>
                                        : item.email
                                    }
                                </td>

                                {currentTab === TABS.TEACHERS &&
                                    <td colSpan={4}>
                                        {
                                            (item as Teacher).schoolClassWithSubjectsDTOs.map((schoolClass => (
                                                schoolClass.subjectDTOs.map((subject) => (
                                                    <p key={subject.name}>
                                                        <a onClick={() => handleGoToClass(schoolClass.name)}>{subject.name} ({schoolClass.name})</a>
                                                    </p>
                                                ))
                                            )))
                                        }
                                    </td>
                                }

                                {currentTab === TABS.STUDENTS &&
                                    <td colSpan={4}>
                                        {(editMode || addMode) && editedRow == item.id
                                            ? <SelectOption
                                                name={(editedRowInfo as Student).schoolClassDTO.name}
                                                options={getClasses(schoolClassesWithSubjects)}
                                                selected={(editedRowInfo as Student).schoolClassDTO.name}
                                                onOptionChange={handleClassChange}
                                            />
                                            : (item as Student).schoolClassDTO?.name
                                        }
                                    </td>
                                }

                                {(currentTab === TABS.STUDENTS || currentTab === TABS.TEACHERS) &&
                                    <>
                                        <td colSpan={4}>
                                            {(editMode || addMode) && editedRow === item.id
                                                ? <Input
                                                    type={"text"}
                                                    placeholder={item.personalInfoDTO.pesel ? item.personalInfoDTO.pesel : "-"}
                                                    onChange={(item) => handleInputChange("pesel", item.target.value)}/>
                                                : item.personalInfoDTO.pesel
                                            }
                                        </td>
                                        <td colSpan={4}>
                                            {(editMode || addMode) && editedRow === item.id
                                                ? <Input
                                                    type={"text"}
                                                    placeholder={item.personalInfoDTO.country ? item.personalInfoDTO.country : "-"}
                                                    onChange={(item) => handleInputChange("country", item.target.value)}/>
                                                : item.personalInfoDTO.country
                                            }
                                        </td>
                                        <td colSpan={4}>
                                            {(editMode || addMode) && editedRow === item.id
                                                ? <Input
                                                    type={"text"}
                                                    placeholder={item.personalInfoDTO.city ? item.personalInfoDTO.city : "-"}
                                                    onChange={(item) => handleInputChange("city", item.target.value)}/>
                                                : item.personalInfoDTO.city
                                            }
                                        </td>
                                        <td colSpan={4}>
                                            {(editMode || addMode) && editedRow === item.id
                                                ? <Input
                                                    type={"text"}
                                                    placeholder={item.personalInfoDTO.street ? item.personalInfoDTO.street : "-"}
                                                    onChange={(item) => handleInputChange("street", item.target.value)}/>
                                                : item.personalInfoDTO.street
                                            }
                                        </td>
                                        <td colSpan={4}>
                                            {(editMode || addMode) && editedRow === item.id
                                                ? <Input
                                                    type={"text"}
                                                    placeholder={item.personalInfoDTO.homeNumber ? item.personalInfoDTO.homeNumber : "-"}
                                                    onChange={(item) => handleInputChange("homeNumber", item.target.value)}/>
                                                : item.personalInfoDTO.homeNumber
                                            }
                                        </td>
                                        <td colSpan={4}>
                                            {(editMode || addMode) && editedRow === item.id
                                                ? <Input
                                                    type={"text"}
                                                    placeholder={item.personalInfoDTO.flatNumber ? item.personalInfoDTO.flatNumber : "-"}
                                                    onChange={(item) => handleInputChange("flatNumber", item.target.value)}/>
                                                : (item.personalInfoDTO.flatNumber ? item.personalInfoDTO.flatNumber : "-")
                                            }
                                        </td>

                                        {currentTab === TABS.STUDENTS &&
                                            <td colSpan={4}>
                                                {(editMode || addMode) && editedRow === item.id
                                                    ? <SelectOption
                                                        name={selectedIsFromCity}
                                                        options={["Yes", "No"]}
                                                        selected={(editedRowInfo as Student).personalInfoDTO.isFromCity ? "Yes" : "No"}
                                                        onOptionChange={onIsFromCityChange}
                                                    />
                                                    : (item.personalInfoDTO.isFromCity ? "Yes" : "No")
                                                }
                                            </td>
                                        }
                                    </>
                                }
                            </tr>
                        ))}

                        {currentTab === TABS.CLASSES && selectedClass !== "Class" && classSubjectsData.map((subject, index) => (
                            <tr
                                key={subject.id}
                                className={`
                                    ${rowsToDelete.includes(index) ? classes.deleted_row : ""}
                                    ${rowsToUpdate.includes(index) ? classes.updated_row : ""}
                                    ${rowsToAdd.includes(index) ? classes.selected : ""}
                                `}
                            >
                                {editMode && (
                                    <td colSpan={3}>
                                        <Button type="button" className={classes.editButton} onClick={() => handleEditRow(subject)} children="✏️" />
                                        <Button type="button" className={classes.editButton} children="❌" onClick={() => handleDeleteRow(index)} />
                                        <Button type="button" className={classes.editButton} children="✔️" onClick={() => handleRowUpdate(index)} />
                                    </td>
                                )}

                                {addMode && (
                                    <td colSpan={3}>
                                        {editedRow === subject.id ? (
                                            <>
                                                <Button type="button" className={classes.editButton} children="✔️" onClick={() => handleRowUpdate(index)} />
                                            </>
                                        ) : null}
                                    </td>
                                )}

                                <td colSpan={4}>
                                    {addMode && editedRow == subject.id
                                        ? <>
                                            <p>Enter new subject or select existing one</p>
                                            <Input
                                                type={"text"}
                                                placeholder={subject.name ? subject.name : "-"}
                                                onChange={(item) => handleInputChange("name", item.target.value)}
                                            />
                                            <br/>
                                            <SelectOption
                                                options={getSubjects(schoolClassesWithSubjects)}
                                                name={selectedSubject}
                                                selected={selectedSubject}
                                                onOptionChange={onSubjectChange}
                                            />
                                        </>
                                        : subject.name
                                    }
                                </td>

                                <td>
                                    {(editMode || addMode) && editedRow == subject.id
                                        ? <Button
                                            type={"button"}
                                            children={"SELECT"}
                                            onClick={() => handleSelectMode(TEACHER)} />
                                        : `${subject.teacherInfo.firstName} ${subject.teacherInfo.lastName}`
                                    }
                                </td>
                            </tr>
                        ))}

                        {currentTab === TABS.PARENTS && parentsData.map((parent, index) => (
                            <tr
                                key={index}
                                className={`
                                            ${rowsToDelete.includes(index) ? classes.deleted_row : ""}
                                            ${rowsToUpdate.includes(index) ? classes.updated_row : ""}
                                            ${rowsToAdd.includes(index) ? classes.selected : ""}
                                        `}
                            >
                                {editMode && (
                                    <td colSpan={3}>
                                        <Button type="button" className={classes.editButton}
                                                onClick={() => handleEditRow(parent)} children="✏️"/>
                                        <Button type="button" className={classes.editButton} children="❌"
                                                onClick={() => handleDeleteRow(index)}/>
                                        <Button type="button" className={classes.editButton} children="✔️"
                                                onClick={() => handleRowUpdate(index)}/>
                                    </td>
                                )}

                                {addMode && (
                                    <td colSpan={3}>
                                        {editedRow === parent.id ? (
                                            <>
                                                <Button type="button" className={classes.editButton} children="✔️"
                                                        onClick={() => handleRowUpdate(index)}/>
                                            </>
                                        ) : null}
                                    </td>
                                )}

                                <td colSpan={4}>
                                    {(editMode || addMode) && editedRow == parent.id
                                        ? <Input
                                            type={"text"}
                                            placeholder={parent.personalInfoDTO.firstName ? parent.personalInfoDTO.firstName : "-"}
                                            onChange={(item) => handleInputChange("firstName", item.target.value)}/>
                                        : parent.personalInfoDTO.firstName
                                    }
                                </td>
                                <td colSpan={4}>
                                    {(editMode || addMode) && editedRow == parent.id
                                        ? <Input
                                            type={"text"}
                                            placeholder={parent.personalInfoDTO.lastName ? parent.personalInfoDTO.lastName : "-"}
                                            onChange={(item) => handleInputChange("lastName", item.target.value)}/>
                                        : parent.personalInfoDTO.lastName
                                    }
                                </td>
                                <td colSpan={4}>
                                    {addMode && editedRow == parent.id
                                        ? <Input
                                            type={"text"}
                                            placeholder={parent.email ? parent.email : "-"}
                                            onChange={(item) => handleInputChange("email", item.target.value)}/>
                                        : parent.email
                                    }
                                </td>
                                <td colSpan={4}>
                                    {editMode && editedRow == parent.id
                                        ? <Button
                                            type={"button"}
                                            children={"SELECT"}
                                            onClick={() => handleSelectMode(STUDENT)}/>
                                        : parent.children.map((child, index) => (
                                            <p key={index}>
                                                <a onClick={() => handleGoToChild(child.id)}>{child.firstName} {child.lastName}</a>
                                            </p>))
                                    }
                                </td>
                                <td>
                                    {(editMode || addMode) && editedRow == parent.id
                                        ? <Input
                                            type={"text"}
                                            placeholder={parent.personalInfoDTO.phoneNumber ? parent.personalInfoDTO.phoneNumber : "-"}
                                            onChange={(item) => handleInputChange("phoneNumber", item.target.value)}/>
                                        : parent.personalInfoDTO.phoneNumber
                                    }
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

            {error.length > 0 &&
                <div className={classes.filters}>
                    <h3 color={"red"}>{error}</h3>
                </div>
            }

            <div className={classes.filters}>
                <Button
                    className={editMode ? classes.buttonOn : ''}
                    type={"button"}
                    children={"Edit"}
                    onClick={() => editModeChange(!editMode)}
                />
                <Button
                    type={"button"}
                    children={"Add"}
                    onClick={addModeChange}
                />
                <Button type={"button"} children={updateButtonState} onClick={handleUpdateButton}/>
                <Button type={"button"} children={"Clear"} onClick={handleClearButton}/>
            </div>
        </div>
    )
}

export default UserManagement;