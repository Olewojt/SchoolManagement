import { useState, ChangeEvent } from "react";
import classes from "./ReadTaskCard.module.scss";
import { PlusIcon } from "assets/icons/Icon.tsx";
import Button from "ui/Button/Button.tsx";
import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import Input from "forms/Input.tsx";
import Dropdown from "forms/Dropdown/Dropdown.tsx";
import GroupSelector from "forms/GroupSelector/GroupSelector.tsx";

const ReadTaskCard = (props: TaskCardInterface) => {
    const [form, setForm] = useState<{ [key: string]: string }>({});
    const [selectedCheckboxItems, setSelectedCheckboxItems] = useState([
        { label: "David Jasper", checked: false },
        { label: "Maciej Złomży", checked: false },
        { label: "Krzysztof Wykałaczka", checked: false },
        { label: "Bartosz Psikuta", checked: false },
        { label: "Option 5", checked: false },
        { label: "Option 6", checked: false },
        { label: "Option 7", checked: false },
    ]);
    const [selectedText, setSelectedText] = useState("Select Options");

    // Handle form input changes
    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Handle checkbox selection changes
    const handleCheckboxSelectionChange = (newItems: { label: string; checked: boolean }[]) => {
        setSelectedCheckboxItems(newItems);
    };

    // Handle text selection changes
    const handleTextSelectionChange = (selected: string) => {
        setSelectedText(selected);
    };

    return (
        <div className={classes["open-card"]}>
            <form className={classes["open-card__container"]}>
                <div className={classes["open-card__blank"]}></div>
                <div className={classes["content"]}>
                    <div className={classes["content__elem-1"]}>
                        <Input
                            type={"text"}
                            placeholder={"Task Name"}
                            label={"TASK NAME"}
                            name={"taskName"}
                            onChange={handleForm}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Due Date"}
                            label={"DUE DATE"}
                            name={"dueDate"}
                            onChange={handleForm}
                        />
                        <Dropdown
                            buttonText="Select Options"
                            items={selectedCheckboxItems}
                            isCheckbox={true}
                            onSelectionChange={handleCheckboxSelectionChange}
                        />
                        <p>
                            Selected Items:{" "}
                            {selectedCheckboxItems.filter(item => item.checked).map(item => item.label).join(", ")}
                        </p>

                        <Dropdown
                            buttonText={selectedText}
                            items={selectedCheckboxItems.map(item => ({ label: item.label, checked: item.checked }))}
                            isCheckbox={false}
                            onSelectionChange={handleTextSelectionChange}
                        />

                        <p>Selected Text: {selectedText}</p>

                        <GroupSelector />

                    </div>
                    <div className={classes["content__elem-2"]}></div>
                    <div className={classes["content__elem-3"]}></div>
                    <div className={classes["content__elem-4"]}></div>
                </div>
                <button className={classes["open-card__btn"]} type="button" onClick={props.onClick}>
                    <PlusIcon />
                </button>
                <Button className={classes["send-btn"]} type="submit">
                    Send task
                </Button>
            </form>
        </div>
    );
};

export default ReadTaskCard;
