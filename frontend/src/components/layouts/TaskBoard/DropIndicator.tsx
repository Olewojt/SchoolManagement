import {FC} from "react";
import classes from "./Column.module.scss"

interface DropInicatorProps {
    beforeId: string,
    column: string
}

const DropIndicator: FC<DropInicatorProps> = ({beforeId, column}) => {
    return (
        <div className={classes.indicator} data-before={beforeId || "-1"} data-column={column}></div>
    )
}

export default DropIndicator