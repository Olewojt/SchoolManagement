import classes from "./UserManagement.module.scss"
import Search from "ui/Management/Search.tsx";
import Button from "ui/Button/Button.tsx";
import {DUMMY_TEACHERS, Teacher} from "api/Teachers.tsx";
import {DUMMY_STUDENTS, FullUser} from "api/User.tsx";
import {SetStateAction, useState} from "react";
import Input from "forms/Input.tsx";
import SelectOption from "forms/SelectOption.tsx";

enum TABS {
    TEACHERS = "TEACHERS",
    STUDENTS = "STUDENTS",
    CLASSES = "CLASSES",
    PARENTS = "PARENTS"
}

const UserManagement = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [currentTab, setCurrentTab] = useState(TABS.TEACHERS); // State to track current tab
    const [editMode, setEditMode] = useState(false); // State to track edit mode
    const [editedRow, setEditedRow] = useState(-1); // Track the currently edited row
    const [selectedClass, setSelectedClass] = useState("-"); // Track the currently selected class
    const handleEditRow = (row: number) => {
        setEditedRow(row);
    }

    const handleTabChange = (tabName: TABS) => {
        setCurrentTab(tabName);
    }

    const editModeChange = (mode: boolean) => {
        setSelectedClass("-");
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
        if (!item.firstName) item.firstName = "-";
        if (!item.lastName) item.lastName = "-";

        return (
            item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase())
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
                            options={[]}
                            selected={""}
                            onOptionChange={() => {}}
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
                    {currentTab && filteredData.map((item, index) => (
                        <tr key={index} id={item.id.toString()}>
                            {editMode && (
                                <td colSpan={2}>
                                    <Button type="button" className={classes.editButton} onClick={() => handleEditRow(item.id)} children="✏️"/>
                                    <Button type="button" className={classes.editButton} children="❌"/>
                                </td>
                            )}

                            <td colSpan={4}>
                                {editMode && editedRow == item.id
                                    ? <Input type={"text"} placeholder={item.firstName ? item.firstName : "-"} onChange={() => {}}/>
                                    : item.firstName}
                            </td>
                            <td colSpan={4}>
                                {editMode && editedRow == item.id
                                    ? <Input type={"text"} placeholder={item.lastName ? item.lastName : "-"} onChange={() => {}}/>
                                    : item.lastName}
                            </td>
                            <td colSpan={4}>
                                {editMode && editedRow == item.id
                                    ? <Input type={"text"} placeholder={item.email} onChange={() => {}}/>
                                    : item.email
                                }
                            </td>

                            {currentTab === TABS.TEACHERS &&
                                <>
                                    <td colSpan={4}>{(item as Teacher).subject.length != 0 ? (item as Teacher).subject : "-"}</td>
                                    <td colSpan={4}>
                                        {editMode && editedRow == item.id
                                            ?
                                            <SelectOption
                                                options={["-", "5C", "2A"]}
                                                name="Class"
                                                onOptionChange={handleClassChange}
                                                selected={selectedClass == "-" ? item.class || "-" : selectedClass}
                                                className={classes.class_selection}/>
                                            : (item as Teacher).class || "-"
                                        }
                                    </td>
                                </>
                            }

                            {currentTab === TABS.STUDENTS &&
                                <>
                                    <td colSpan={4}>{(item as FullUser).class}</td>
                                    <td colSpan={4}>{item.pesel}</td>
                                    <td colSpan={4}>{item.country}</td>
                                    <td colSpan={4}>{item.city}</td>
                                    <td colSpan={4}>{item.street}</td>
                                    <td colSpan={4}>{item.homeNumber}</td>
                                    <td colSpan={4}>{item.flatNumber ? item.flatNumber : "-"}</td>
                                </>
                            }

                            {currentTab === TABS.CLASSES &&
                                <>
                                    <td colSpan={4}>{(item as FullUser).class}</td>
                                    <td colSpan={4}>{item.pesel}</td>
                                </>
                            }
                        </tr>
                    ))}
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