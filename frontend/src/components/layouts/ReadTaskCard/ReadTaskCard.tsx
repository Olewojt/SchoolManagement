import classes from "./ReadTaskCard.module.scss";
import {GroupIcon, PlusIcon} from "assets/icons/Icon.tsx";
import UploadInput from "forms/UploadInput/UploadInput.tsx";
import Button from "ui/Button/Button.tsx";

import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import {FormEvent} from "react";
import {getUserTasks, updateTaskStatus} from "api/Task.tsx";
import {addTasks} from "state/tasks/tasksSlice.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";

const ReadTaskCard = (props: TaskCardInterface) => {
    const user = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");

        try {
            await updateTaskStatus(props.id);

            const updatedTasks = await getUserTasks(user.id);
            console.log('User tasks:', updatedTasks);
            dispatch(addTasks(updatedTasks));
        } catch (error) {
            console.error('Error updating task status or fetching user tasks:', error);
        }
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
                    {/*Tutaj dodać jeszcze trzeba takie rzezczy typu descirpiotn dla props itp*/}
                    <textarea value={props.description} className={classes["open-card__description"]} disabled={true}/>
                    <div className={classes["open-card__members--title"]}>
                        <GroupIcon className={classes["open-card__icon"]}/>
                        <h2>Project with:</h2>
                    </div>
                    <div className={classes["open-card__members"]}>
                        {props.members.map((member, index) => (
                            <div key={index} className={classes["open-card__members--profile"]}>
                                <img src="../../../assets/images/Profile_student.png"/>
                                <span>{member.firstName} {member.lastName}</span>
                            </div>
                        ))}
                    </div>
                    <div className={classes["open-card__upload-area"]}>
                        <UploadInput task={props.id} status={props.status}/>
                    </div>
                </div>
                <button className={classes["open-card__btn"]} type="button" onClick={props.onClick}>
                    <PlusIcon/>
                </button>
            </div>
            {props.status === "TO_DO" && user.role === "Student" &&
                <form onSubmit={onSubmit} className={classes["open-card__form"]}>
                    <Button className={classes["send-btn"]} type="submit">Send task</Button>
                </form>
            }
        </div>
    )
}

export default ReadTaskCard;