import classes from "./UserManagement.module.scss"
import Search from "ui/Management/Search.tsx";
import Button from "ui/Button/Button.tsx";
import SelectOptions from "forms/SelectOptions.tsx";
import {DUMMY_TEACHERS} from "api/Teachers.tsx";

const UserManagement = () => {

    const onSearchInput = () => {
        // console.log("SEARCHING")
    }

    const DUMMY_SUBJECTS = [
        {name: "History"},
        {name: "Mathematics"},
        {name: "Physics"},
    ]

    return (
        <div className={classes.content}>
            <div className={classes.filters}>
                <Button className={classes.tab} type={"button"} children={"TEACHERS"}></Button>
                <Button className={classes.tab} type={"button"} children={"STUDENTS"}></Button>
            </div>

            <div className={classes.filters}>
                <Search onInput={onSearchInput}></Search>
                <SelectOptions options={DUMMY_SUBJECTS} checkedItems={{}} onCheckboxChange={() => {}} name={"Subjects"}></SelectOptions>
            </div>

            <div className={classes.table_container}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={4}>Name</th>
                            <th colSpan={4}>Surname</th>
                            <th colSpan={4}>Subject</th>
                            <th colSpan={4}>Class</th>
                        </tr>
                    </thead>

                    <tbody>
                        {DUMMY_TEACHERS.map((teacher, index) => (
                            <tr key={index}>
                                <td colSpan={4}>{teacher.name}</td>
                                <td colSpan={4}>{teacher.surname}</td>
                                <td colSpan={4}>{teacher.subject}</td>
                                <td colSpan={4}>{teacher.class ? teacher.class : "-"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={classes.filters}>
                <Button type={"button"} children={"Edit"}></Button>
                <Button type={"button"} children={"Add"}></Button>
                <Button type={"button"} children={"Save"}></Button>
                <Button type={"button"} children={"Clear"}></Button>
            </div>
        </div>
    )
}

export default UserManagement;