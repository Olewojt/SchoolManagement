import classes from "./Notifications.module.scss";
import React, { useEffect, useState } from "react";
import Message from "layouts/Notifications/Message.tsx";
import Rainbow from "assets/images/Rainbow.png";
import { getNotifications } from "api/Notifications.tsx";
import { useSelector } from "react-redux";
import { RootState } from "state/store.tsx";
import {formatDate} from "utilitiesdateUtils.tsx/";
import DuckImg from "assets/images/duck.png"

interface NotificationsProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Notifications: React.FC<NotificationsProps> = (props: NotificationsProps) => {
    const user = useSelector((state: RootState) => state.login);
    const [notifications, setNotifications] = useState<any[]>([]);


    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const data = await getNotifications(user.id); // Fetch notifications data
                setNotifications(data); // Update state with fetched data
            } catch (error) {
                console.error("Failed to fetch notifications:", error);
            }
        };

        fetchNotifications();
    }, [user.id]);

    return (
        <div className={`${classes.notifications} ${props.className}`} style={props.style}>
            <img src={DuckImg} className={classes.duck} />
            <div className={classes.notifications__content}>
                <h1>NOTIFICATIONS</h1>
                <div className={classes.notifications__content__messages}>
                    {notifications.slice().reverse().map((message, index) => ( // Reverse the notifications array
                        <Message
                            key={index}
                            title={message.title}
                            date={formatDate(message.createdAt)}
                            content={message.content}
                        />
                    ))}
                </div>
                <img src={Rainbow} alt="Rainbow" draggable="false" />
            </div>
        </div>
    );
};

export default Notifications;
