import React from 'react';
import duckImg from "src/assets/images/duck.png"

interface NotifyProps {
    notify: string;
}

const Notify: React.FC<NotifyProps> = (props) => {

    const notifyUser = () => {
        Notification.requestPermission().then(() => {
            new Notification('School Management', {
                body: props.notify,
                icon: duckImg
            });
        });
    };

    return (
        <button onClick={notifyUser}>Click me to notify</button>
    );
};

export default Notify;
