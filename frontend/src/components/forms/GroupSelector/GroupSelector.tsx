import classes from "./GroupSelector.module.scss";
import Button from "ui/Button/Button.tsx";
import GroupSelectorCard from "forms/GroupSelector/GroupSelectorCard.tsx";

const GroupSelector = () => {
    const groups = [
        {
            "members": [
                {"id": 1, "name": "John Doe"},
                {"id": 2, "name": "Jane Smith"}
            ]
        },
        {
            "members": [
                {"id": 3, "name": "Alice Johnson"},
                {"id": 4, "name": "Bob Brown"}
            ]
        },
        {
            "members": [
                {"id": 5, "name": "Charlie Davis"},
                {"id": 6, "name": "Dave Wilson"},
                {"id": 6, "name": "Dave Wilson"},
                {"id": 6, "name": "Dave Wilson"},
                {"id": 6, "name": "Dave Wilson"},
                {"id": 6, "name": "Dave Wilson"},
                {"id": 6, "name": "Dave Wilson"},
                {"id": 6, "name": "Dave Wilson"}
            ]
        }
    ];

    return (
        <div className={classes.selector}>
            <div className={classes.selector__cards}>
                {groups.map((group, index) => (
                    <GroupSelectorCard key={index} number={index} members={group.members}/>
                ))}
            </div>
        </div>
    );
}

export default GroupSelector;
