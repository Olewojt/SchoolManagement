import classes from "./UserManagement.module.scss"
import Search from "ui/Management/Search.tsx";
import Button from "ui/Button/Button.tsx";
import SelectOptions from "forms/SelectOptions.tsx";
import {DUMMY_TEACHERS, DummyTeacher} from "api/Teachers.tsx";
import {DUMMY_STUDENTS, DummyStudent} from "api/Students.tsx";
import {SetStateAction, useState} from "react";
import Input from "forms/Input.tsx";
import SelectOption from "forms/SelectOption.tsx";

const UserManagement = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [currentTab, setCurrentTab] = useState('TEACHERS'); // State to track current tab
    const [editMode, setEditMode] = useState(false); // State to track edit mode
    const [editedRow, setEditedRow] = useState(-1); // Track the currently edited row
    const [selectedClass, setSelectedClass] = useState("-"); // Track the currently selected class
    const handleEditRow = (row: number) => {
        setEditedRow(row);
    }

    const handleTabChange = (tabName: string) => {
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

    const DUMMY_SUBJECTS = [
        {name: "History"},
        {name: "Mathematics"},
        {name: "Physics"},
    ]

    interface TabConfig {
        headers: string[];
        data: DummyTeacher[] | DummyStudent[];
    }

    const tabConfig: { [key : string]: TabConfig } = {
        TEACHERS: {
            headers: ["Name", "Surname", "E-Mail", "Subject", "Class"],
            data: DUMMY_TEACHERS
        },
        STUDENTS: {
            headers: ["Name", "Surname", "E-mail", "Class", "PESEL", "Country", "City", "Street", "Home number", "Flat number"],
            data: DUMMY_STUDENTS
        },
        PARENTS: {
            headers: ["Name", "Surname", "E-mail", "Phone Number"],
            data: []
        }
    };

    const filteredData = tabConfig[currentTab].data.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div className={classes.content}>
            <div className={classes.filters}>
                <Button
                    className={`${classes.tab} ${currentTab === 'TEACHERS' ? classes.buttonOn : ''}`}
                    type="button"
                    onClick={() => handleTabChange('TEACHERS')}
                    children={"TEACHERS"}
                />
                <Button
                    className={`${classes.tab} ${currentTab === 'STUDENTS' ? classes.buttonOn : ''}`}
                    type="button"
                    onClick={() => handleTabChange('STUDENTS')}
                    children={"STUDENTS"}
                >
                </Button>
                <Button
                    className={`${classes.tab} ${currentTab === 'PARENTS' ? classes.buttonOn : ''}`}
                    type="button"
                    onClick={() => handleTabChange('PARENTS')}
                    children={"PARENTS"}
                >
                </Button>
            </div>

            <div className={classes.filters}>
                <Search onInput={onSearchInput}></Search>
                <SelectOptions options={DUMMY_SUBJECTS} checkedItems={{}} onCheckboxChange={() => {}} name={"Subjects"}></SelectOptions>
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
                                        ? <Input type={"text"} placeholder={item.name} onChange={() => {}}/>
                                        : item.name}
                                </td>
                                <td colSpan={4}>
                                    {editMode && editedRow == item.id
                                        ? <Input type={"text"} placeholder={item.surname} onChange={() => {}}/>
                                        : item.surname}
                                </td>
                                <td colSpan={4}>
                                    {editMode && editedRow == item.id
                                        ? <Input type={"text"} placeholder={item.email} onChange={() => {}}/>
                                        : item.email
                                    }
                                </td>

                                {currentTab === "TEACHERS" &&
                                    <>
                                        <td colSpan={4}>{(item as DummyTeacher).subject || "-"}</td>
                                        <td colSpan={4}>
                                            {editMode && editedRow == item.id
                                                ?
                                                <SelectOption
                                                    options={["-", "5C", "2A"]}
                                                    name="Class"
                                                    onOptionChange={handleClassChange}
                                                    selected={selectedClass == "-" ? item.class || "-" : selectedClass}
                                                    className={classes.class_selection}/>
                                                : (item as DummyTeacher).class || "-"
                                            }
                                        </td>
                                    </>
                                }

                                {currentTab === "STUDENTS" &&
                                    <>
                                        <td colSpan={4}>{(item as DummyStudent).class}</td>
                                        <td colSpan={4}>{item.pesel}</td>
                                        <td colSpan={4}>{item.country}</td>
                                        <td colSpan={4}>{item.city}</td>
                                        <td colSpan={4}>{item.street}</td>
                                        <td colSpan={4}>{item.home_num || "-"}</td>
                                        <td colSpan={4}>{item.flat_num || "-"}</td>
                                    </>
                                }

                                {/*{currentTab === "PARENTS" &&*/}
                                {/*    <>*/}
                                {/*        */}
                                {/*    </>*/}
                                {/*}*/}
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