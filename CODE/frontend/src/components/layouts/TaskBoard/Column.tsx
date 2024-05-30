import React, {DragEvent, FC} from "react";
import TaskCard from "ui/Card/TaskCard/TaskCard.tsx";
import DropIndicator from "layouts/TaskBoard/DropIndicator.tsx";
import classes from "./Column.module.scss";
import Task from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";

interface ColumnProps {
    title: string;
    status: string;
    cards: Task[];
    setCards: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Column: FC<ColumnProps> = ({title, status, cards}) => {
    const filteredCards = cards.filter((c: Task) => c.status === status);

    return (
        <div className={classes.column}>
            <div className={classes.column__title}>
                <h3>{title}</h3>
                <span>{filteredCards.length}</span>
            </div>
            <div
                // onDragOver={handleDragOver}
                // onDragLeave={handleDragLeave}
                // onDrop={handleDragEnd}
                className={classes.column__items}
            >
                {filteredCards
                    .filter((c) => c.isSelected)
                    .map((c) => (
                        <TaskCard
                            key={c.id}
                            {...c}
                            title={c.title}
                            subject={c.subject}
                            date={c.date}
                            members={c.members}
                            description={c.description}
                        />
                    ))
                }

                <DropIndicator beforeId="-1" status={status}/>
            </div>
        </div>
    );
};

export default Column;