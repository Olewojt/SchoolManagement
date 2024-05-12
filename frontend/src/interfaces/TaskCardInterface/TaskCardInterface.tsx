import {DragEvent, MouseEventHandler} from "react";

interface TaskCardInterface {
    title: string;
    subject: string;
    date: string;

    members: Member[];
    description: string;

    id: string;
    column: string;
    handleDragStart: (e: DragEvent<HTMLDivElement>, data: TaskCardInterface) => void;

    onClick?: MouseEventHandler;
}

type Member = {
    profileImg: string;
    name: string;
    lider: boolean;
};

export default TaskCardInterface;