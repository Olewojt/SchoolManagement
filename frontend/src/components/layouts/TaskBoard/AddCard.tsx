import {FC, FormEvent, useState} from "react";
import AddButton from "ui/Button/AddButton.tsx";

interface AddCardProps {
    column: string,
    setCards: any
}

const AddCard: FC<AddCardProps> = ({column, setCards}) => {
    const [text, setTex] = useState("")
    const [adding, setAdding] = useState(false)

    const handleChange = () => {
        setAdding(prevState => !prevState)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!text.trim().length) return;
    }

    return (
        <>
            {adding
                ?   <form onSubmit={handleSubmit}>
                        <textarea />
                    <div>
                        <button>Close</button>
                        <button>Add</button>
                    </div>
                    </form>
                :   <AddButton type={"button"} onClick={handleChange}>Add Card</AddButton>
            }
        </>
    )
}

export default AddCard