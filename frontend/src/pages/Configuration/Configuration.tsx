import Header from "ui/Header/Header.tsx";
import classes from './Configuration.module.scss'
import {Toggle} from "forms/Toggle.tsx";
import {useToggle} from "hooks/useToggle.tsx";
import {useEffect} from "react";

const Configuration = () => {
    let isDarkLocalStorage = localStorage.getItem("isDark") === 'true'
    let isNotifiedLocalStorage = localStorage.getItem("isNotified") === 'true'

    const [isDark, toggleDarkMode] = useToggle(isDarkLocalStorage) //Taki nowy hook napisany. Jest w folderze hooks
    const [isNotified, toggleNotifications] = useToggle(isNotifiedLocalStorage)

    useEffect(() => {
        if (isDarkLocalStorage != isDark) {
            localStorage.setItem("isDark", JSON.stringify(isDark))
            window.location.reload()
        }
    }, [isDark])

    useEffect(() => {
        if (isNotifiedLocalStorage != isNotified) {
            localStorage.setItem("isNotified", JSON.stringify(isNotified))
        }
    }, [isNotified])

    return (
        <main className={classes.home}>
            <Header value={'Account'}></Header>
            <Header value={'Look & Feel'}>
                <Toggle id={"dark-mode"} onChange={toggleDarkMode} checked={isDark} labelText={"Dark Mode"}></Toggle>
            </Header>
            <Header value={'Notifications'}>
                <Toggle id={"notifications"} onChange={toggleNotifications} checked={isNotified} labelText={"Notifications"}></Toggle>
            </Header>
        </main>
    )
}

export default Configuration