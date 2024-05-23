import classes from "./ReadTaskCard.module.scss";
import {GroupIcon, PlusIcon} from "assets/icons/Icon.tsx";
import UploadInput from "forms/UploadInput/UploadInput.tsx";
import Button from "ui/Button/Button.tsx";

import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import {FormEvent, useState} from "react";

const ReadTaskCard = (props: TaskCardInterface) => {
    const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: number }[]>([]);

    const handleFilesUploaded = (files: { name: string; size: number }[]) => {
        setUploadedFiles(prevFiles => [...prevFiles, ...files]);
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Uploaded files:", uploadedFiles);
    }

    return (
        <div className={classes["open-card"]}>
            <div className={classes["open-card__container"]}>
                <div className={classes["open-card__blank"]}></div>
                <div className={classes["open-card__content"]}>
                    <h1 className={classes["open-card__title"]}>{props.title}</h1>
                    <div className={classes["open-card__info"]}>
                        <div className={classes["open-card__info-text"]}>
                            <h2>SUBJECT:</h2>
                            <h2>{props.subject}</h2>
                        </div>
                        <div className={classes["open-card__info-text"]}>
                            <h2>DUE DATE:</h2>
                            <h2>{props.date}</h2>
                        </div>
                        <div className={classes["open-card__info-text"]}>
                            <h2>DATE?:</h2>
                            <h2>{props.date}</h2>
                        </div>
                    </div>
                    <textarea value={props.description} className={classes["open-card__description"]} disabled={true}/>
                    <div className={classes["open-card__members--title"]}>
                        <GroupIcon className={classes["open-card__icon"]}/>
                        <h2>Project with:</h2>
                    </div>
                    <div className={classes["open-card__members"]}>
                        {props.members.map((member, index) => (
                            <div key={index} className={classes["open-card__members--profile"]}>
                                <img src="src/assets/images/Profile_student.png"/>
                                <span>{member.firstName} {member.lastName}</span>
                            </div>
                        ))}
                    </div>
                    <div className={classes["open-card__upload-area"]}>
                        <UploadInput onFilesUploaded={handleFilesUploaded}/>
                    </div>
                </div>
                <button className={classes["open-card__btn"]} type="button" onClick={props.onClick}>
                    <PlusIcon/>
                </button>
            </div>
            <form onSubmit={onSubmit} className={classes["open-card__form"]}>
                <Button className={classes["send-btn"]} type="submit">Send task</Button>
            </form>
        </div>
    )
}

export default ReadTaskCard;
