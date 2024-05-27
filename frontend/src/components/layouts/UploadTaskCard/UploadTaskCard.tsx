import {useState, MouseEventHandler, FormEvent, useEffect} from "react";
import classes from "./UploadTaskCard.module.scss";
import {PlusIcon} from "assets/icons/Icon.tsx";
import Button from "ui/Button/Button.tsx";
import Input from "forms/Input.tsx";
import Dropdown from "forms/Dropdown/Dropdown.tsx";
import GroupSelector from "forms/GroupSelector/GroupSelector.tsx";
import TextArea from "forms/TextArea.tsx";
import SelectButton from "ui/Button/SelectButton.tsx";
import {teacherTaskInfo, createTask, getTeacherTasks} from "api/Task.tsx"; // Import the createTask function
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {addTasks} from "state/tasks/tasksSlice.tsx";

const SELECT_CLASS = "Select Class";
const SELECT_SUBJECT = "Select Subject";
const SELECT_MEMBERS = "Select Members";
const FIRST_CLASS = "First Select Class!";

interface UploadTaskCardProps {
    onClick?: MouseEventHandler | any;
}

interface Member {
    label: string;
    checked: boolean;
}

interface Group {
    members: { id: number; firstName: string; lastName: string }[];
}

interface Task {
    classInfo: {
        className: string;
        subjectNames: string[];
    };
    studentList: {
        id: number;
        firstName: string;
        lastName: string;
    }[];
}

