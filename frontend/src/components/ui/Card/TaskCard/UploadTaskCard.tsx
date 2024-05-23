import {useState, ChangeEvent, MouseEventHandler} from "react";
import classes from "./UploadTaskCard.module.scss";
import {PlusIcon} from "assets/icons/Icon.tsx";
import Button from "ui/Button/Button.tsx";
import Input from "forms/Input.tsx";
import Dropdown from "forms/Dropdown/Dropdown.tsx";
import GroupSelector from "forms/GroupSelector/GroupSelector.tsx";
import TextArea from "forms/TextArea.tsx";
import SelectButton from "ui/Button/SelectButton.tsx";

interface UploadTaskCard {
    onClick?: MouseEventHandler;
}

const UploadTaskCard = (props: UploadTaskCard) => {
    const [form, setForm] = useState<{ [key: string]: string }>({});
    const [selectedCheckboxItems, setSelectedCheckboxItems] = useState([
        {label: "David Jasper", checked: false},
        {label: "Maciej Złomży", checked: false},
        {label: "Krzysztof Wykałaczka", checked: false},
        {label: "Bartosz Psikuta", checked: false},
        {label: "Option 5", checked: false},
        {label: "Option 6", checked: false},
        {label: "Option 7", checked: false},
    ]);
    const [selectedText, setSelectedText] = useState("Select Option");

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
                    <div className={classes["content__elem--1"]}>

                        <Input
                            type={"text"}
                            placeholder={"Task Name"}
                            label={"TASK NAME"}
                            name={"taskName"}
                            onChange={handleForm}
                            className={classes["content__input--1"]}
                        />
                        <Input
                            type={"date"}
                            placeholder={"Due Date"}
                            label={"DUE DATE"}
                            name={"dueDate"}
                            onChange={handleForm}
                            className={classes.content__input}
                        />

                    </div>
                    <div className={classes["content__elem--2"]}>
                        <Dropdown
                            buttonText={selectedText}
                            items={selectedCheckboxItems.map(item => ({label: item.label, checked: item.checked}))}
                            isCheckbox={false}
                            onSelectionChange={handleTextSelectionChange}
                            label={"SUBJECT"}
                        />
                        <Dropdown
                            buttonText={selectedText}
                            items={selectedCheckboxItems.map(item => ({label: item.label, checked: item.checked}))}
                            isCheckbox={false}
                            onSelectionChange={handleTextSelectionChange}
                            label={"CLASS"}
                        />

                    </div>
                    <div className={classes["content__elem--3"]}>
                        <TextArea placeholder={"Description"} label={"DESCRIPTION"}
                                  className={classes.content__textarea}/>
                    </div>
                    <div className={classes["content__elem--4"]}>
                        <div>
                            <SelectButton group={false}/>
                            <SelectButton group={true}/>
                        </div>

                        <div>
                            <Dropdown
                                buttonText="Select Options"
                                items={selectedCheckboxItems}
                                isCheckbox={true}
                                onSelectionChange={handleCheckboxSelectionChange}
                                label={"MEMBERS"}
                            />
                            <Button type={"button"} children={"Add Group"} className={classes.content__addBtn}/>
                        </div>

                        <GroupSelector/>
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
