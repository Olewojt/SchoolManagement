import React from "react";
import classes from "./LastTaskCard.module.scss";

interface LastTaskCardProps {
    className?: string;
}

const LastTaskCard: React.FC<LastTaskCardProps> = (props) => {
    return (
        <section className={`${classes["last-task"]} ${props.className}`}>
            <div className={classes["card"]}>
                <h3 className={classes["card__header"]}>Last task</h3>
                <h1 className={classes["card__title"]}>Krzyś i jego zaginiona kaczka - czyli co z czym się je</h1>
                <h3 className={classes["card__subject"]}>Subject:</h3>
                <h3 className={classes["card__subject--value"]}>Biologia</h3>
                <h3 className={classes["card__due-date"]}>Due date:</h3>
                <h3 className={classes["card__due-date--value"]}>2024-12-12</h3>
                <h3 className={classes["card__date"]}>2024-12-01</h3>
            </div>
        </section>
    );
}

export default LastTaskCard;
