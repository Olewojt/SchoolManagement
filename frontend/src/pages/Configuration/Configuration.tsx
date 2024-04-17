import Header from "ui/Header/Header.tsx";
import classes from './Configuration.module.scss'
import {Toggle} from "forms/Toggle.tsx";
import {useToggle} from "hooks/useToggle.tsx";
import {useEffect} from "react";

const Configuration = () => {
    let isDarkLocalStorage = localStorage.getItem("isDark") === 'true'
    let isNotifiedLocalStorage = localStorage.getItem("isNotified") === 'true'
    let isAnimatedLocalStorage = localStorage.getItem("isAnimated") === 'true'

    const [isDark, toggleDarkMode] = useToggle(isDarkLocalStorage) //Taki nowy hook napisany. Jest w folderze hooks
    const [isNotified, toggleNotifications] = useToggle(isNotifiedLocalStorage)
    const [isAnimated, toggleAnimations] = useToggle(isAnimatedLocalStorage)

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

    useEffect(() => {
        if (isAnimatedLocalStorage != isAnimated) {
            localStorage.setItem("isAnimated", JSON.stringify(isAnimated))
        }
    }, [isDark])

    return (
        <main className={classes.home}>
            <Header value={'Account'}></Header>
            <Header value={'Look & Feel'}>
                <Toggle id={"dark-mode"} onChange={toggleDarkMode} checked={isDark} labelText={"Dark Mode"}></Toggle>
                <Toggle id={"animations"} onChange={toggleAnimations} checked={isAnimated} labelText={"Animations"}></Toggle>
            </Header>
            <Header value={'Notifications'}>
                <Toggle id={"notifications"} onChange={toggleNotifications} checked={isNotified} labelText={"Notifications"}></Toggle>
            </Header>
        </main>
    )
}

export default Configuration