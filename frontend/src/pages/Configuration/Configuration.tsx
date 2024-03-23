import Header from "ui/Header/Header.tsx";
import classes from './Configuration.module.scss'
import {Toggle} from "forms/Toggle.tsx";
const Configuration = () => {
    return (
        <main className={classes.home}>
            <Header value={'Account'}>
                <Toggle id={"test"} onChange={() => console.log('sa')} checked={true} labelText={"Dark"}></Toggle>
            </Header>
            <Header value={'Look & Feel'}></Header>
            <Header value={'Notifications'}></Header>
        </main>
    )
}

export default Configuration