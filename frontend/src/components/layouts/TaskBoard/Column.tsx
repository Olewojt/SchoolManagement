import classes from "./Column.module.scss"
import {FC, useState} from "react";

interface ColumnProps {
    title: string
    column: string
    cards: any
    setCards: any
}

const Column: FC<ColumnProps> = ({title, column, cards, setCards}) => {
    const [active, setActive] = useState(false);

    return (
        <div className={classes.column}>
            <div className={classes.column__title}>
                <h3>{title}</h3>
                <span>{cards.length}</span>
            </div>
            <div className={classes.column__items}>

            </div>
        </div>
    )
}

export default Column