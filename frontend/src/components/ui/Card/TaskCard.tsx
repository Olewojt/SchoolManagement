import {DragEvent, FormEvent, MouseEventHandler, useState} from "react";
import classes from "./TaskCard.module.scss";
import {AttachmentIcon, CrownIcon, GroupIcon, PlusIcon} from "assets/icons/Icon.tsx";
import DropIndicator from "layouts/TaskBoard/DropIndicator.tsx";
import Button from "ui/Button/Button.tsx";

interface CardInterface {
    title: string;
    subject: string;
    date: string;

    members: Member[];

    id: string;
    column: string;
    handleDragStart: (e: DragEvent<HTMLDivElement>, data: { title: string, id: string, column: string }) => void;

    onClick?: MouseEventHandler;
}

type Member = {
    profileImg: string;
    name: string;
    lider: boolean;
};

const TaskCard = (props: CardInterface) => {
    const [active, setActive] = useState(false)
    const formattedDate = new Date(props.date).toLocaleDateString(); // Formatowanie daty

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleActive = () => {
        setActive(prevState => !prevState)
    }

    return (
        <>
            <DropIndicator beforeId={props.id} column={props.column}/>
            <div draggable="true"
                 onDragStart={(e) => props.handleDragStart(e, {title: props.title, id: props.id, column: props.column})}
                 className={classes.card}>
                <GroupIcon className={classes.card__icon}/>
                <h1 className={classes.card__title}>{props.title}</h1>
                <div className={classes.card__info}>
                    <h2>Subject <span>{props.subject}</span></h2>
                    <h2>Due Date <span>{formattedDate}</span></h2>
                </div>
                <button className={classes.card__btn} type="button" onClick={handleActive}>
                    <PlusIcon/>
                </button>
            </div>
            {active && <div className={classes.background}></div>}
            {/*TODO: będzie można tutaj coś kombinwować z nowym komponenetem dla Studenta/Nauczyciela*/}
            {active
                && <div className={classes["open-card"]}>
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
                                    <h2>SUBJECT:</h2>
                                    <h2>{props.date}</h2>
                                </div>
                                <div className={classes["open-card__info-text"]}>
                                    <h2>SUBJECT:</h2>
                                    <h2>{props.date}</h2>
                                </div>
                            </div>
                            {/*Tutaj dodać jeszcze trzeba takie rzezczy typu descirpiotn dla props itp*/}
                            <h3 className={classes["open-card__description"]}>Pewnego dnia, mały Wojtek znalazł w stawie
                                kaczkę wykałaczkę. Była mała, pomarańczowa i miała wesołe, krzykliwe piórka. Wojtek był
                                zachwycony! Postanowił zabrać ją do domu. Nazwał ją Kaczorem Wykałaczorem. Razem
                                spędzali dni na przygodach: pływali po kałużach, zbierali kamyki i słuchali szumu drzew.
                                Kaczor Wykałaczor stał się dla Wojtka najlepszym przyjacielem. Każdego wieczoru usypiali
                                razem, snując marzenia o kolejnych wspólnych przygodach. Ich przyjaźń była jak magiczna
                                opowieść, która trwała wiecznie.</h3>
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
                            <button className={classes["open-card__send-btn"]}>
                                <AttachmentIcon/> &nbsp; Add attachment
                            </button>
                        </div>
                        <button className={classes["open-card__btn"]} type="button" onClick={handleActive}>
                            <PlusIcon/>
                        </button>
                        <Button type="submit" children="Send task"></Button>
                    </div>
                </div>
            }
        </>
    );
}

export default TaskCard;
