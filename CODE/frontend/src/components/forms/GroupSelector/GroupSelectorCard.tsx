import React, { useState } from 'react';
import classes from "./GroupSelectorCard.module.scss";
import ProfileStudent from "assets/images/Profile_student.png";
import Button from "ui/Button/Button.tsx";

interface Member {
    id: number;
    firstName: string;
    lastName: string;
}

interface GroupSelectorCardProps {
    number: number;
    members: Member[];
    onClick: () => void;
}

const GroupSelectorCard: React.FC<GroupSelectorCardProps> = ({ number, members, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={classes["selector-card"]}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={ProfileStudent} alt="Profile"/>
            <span>Group {number + 1}</span>
            {/* Dodajemy onClick jako prop dla przycisku */}
            <Button type="button" className={classes.editButton} children="❌" onClick={onClick} />
            {isHovered && (
                <ul className={classes["members-list"]}>
                    {members.map(member => (
                        <li key={member.id}>{member.firstName} {member.lastName}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default GroupSelectorCard;
