import Header from "ui/Header/Header.tsx";
import classes from './Configuration.module.scss'
import {Toggle} from "forms/Toggle.tsx";
import {useToggle} from "hooks/useToggle.tsx";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";

const Configuration = () => {
    const userData = useSelector((state: RootState) => state.userData)
    const isDarkLocalStorage = localStorage.getItem("isDark") === 'true'
    const isNotifiedLocalStorage = localStorage.getItem("isNotified") === 'true'
    const isAnimatedLocalStorage = localStorage.getItem("isAnimated") === 'true'

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
            <Header value={'Account'}>
                <div className={classes.account}>
                    <div className={classes.account__info}>
                        <h2>First Name: {userData.personalInfo.firstName ?? "N/A"}</h2>
                        <h2>Last Name: {userData.personalInfo.lastName ?? "N/A"}</h2>
                        <h2>City: {userData.personalInfo.city ?? "N/A"}</h2>
                        <h2>Street: {userData.personalInfo.street ?? "N/A"}</h2>
                        <h2>
                            <strong>Address:</strong> {userData.personalInfo.homeNumber ?? "N/A"}{userData.personalInfo.flatNumber ? `/${userData.personalInfo.flatNumber}` : ""}
                        </h2>
                    </div>
                </div>
            </Header>
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