const UploadTaskCard = (props: UploadTaskCardProps) => {
    const [form, setForm] = useState<{ [key: string]: string }>({
        taskName: "",
        dueDate: "",
        class: "",
        subject: "",
        description: "",
    });

    const [selectedOptions, setSelectedOptions] = useState({
        class: SELECT_CLASS,
        subject: FIRST_CLASS,
        members: FIRST_CLASS,
    });

    const [availableOptions, setAvailableOptions] = useState<{
        subjects: string[];
        members: { id: number; firstName: string; lastName: string }[];
    }>({
        subjects: [],
        members: [],
    });

    const [groups, setGroups] = useState<Group[]>([]);
    const [single, setSingle] = useState<boolean>(true);

    const [DUMMY_TASK_TEACHER, setDummyTaskTeacher] = useState<Task[]>([]);
    const [message, setMessage] = useState<string>("");

    const user = useSelector((state: RootState) => state.login);

    const dispatch = useDispatch();

    useEffect(() => {
        teacherTaskInfo(user.id).then(data => {
            setDummyTaskTeacher(data as Task[]);
        }).catch(error => {
            console.log("Error fetching data", error);
        });
    }, [user.id]);

    const handleStateChange = (fieldName: string, value: string | boolean) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: value.toString(),
        }));
    };

    const handleClassSelectionChange = (selected: string) => {
        setSelectedOptions((prev) => ({
            ...prev,
            class: selected,
            members: SELECT_MEMBERS,
            subject: SELECT_SUBJECT,
        }));
        setGroups([]);
        handleStateChange("class", selected);
        const selectedClassItem = DUMMY_TASK_TEACHER.find((item) => item.classInfo.className === selected);
        if (selectedClassItem) {
            setAvailableOptions({
                subjects: selectedClassItem.classInfo.subjectNames,
                members: selectedClassItem.studentList,
            });
        } else {
            setAvailableOptions({subjects: [], members: []});
        }
    };

    const handleSubjectSelectionChange = (selected: string) => {
        setSelectedOptions((prev) => ({...prev, subject: selected}));
        handleStateChange("subject", selected);
    };

    let newGroup: Group = {members: []};

    const handleMemberSelectionChange = (selectedMembers: Member[]) => {
        newGroup = {
            members: selectedMembers
                .filter((member) => member.checked)
                .map((member) => {
                    const [firstName, lastName] = member.label.split(" ");
                    const memberData = availableOptions.members.find(m => m.firstName === firstName && m.lastName === lastName);
                    return memberData ? memberData : {id: 0, firstName, lastName};
                }),
        };
    };

    const handleAddGroup = () => {
        if (newGroup.members.length > 0) {
            setGroups((prevGroups) => [...prevGroups, newGroup]);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.taskName || !form.dueDate || !form.class || !form.subject || !form.description) {
            setMessage("Fill in all fields!");
            return;
        }

        if (single && groups.length === 0) {
            setMessage("Fill in all fields!");
            return;
        }

        const formData = {
            title: form.taskName,
            deadline: new Date(form.dueDate).toISOString(),
            subjectName: form.subject,
            schoolClassName: form.class,
            description: form.description,
            taskMembersGroups: single
                ? groups.map(group => group.members.map(member => ({
                    userId: member.id,
                    firstName: member.firstName,
                    lastName: member.lastName,
                })))
                : [availableOptions.members.map(member => ({
                    userId: member.id,
                    firstName: member.firstName,
                    lastName: member.lastName,
                }))],
            taskCreatorId: user.id,
        };

        try {
            const createdTask = await createTask(formData);
            console.log("Task created successfully:", createdTask);
            const updatedTasks = await getTeacherTasks(user.id);
            dispatch(addTasks(updatedTasks));
            props.onClick();
        } catch (error) {
            console.error("Error creating task or updating task status or fetching user tasks:", error);
        }
    };

    const getAvailableMembers = () => {
        const assignedMemberIds = groups.flatMap(group =>
            group.members.map(member => member.id)
        );

        return availableOptions.members.filter(member =>
            !assignedMemberIds.includes(member.id)
        );
    };

    return (
        <div className={classes["open-card"]}>
            <form className={classes["open-card__container"]} onSubmit={handleSubmit}>
                <div className={classes["open-card__blank"]}></div>
                <div className={classes["content"]}>
                    <div className={classes["content__elem--1"]}>
                        <Input
                            type={"text"}
                            placeholder={"Task Name"}
                            label={"TASK NAME"}
                            name={"taskName"}
                            onChange={(e) => handleStateChange(e.target.name, e.target.value)}
                            className={classes["content__input--1"]}
                        />
                        <Input
                            type={"date"}
                            placeholder={"Due Date"}
                            label={"DUE DATE"}
                            name={"dueDate"}
                            onChange={(e) => handleStateChange(e.target.name, e.target.value)}
                            className={classes.content__input}
                        />
                    </div>
                    <div className={classes["content__elem--2"]}>
                        <Dropdown
                            buttonText={selectedOptions.class}
                            items={DUMMY_TASK_TEACHER.map((item) => ({
                                label: item.classInfo.className,
                                checked: false
                            }))}
                            isCheckbox={false}
                            onSelectionChange={handleClassSelectionChange}
                            label={"CLASS"}
                        />
                        <Dropdown
                            buttonText={selectedOptions.subject}
                            items={availableOptions.subjects.map((item) => ({label: item, checked: false}))}
                            isCheckbox={false}
                            onSelectionChange={handleSubjectSelectionChange}
                            label={"SUBJECT"}
                            disabled={selectedOptions.class === SELECT_CLASS}
                        />
                    </div>
                    <div className={classes["content__elem--3"]}>
                        <TextArea
                            placeholder={"Description"}
                            label={"DESCRIPTION"}
                            className={classes.content__textarea}
                            onChange={(e) => handleStateChange("description", e.target.value)}
                        />
                    </div>
                    <div className={classes["content__elem--4"]}>
                        <div>
                            <SelectButton group={false} onClick={() => setSingle(false)}/>
                            <SelectButton
                                group={true}
                                onClick={() => {
                                    setSingle(true);
                                    setGroups([]);
                                }}
                            />
                        </div>
                        <div>
                            {single && (
                                <>
                                    <Dropdown
                                        buttonText={selectedOptions.members}
                                        items={getAvailableMembers().map((item) => ({
                                            label: `${item.firstName} ${item.lastName}`,
                                            checked: false
                                        }))}
                                        isCheckbox={true}
                                        label={"MEMBERS"}
                                        disabled={selectedOptions.class === SELECT_CLASS}
                                        onSelectionChange={handleMemberSelectionChange}
                                    />
                                    <Button
                                        type={"button"}
                                        children={"Add Group"}
                                        className={classes.content__addBtn}
                                        onClick={handleAddGroup}
                                    />
                                </>
                            )}
                        </div>
                        {single && (
                            <GroupSelector
                                groups={groups}
                                onDeleteGroup={(groupIndex) =>
                                    setGroups((prevGroups) => prevGroups.filter((_, index) => index !== groupIndex))
                                }
                            />
                        )}
                    </div>
                </div>
                <button className={classes["open-card__btn"]} type="button" onClick={props.onClick}>
                    <PlusIcon/>
                </button>
                <div className={classes["send-btn"]}>
                    <p>{message}</p>
                    <Button type="submit">
                        Send task
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UploadTaskCard;
