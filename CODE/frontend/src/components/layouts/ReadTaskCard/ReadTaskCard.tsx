import classes from "./ReadTaskCard.module.scss";
import { CloseIcon, GroupIcon, SingleIcon } from "assets/icons/Icon.tsx";
import UploadInput from "forms/UploadInput/UploadInput.tsx";
import Button from "ui/Button/Button.tsx";
import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import { FormEvent, useState } from "react";
import { getTeacherTasks, getUserTasks, taskGraded, taskGradeRemove, taskStatusDone, taskStatusTODO } from "api/Task.tsx";
import { addTasks } from "state/tasks/tasksSlice.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store.tsx";
import Dropdown from "forms/Dropdown/Dropdown.tsx";
import useAnimated from "hooks/useAnimated.tsx";
import ProfileImg from "assets/images/Profile_student.png"

const ReadTaskCard = (props: TaskCardInterface) => {
    const user = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    const grades = ["1", "2", "3", "4", "5"];
    const [selectedGrade, setSelectedGrade] = useState<number>();

    const isAnimated = useAnimated()
    const openCardClass = isAnimated ? `${classes["open-card"]} ${classes["open-card--active"]}` : classes["open-card"];

    const handleGradeChange = (item: number) => {
        setSelectedGrade(item);
        console.log("Selected grade:", item);
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        let updatedTasks;
        try {
            if (user.role === "Student") {
                if (props.status === "TO_DO") {
                    await taskStatusDone(props.id);
                } else if (props.status === "DONE") {
                    await taskStatusTODO(props.id);
                }
                updatedTasks = await getUserTasks(user.id);
            } else if (user.role === "Teacher") {
                if (selectedGrade !== undefined) {
                    await taskGraded(props.id, selectedGrade);
                    updatedTasks = await getTeacherTasks(user.id);
                    console.log(updatedTasks);
                } else if (props.status === "GRADED") {
                    await taskGradeRemove(props.id);
                    updatedTasks = await getTeacherTasks(user.id);
                    console.log(updatedTasks);
                } else {
                    console.error('Please select a grade for the task.');
                    return;
                }
            }
            console.log('User tasks:', updatedTasks);
            if (updatedTasks)
                dispatch(addTasks(updatedTasks));
        } catch (error) {
            console.error('Error updating task status or fetching user tasks:', error);
        }
    }

    return (
        <div className={openCardClass}>
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
                            <h2>{props.deadline}</h2>
                        </div>
                        <div className={classes["open-card__info-text"]}>
                            {props.className && user.role === "Teacher" &&
                                <>
                                    <h2>Class:</h2>
                                    <h2>{props.className}</h2>
                                </>
                            }
                        </div>
                    </div>
                    <textarea value={props.description} className={classes["open-card__description"]} disabled={true} />
                    <div className={classes["open-card__members--title"]}>
                        {props.members.length === 1 ? (
                            <>
                                <SingleIcon className={classes["open-card__icon"]} />
                                <h2>Single project:</h2>
                            </>
                        ) : (
                            <>
                                <GroupIcon className={classes["open-card__icon"]} />
                                <h2>Project with:</h2>
                            </>
                        )}
                    </div>
                    <div className={classes["open-card__members"]}>
                        {props.members.map((member, index) => (
                            <div key={index} className={classes["open-card__members--profile"]}>
                                <img src={ProfileImg} alt="Student Profile" />
                                <span>{member.firstName} {member.lastName}</span>
                            </div>
                        ))}
                    </div>
                    <div className={classes["open-card__upload-area"]}>
                        <UploadInput task={props.id} status={props.status} />
                    </div>
                    {user.role === "Teacher" && props.status === "DONE" &&
                        <Dropdown
                            buttonText={selectedGrade ? selectedGrade.toString() : "Select grade"}
                            items={grades.map(grade => ({ label: grade, checked: false }))}
                            isCheckbox={false}
                            onSelectionChange={handleGradeChange}
                            label={"CHOOSE A GRADE"}
                            className={classes["open-card__grade-task"]}
                        />
                    }
                    {props.grade &&
                        <div className={classes["open-card__grade-task"]} >
                            <h3>Task grade:</h3>
                            <p>{props.grade}</p>
                        </div>
                    }
                </div>
                <button className={classes["open-card__btn"]} type="button" onClick={props.onClick}>
                    <CloseIcon />
                </button>
            </div>
            {((props.status === "TO_DO" && user.role === "Student") || (props.status === "DONE" && user.role === "Student")) && (
                <form onSubmit={onSubmit} className={classes["open-card__form"]}>
                    <Button className={classes["send-btn"]} type="submit">
                        {props.status === "TO_DO" ? "Send Task" : "Undo Task"}
                    </Button>
                </form>
            )}

            {((props.status === "DONE" || props.status === "GRADED") && user.role === "Teacher") && (
                <form onSubmit={onSubmit} className={classes["open-card__form"]}>
                    <Button className={classes["send-btn"]} type="submit">
                        {props.status === "DONE" ? "Grade Task" : "Undo Grade"}
                    </Button>
                </form>
            )}

        </div>
    )
}

export default ReadTaskCard;
