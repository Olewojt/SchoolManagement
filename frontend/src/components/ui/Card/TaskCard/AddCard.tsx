import {useState} from "react";
import AddButton from "ui/Button/AddButton.tsx";
import UploadTaskCard from "layouts/UploadTaskCard/UploadTaskCard.tsx";
import classes from "ui/Card/TaskCard/TaskCard.module.scss";


const AddCard = () => {
    const [adding, setAdding] = useState(false)

    const handleChange = () => {
        setAdding(prevState => !prevState)
    }

    const handleActive = () => {
        setAdding(false);
    }

    return (
        <>
            {adding
                ?
                <>
                    <div className={classes.background}></div>
                    <UploadTaskCard onClick={handleActive}/>
                </>
                : <AddButton type={"button"} onClick={handleChange}>Add Card</AddButton>
            }
        </>
    )
}

export default AddCard