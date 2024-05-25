import {useState, MouseEventHandler, FormEvent} from "react";
import classes from "./UploadTaskCard.module.scss";
import {PlusIcon} from "assets/icons/Icon.tsx";
import Button from "ui/Button/Button.tsx";
import Input from "forms/Input.tsx";
import Dropdown from "forms/Dropdown/Dropdown.tsx";
import GroupSelector from "forms/GroupSelector/GroupSelector.tsx";
import TextArea from "forms/TextArea.tsx";
import SelectButton from "ui/Button/SelectButton.tsx";
import {DUMMY_TASK_TEACHER} from "api/Task.tsx";

const SELECT_CLASS = "Select Class";
const SELECT_SUBJECT = "Select Subject";
const SELECT_MEMBERS = "Select Members";

interface UploadTaskCardProps {
    onClick?: MouseEventHandler;
}

interface Member {
    label: string;
    checked: boolean;
}

interface Group {
    members: { id: number; firstName: string; lastName: string }[];
}

const UploadTaskCard = (props: UploadTaskCardProps) => {
    // Stan
    const [form, setForm] = useState<{ [key: string]: string }>({
        taskName: "",
        dueDate: "",
        class: "",
        subject: "",
        description: "",
    });

    const [selectedOptions, setSelectedOptions] = useState({
        class: SELECT_CLASS,
        subject: SELECT_SUBJECT,
        members: SELECT_MEMBERS,
    });

    const [availableOptions, setAvailableOptions] = useState<{
        subjects: string[];
        members: string[];
    }>({
        subjects: [],
        members: [],
    });

    const [groups, setGroups] = useState<Group[]>([]);
    const [single, setSingle] = useState<boolean>(true);

    // Funkcje obsługi zmiany stanu
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
        const selectedClassItem = DUMMY_TASK_TEACHER.find((item) => item.class === selected);
        if (selectedClassItem) {
            setAvailableOptions({
                subjects: selectedClassItem.subjects,
                members: selectedClassItem.members.map(
                    (member) => `${member.firstName} ${member.lastName}`
                ),
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
                .map((member, index) => {
                    const [firstName, lastName] = member.label.split(" ");
                    return {id: index + 1, firstName, lastName};
                }),
        };
    };

    const handleAddGroup = () => {
        if (newGroup.members.length > 0) {
            setGroups((prevGroups) => [...prevGroups, newGroup]);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.taskName || !form.dueDate || !form.class || !form.subject || !form.description) {
            console.log("Wypełnij wszystkie pola przed wysłaniem formularza!");
            return;
        }

        if (!single && groups.length === 0) {
            console.log("Wypełnij wszystkie pola przed wysłaniem formularza!");
            return;
        }

        const formData = {
            ...form,
            groups: single ? groups : [{
                members: availableOptions.members.map((member, index) => {
                    const [firstName, lastName] = member.split(" ");
                    return {id: index + 1, firstName, lastName};
                })
            }],
        };
        console.log("Form Data:", formData);
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
                            items={DUMMY_TASK_TEACHER.map((item) => ({label: item.class, checked: false}))}
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
                                        items={availableOptions.members.map((item) => ({label: item, checked: false}))}
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
                <Button className={classes["send-btn"]} type="submit">
                    Send task
                </Button>
            </form>
        </div>
    );
};

export default UploadTaskCard;
