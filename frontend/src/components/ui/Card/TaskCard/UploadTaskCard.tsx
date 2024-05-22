import classes from "./ReadTaskCard.module.scss";
import {PlusIcon} from "assets/icons/Icon.tsx";
import Button from "ui/Button/Button.tsx";
import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import {ChangeEvent, useState} from "react";
import Input from "forms/Input.tsx";
import Dropdown from "forms/Dropdown/Dropdown.tsx";
import DropdownItem from "forms/Dropdown/DropdownItem.tsx";

const ReadTaskCard = (props: TaskCardInterface) => {
    const [form, setForm] = useState({})

    //To się przyda pod inputy
    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const items = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div className={classes["open-card"]}>
            <form className={classes["open-card__container"]}>
                <div className={classes["open-card__blank"]}></div>
                <div className={classes["content"]}>
                    <div className={classes["content__row-1"]}>
                        <Input type={"text"} placeholder={"Task Name"} label={"TASK NAME"}/>
                        <Input type={"text"} placeholder={"Task Name"} label={"DUE DATE"}/>
                        <Dropdown buttonText="Select Option" content={
                            <>
                                {items.map((item) => (
                                    <DropdownItem key={item}>
                                        {`Item ${item}`}
                                    </DropdownItem>
                                ))}
                            </>
                        }/>

                    </div>
                    <div className={classes["content__row-2"]}>
                        {/* Dodajemy komponent Dropdown tutaj */}
                    </div>
                    <div className={classes["content__row-3"]}>

                    </div>
                    <div className={classes["content__row-4"]}>

                    </div>
                </div>
                <button className={classes["open-card__btn"]} type="button" onClick={props.onClick}>
                    <PlusIcon/>
                </button>
                <Button className={classes["send-btn"]} type="submit" children="Send task"></Button>
            </form>
        </div>
    )
}

export default ReadTaskCard;
