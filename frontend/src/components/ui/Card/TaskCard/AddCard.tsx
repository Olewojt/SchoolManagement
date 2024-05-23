import {FormEvent, useState} from "react";
import AddButton from "ui/Button/AddButton.tsx";
import UploadTaskCard from "ui/Card/TaskCard/UploadTaskCard.tsx";
import classes from "ui/Card/TaskCard/TaskCard.module.scss";



const AddCard = () => {
    const [text, setText] = useState("")
    const [adding, setAdding] = useState(false)

    const handleChange = () => {
        setAdding(prevState => !prevState)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!text.trim().length) return;

        const newCard = {
            title: text.trim(),
            id: Math.random().toString(),
        };

        setAdding(false);
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