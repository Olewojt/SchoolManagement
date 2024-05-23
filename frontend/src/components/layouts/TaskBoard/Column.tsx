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
    const handleDragStart = (e: DragEvent<HTMLDivElement>, card: Task): void => {
        e.dataTransfer.setData("cardId", card.id);
    };

    // const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    //     e.preventDefault();
    //     highlightIndicator(e);
    // };

    const highlightIndicator = (e: DragEvent<HTMLDivElement>): void => {
        const indicators: Element[] = getIndicators();
        clearHighlight(indicators);
        const el = getNearestIndicator(e, indicators);
        (el.element as HTMLElement).style.opacity = "1";
    };

    const clearHighlight = (els?: Element[]): void => {
        const indicators = els || getIndicators();

        indicators.forEach((i) => {
            (i as HTMLElement).style.opacity = "0";
        });
    };

    const getNearestIndicator = (
        e: DragEvent<HTMLDivElement>,
        indicators: Element[]
    ): { offset: number; element: Element } => {
        const DISTANCE_OFFSET: number = 50;

        const el = indicators.reduce(
            (closest, child) => {
                const box = (child as HTMLElement).getBoundingClientRect();
                const offset = e.clientY - (box.top + DISTANCE_OFFSET);

                if (offset < 0 && offset > closest.offset) {
                    return {offset: offset, element: child};
                } else {
                    return closest;
                }
            },
            {
                offset: Number.NEGATIVE_INFINITY,
                element: indicators[indicators.length - 1],
            }
        );

        return el;
    };

    const getIndicators = (): Element[] => {
        return Array.from(document.querySelectorAll(`[data-column="${status}"]`));
    };

    // const handleDragLeave = (): void => {
    //     clearHighlight();
    // };
    //
    // const handleDragEnd = (e: DragEvent<HTMLDivElement>): void => {
    //     clearHighlight();
    //
    //     const cardId = e.dataTransfer.getData("cardId");
    //     const indicators = getIndicators();
    //     const {element} = getNearestIndicator(e, indicators);
    //
    //     const before = (element as HTMLElement).dataset.before || "-1";
    //     if (before !== cardId) {
    //         let copy = [...cards];
    //
    //         let cardToTransfer = copy.find((c) => c.id === cardId);
    //
    //         if (!cardToTransfer) return;
    //
    //         cardToTransfer = {...cardToTransfer, column};
    //
    //         copy = copy.filter((c) => c.id !== cardId);
    //
    //         const moveToBack = before === "-1";
    //
    //         if (moveToBack) {
    //             copy.push(cardToTransfer);
    //         } else {
    //             const insertAtIndex = copy.findIndex((el) => el.id === before);
    //             if (insertAtIndex === undefined) return;
    //
    //             copy.splice(insertAtIndex, 0, cardToTransfer);
    //         }
    //
    //         setCards(copy);
    //     }
    // };

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
                            handleDragStart={handleDragStart}
                        />
                    ))
                }

                <DropIndicator beforeId="-1" status={status}/>
            </div>
        </div>
    );
};

export default Column;