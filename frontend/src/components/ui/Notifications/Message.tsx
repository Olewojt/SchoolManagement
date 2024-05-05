import classes from "./Message.module.scss";
import React from "react";

interface MessageProps {
    title: string;
    date: string;
    content: string;
    children?: React.ReactNode;
    className?: string
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
    return (
        <div className={`${classes.message} ${props.className}`}>
            <div className={classes.message__header}>
                <h4>{props.title}</h4>
                <h4>{props.date}</h4>
            </div>
            <div className={classes.message__content}>
                {props.content}
            </div>
        </div>
    )
}

export default Message;