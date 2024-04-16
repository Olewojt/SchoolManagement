import classes from "./Notifications.module.scss";
import React from "react";
import Message from "ui/Notifications/Message.tsx";
import Rainbow from "assets/images/Rainbow.png";
import {DUMMY_NOTIFICATIONS} from "api/Notifications.tsx";

interface NotificationsProps {
    children?: React.ReactNode;
    className?: string
}

const Notifications: React.FC<NotificationsProps> = (props: NotificationsProps) => {
    return (
        <div className={`${classes.notifications} ${props.className}`}>
            <div className={classes.notifications__content}>
                <h1>NOTIFICATIONS</h1>
                <div className={classes.notifications__content__messages}>
                    {
                        DUMMY_NOTIFICATIONS.map((message) =>
                            <Message
                                title={message.title}
                                date={message.date}
                                content={message.content}
                            />
                        )
                    }
                </div>
                <img src={Rainbow} alt="Rainbow" draggable="false"></img>
            </div>
        </div>
    )
}

export default Notifications;