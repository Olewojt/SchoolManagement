import {FC} from "react";

interface DropInicatorProps {
    beforeId: string,
    column: string
}

const DropIndicator: FC<DropInicatorProps> = ({beforeId, column}) => {
    return (
        <div data-before={beforeId || "-1"} data-column={column}></div>
    )
}

export default DropIndicator