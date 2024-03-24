import Header from "ui/Header/Header.tsx";
import classes from './Configuration.module.scss'
import {Toggle} from "forms/Toggle.tsx";
import {useToggle} from "hooks/useToggle.tsx";
const Configuration = () => {
    const [isDark, toggleDarkMode] = useToggle(false) //Taki nowy hook napisany. Jest w folderze hooks
    const [isTest, toggleTestMode] = useToggle(true)

    return (
        <main className={classes.home}>
            <Header value={'Account'}>
                <Toggle id={"dark-mode"} onChange={toggleDarkMode} checked={isDark} labelText={"Dark Mode"}></Toggle>
                <Toggle id={"test"} onChange={toggleTestMode} checked={isTest} labelText={"Test"}></Toggle>
            </Header>
            <Header value={'Look & Feel'}></Header>
            <Header value={'Notifications'}></Header>
        </main>
    )
}

export default Configuration