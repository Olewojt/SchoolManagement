import {useState} from "react";
import AddButton from "ui/Button/AddButton.tsx";
import UploadTaskCard from "layouts/UploadTaskCard/UploadTaskCard.tsx";
import classes from "ui/Card/TaskCard/TaskCard.module.scss";
import useAnimated from "hooks/useAnimated.tsx";


const AddCard = () => {
    const [adding, setAdding] = useState(false)
    const isAnimated = useAnimated()

    const handleChange = () => {
        setAdding(prevState => !prevState)
    }

    const handleActive = () => {
        setAdding(false);
    }

    const activeBackgroundClass = isAnimated ? classes.background + " " + classes["background--active-anime"] : classes.background + " " + classes["background--active"];

    return (
        <>
            {adding
                ?
                <>
                    <div className={activeBackgroundClass}></div>
                    <UploadTaskCard onClick={handleActive}/>
                </>
                : <AddButton type={"button"} onClick={handleChange}>ADD TASK</AddButton>
            }
        </>
    )
}

export default AddCard