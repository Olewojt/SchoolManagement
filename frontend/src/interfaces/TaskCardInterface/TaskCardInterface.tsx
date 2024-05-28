import { DragEvent, MouseEventHandler } from "react";

interface TaskCardInterface {
    title: string;
    subject: string;
    date: string;
    grade?: number;

    members: Member[];
    description: string;

    id: number;
    status: string;
    handleDragStart?: (e: DragEvent<HTMLDivElement>, data: TaskCardInterface) => void;

    onClick?: MouseEventHandler;

    style?: any;
    isSelected?: boolean;

    className?: string;
}

interface Member {
    id: number;
    firstName: string;
    lastName: string;
}


export default TaskCardInterface;