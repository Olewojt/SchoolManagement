import React from "react";
import classes from "./GroupSelector.module.scss";
import GroupSelectorCard from "forms/GroupSelector/GroupSelectorCard.tsx";

interface Group {
    members: { id: number; firstName: string, lastName: string }[];
}

interface GroupSelectorProps {
    groups: Group[];
    onDeleteGroup: (index: number) => void;
}

const GroupSelector: React.FC<GroupSelectorProps> = ({ groups, onDeleteGroup }) => {
    return (
        <div className={classes.selector}>
            <div className={classes.selector__cards}>
                {groups && groups.map((group, index) => (
                    <GroupSelectorCard
                        key={index}
                        number={index}
                        members={group.members}
                        onClick={() => onDeleteGroup(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GroupSelector;
