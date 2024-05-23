import {DragEvent, MouseEventHandler} from "react";

interface TaskCardInterface {
    title: string;
    subject: string;
    date: string;

    members: Member[];
    description: string;

    id: string;
    status: string;
    handleDragStart?: (e: DragEvent<HTMLDivElement>, data: TaskCardInterface) => void;

    onClick?: MouseEventHandler;

    style?: any;
    isSelected?: boolean;
}

type Member = {
    profileImg: string;
    firstName: string;
    lastName: string;
};

export default TaskCardInterface;