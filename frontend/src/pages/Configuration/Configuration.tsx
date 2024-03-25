import Header from "ui/Header/Header.tsx";
import classes from './Configuration.module.scss'
import {Toggle} from "forms/Toggle.tsx";
import {useToggle} from "hooks/useToggle.tsx";
import {useEffect} from "react";

const Configuration = () => {
    let isDarkLocalStorage = localStorage.getItem("isDark") === 'true'
    const [isDark, toggleDarkMode] = useToggle(isDarkLocalStorage) //Taki nowy hook napisany. Jest w folderze hooks

    useEffect(() => {
        if (isDarkLocalStorage != isDark) {
            localStorage.setItem("isDark", JSON.stringify(isDark))
            window.location.reload()
        }
    }, [isDark])
    return (
        <main className={classes.home}>
            <Header value={'Account'}>
                <Toggle id={"dark-mode"} onChange={toggleDarkMode} checked={isDark} labelText={"Dark Mode"}></Toggle>
            </Header>
            <Header value={'Look & Feel'}></Header>
            <Header value={'Notifications'}></Header>
        </main>
    )
}

export default Configuration