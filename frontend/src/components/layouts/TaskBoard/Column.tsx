import classes from "./Column.module.scss"
import {FC, useState} from "react";
import TaskCard from "ui/Card/TaskCard.tsx";

interface ColumnProps {
    title: string
    column: string
    cards: any
    setCards: any
}

const Column: FC<ColumnProps> = ({title, column, cards, setCards}) => {
    const [active, setActive] = useState(false);

    const filteredCards = cards.filter((c: any) => c.column === column);

    return (
        <div className={classes.column}>
            <div className={classes.column__title}>
                <h3>{title}</h3>
                <span>{cards.length}</span>
            </div>
            <div className={classes.column__items}>
                {filteredCards.map((c: any) => {
                    return <TaskCard key={c.id} {...c}/>
                })}
            </div>
        </div>
    )
}

export default Column