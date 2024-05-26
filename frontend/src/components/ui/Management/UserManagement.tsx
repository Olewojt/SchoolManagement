import classes from "./UserManagement.module.scss"
import Search from "ui/Management/Search.tsx";
import Button from "ui/Button/Button.tsx";
import {DUMMY_TEACHERS, Teacher} from "api/Teachers.tsx";
import {DUMMY_STUDENTS, FullUser} from "api/User.tsx";
import {SetStateAction, useEffect, useState} from "react";
import Input from "forms/Input.tsx";
import SelectOption from "forms/SelectOption.tsx";
import {getSchoolClasses, SchoolClass} from "api/Classes.tsx";

enum TABS {
    TEACHERS = "TEACHERS",
    STUDENTS = "STUDENTS",
    CLASSES = "CLASSES",
    PARENTS = "PARENTS"
}

function getClasses(data: SchoolClass[]): string[] {
    return data.map(schoolClass => schoolClass.name)
}

function findClass(data: SchoolClass[], name: string): SchoolClass | undefined {
    return data.find(schoolClass => schoolClass.name === name);
}


const UserManagement = () => {

    const [schoolClasses, setSchoolClasses] = useState<SchoolClass[]>([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [currentTab, setCurrentTab] = useState(TABS.TEACHERS); // State to track current tab
    const [editMode, setEditMode] = useState(false); // State to track edit mode
    const [editedRow, setEditedRow] = useState(-1); // Track the currently edited row
    const [selectedClass, setSelectedClass] = useState(""); // Track the currently selected class

    useEffect(() => {
        if (currentTab === TABS.CLASSES) {
            getSchoolClasses()
                .then(data => {
                    console.log('Classes', data);
                    setSchoolClasses(data)
                })
                .catch(error => {
                    console.error('Error fetching classes', error);
                });
        }
    }, [currentTab]);

    const handleEditRow = (row: number) => {
        setEditedRow(row);
    }

    const handleTabChange = (tabName: TABS) => {
        setCurrentTab(tabName);
    }

    const editModeChange = (mode: boolean) => {
        setEditedRow(-1);
        setEditMode(mode);
    }

    const onSearchInput = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchQuery(event.target.value);
    }

    const handleClassChange = (selected: string) => {
        setSelectedClass(selected);
    };

    interface TabConfig {
        headers: string[];
        data: FullUser[] | Teacher[];
    }

    const tabConfig: { [key : string]: TabConfig } = {
        TEACHERS: {
            headers: ["Name", "Surname", "E-Mail", "Subject", "PESEL", "Country", "City", "Street", "Home number", "Flat number"],
            data: DUMMY_TEACHERS
        },
        STUDENTS: {
            headers: ["Name", "Surname", "E-Mail", "Class", "PESEL", "Country", "City", "Street", "Home number", "Flat number"],
            data: DUMMY_STUDENTS
        },
        CLASSES: {
            headers: ["Subject", "Teacher"],
            data: []
        },
        PARENTS: {
            headers: ["Name", "Surname", "E-Mail", "Phone Number", "Children"],
            data: []
        }
    };

    const filteredData = tabConfig[currentTab].data.filter((item) => {
        if (!item.personalInfo.firstName) item.personalInfo.firstName = "-";
        if (!item.personalInfo.lastName) item.personalInfo.lastName = "-";

        return (
            item.personalInfo.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.personalInfo.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.personalInfo.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
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
                            name={"Class"}
                            options={getClasses(schoolClasses)}
                            selected={selectedClass}
                            onOptionChange={handleClassChange}
                        />
                    </>
                }

                <Search onInput={onSearchInput}></Search>
                {currentTab === TABS.TEACHERS &&
                    <>
                        <SelectOption
                            name={"Subject"}
                            options={[]}
                            selected={""}
                            onOptionChange={() => {}}
                        />
                    </>
                }

                {currentTab === TABS.STUDENTS &&
                    <>
                        <SelectOption
                            name={"Class"}
                            options={[]}
                            selected={""}
                            onOptionChange={() => {}}
                        />
                    </>
                }
            </div>

            <div className={classes.table_container}>
                <table>
                    <thead>
                    {currentTab && (
                        <tr>
                            {editMode && <th colSpan={2}>DELETE</th>}
                            {tabConfig[currentTab].headers.map((header, index) => (
                                <th key={index} colSpan={4}>{header}</th>
                            ))}
                        </tr>
                    )}
                    </thead>

                    <tbody>
                        {(currentTab === TABS.TEACHERS || currentTab === TABS.STUDENTS) && filteredData.map((item, index) => (
                            <tr key={index} id={item.personalInfo.id.toString()}>
                                {editMode && (
                                    <td colSpan={2}>
                                        <Button type="button" className={classes.editButton} onClick={() => handleEditRow(item.personalInfo.id)} children="✏️"/>
                                        <Button type="button" className={classes.editButton} children="❌"/>
                                    </td>
                                )}

                                <td colSpan={4}>
                                    {editMode && editedRow == item.personalInfo.id
                                        ? <Input type={"text"} placeholder={item.personalInfo.firstName ? item.personalInfo.firstName : "-"} onChange={() => {}}/>
                                        : item.personalInfo.firstName}
                                </td>
                                <td colSpan={4}>
                                    {editMode && editedRow == item.personalInfo.id
                                        ? <Input type={"text"} placeholder={item.personalInfo.lastName ? item.personalInfo.lastName : "-"} onChange={() => {}}/>
                                        : item.personalInfo.lastName}
                                </td>
                                <td colSpan={4}>
                                    {editMode && editedRow == item.personalInfo.id
                                        ? <Input type={"text"} placeholder={item.personalInfo.email} onChange={() => {}}/>
                                        : item.personalInfo.email
                                    }
                                </td>

                                {currentTab === TABS.TEACHERS &&
                                    <>
                                        <td colSpan={4}>{(item as Teacher).subject.length != 0 ? (item as Teacher).subject : "-"}</td>
                                    </>
                                }

                                {currentTab === TABS.STUDENTS &&
                                    <>
                                        <td colSpan={4}>{(item as FullUser).schoolClassDTO?.name}</td>
                                        <td colSpan={4}>{item.personalInfo.pesel}</td>
                                        <td colSpan={4}>{item.personalInfo.country}</td>
                                        <td colSpan={4}>{item.personalInfo.city}</td>
                                        <td colSpan={4}>{item.personalInfo.street}</td>
                                        <td colSpan={4}>{item.personalInfo.homeNumber}</td>
                                        <td colSpan={4}>{item.personalInfo.flatNumber ? item.personalInfo.flatNumber : "-"}</td>
                                    </>
                                }
                            </tr>
                        ))}

                        {currentTab === TABS.CLASSES && findClass(schoolClasses, selectedClass) ? (
                            findClass(schoolClasses, selectedClass)?.subjectDTOs.map((item, index) => (
                                <tr key={index}>
                                    {editMode && (
                                        <td colSpan={2}>
                                            <Button type="button" className={classes.editButton} onClick={() => handleEditRow(item.id)} children="✏️"/>
                                            <Button type="button" className={classes.editButton} children="❌"/>
                                        </td>
                                    )}
                                    <td colSpan={4}>{item.name}</td>
                                    <td colSpan={4}>
                                        Kurdemol
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>NO DATA FOUND</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

            <div className={classes.filters}>
                <Button
                    className={editMode ? classes.buttonOn : ''}
                    type={"button"} children={"Edit"}
                    onClick={() => editModeChange(!editMode)}
                />
                <Button type={"button"} children={"Add"}></Button>
                <Button type={"button"} children={"Save"}></Button>
                <Button type={"button"} children={"Clear"}></Button>
            </div>
        </div>
    )
}

export default UserManagement;