import {FC} from "react";
import classes from "./Column.module.scss"

interface DropInicatorProps {
    beforeId: number,
    status: string
}

const DropIndicator: FC<DropInicatorProps> = ({beforeId, status}) => {
    return (
        <div className={classes.indicator} data-before={beforeId || "-1"} data-column={status}></div>
    )
}

export default DropIndicator