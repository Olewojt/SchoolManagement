import {DragEvent} from "react";
import classes from "./Column.module.scss"
import {FC, useState} from "react";
import TaskCard from "ui/Card/TaskCard.tsx";
import DropIndicator from "layouts/TaskBoard/DropIndicator.tsx";
import AddCard from "layouts/TaskBoard/AddCard.tsx";

interface ColumnProps {
    title: string
    column: string
    cards: any[]
    setCards: any
}

const Column: FC<ColumnProps> = ({title, column, cards, setCards}) => {
    const [active, setActive] = useState(false);

    const handleDragStart = (e: DragEvent<HTMLDivElement>, card: any) => {
        e.dataTransfer.setData("cardId", card.id);
    }

    const filteredCards = cards.filter((c: any) => c.column === column);

    return (
        <div className={classes.column}>
            <div className={classes.column__title}>
                <h3>{title}</h3>
                <span>{cards.length}</span>
            </div>
            <div className={classes.column__items}>
                {filteredCards.map((c: any) => {
                    return <TaskCard key={c.id} {...c} handleDragStart={handleDragStart}/>
                })}
                <DropIndicator beforeId="-1" column={column}/>
                <AddCard/>
            </div>
        </div>
    )
}

export default Column