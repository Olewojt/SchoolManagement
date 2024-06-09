import Sidebar from "layouts/Sidebar/Sidebar.tsx";
import classes from "./Layout.module.scss"
import {Outlet} from "react-router-dom";
import BehindApi from "api/BehindApi.tsx";
import {useEffect} from "react";
import {decodeUserToken} from "@/axios-client.tsx";
import WebSocketService from "api/WebSocketService.ts";

let isDark = localStorage.getItem("isDark") === 'true'

if (isDark == null) {
    localStorage.setItem("isDark", 'false');
    isDark = false;
}

const Layout = () => {
    return (
        <Outlet/>
    )
}
export default Layout;

export const LayoutMain = () => {

    useEffect(() => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }

        const token = localStorage.getItem("BEARER_TOKEN");
        console.log("BIORE TOKEN")
        if (token) {
            console.log("DEKODUJE TOKEN")
            const email = decodeUserToken(token).email;
            const webSocketService = new WebSocketService(email);
            webSocketService.connect();

            return () => {
                webSocketService.disconnect();
            };
        }
    }, []);
    return (
        <main className={classes.student} data-theme={isDark ? "dark" : ""}>
            <Sidebar/>
            <Outlet/>

            <BehindApi/>
        </main>
    )
}

export const LayoutAuth = () => {
    return (
        <main data-theme={isDark ? "dark" : ""}>
            <Outlet/>
        </main>
    )
}
