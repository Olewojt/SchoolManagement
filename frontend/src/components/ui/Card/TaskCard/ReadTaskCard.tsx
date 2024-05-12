import classes from "./ReadTaskCard.module.scss";
import {CrownIcon, GroupIcon, PlusIcon} from "assets/icons/Icon.tsx";
import UploadInput from "forms/UploadInput/UploadInput.tsx";
import Button from "ui/Button/Button.tsx";

import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
const ReadTaskCard = (props: TaskCardInterface) => {
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
                                {member.lider &&
                                    <CrownIcon className={classes["open-card__members--lider"]}/>}

                                <img src={member.profileImg}/>
                                <span>{member.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className={classes["open-card__upload-area"]}>
                        <UploadInput/>
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