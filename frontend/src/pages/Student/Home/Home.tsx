import classes from "./Home.module.scss"
import {Toggle} from "forms/Toggle.tsx";
import {useState} from "react";
const Home = () => {
    const [isDark, setIsDark] = useState(true)
    const [isTest, setIsTest] = useState(false)
    const handleDarkMode = () => {
        setIsDark(prevState => !prevState)
    }
    const handleChangeTest = () => {
        setIsTest(prevState => !prevState)
    }
    return(
        <main className={classes.home}>
            <Toggle id={"dark-change"} onChange={handleDarkMode} checked={isDark} labelText={"Essunia"} />
            <Toggle id={"test"} onChange={handleChangeTest} checked={isTest} labelText={"Essunia"} />
        </main>
    )
}

export default Home;