import classes from "./ReadTaskCard.module.scss";
import {CrownIcon, GroupIcon, PlusIcon} from "assets/icons/Icon.tsx";
import Button from "ui/Button/Button.tsx";

import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import {ChangeEvent, useState} from "react";
const ReadTaskCard = (props: TaskCardInterface) => {
    const [form, setForm] = useState({
    })

    //To się przyda pod inputy
    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={classes["open-card"]}>
            <div className={classes["open-card__container"]}>
                <div className={classes["open-card__blank"]}></div>
                <div className={classes["content"]}>
                    <div className={classes["content__row-1"]}>

                    </div>
                    <div className={classes["content__row-2"]}>

                    </div>
                    <div className={classes["content__row-3"]}>

                    </div>
                    <div className={classes["content__row-1"]}>

                    </div>
                </div>
                <button className={classes["open-card__btn"]} type="button" onClick={props.onClick}>
                    <PlusIcon/>
                </button>
                <Button className={classes["send-btn"]} type="submit" children="Send task"></Button>
            </div>
        </div>
    )
}

export default ReadTaskCard;