import { useState, useEffect } from 'react';
import classes from "./Loading.module.scss";

const messages = [
    "The application is loading...",
    "Please wait a moment...",
    "Almost there..."
];

const Loading = () => {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.loadingContainer}>
            <div className={classes.loader}></div>
            <p className={classes.text}>{messages[messageIndex]}</p>
        </div>
    );
};

export default Loading;
