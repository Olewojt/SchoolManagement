import {FC, FormEvent, useState} from "react";
import AddButton from "ui/Button/AddButton.tsx";

interface AddCardProps {
    column: string,
    setCards: any
}

const AddCard: FC<AddCardProps> = ({column, setCards}) => {
    const [text, setText] = useState("")
    const [adding, setAdding] = useState(false)

    const handleChange = () => {
        setAdding(prevState => !prevState)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!text.trim().length) return;

        const newCard = {
            column,
            title: text.trim(),
            id: Math.random().toString(),
        };

        setCards((pv: any) => [...pv, newCard]);

        setAdding(false);
    }

    return (
        <>
            {adding
                ?   <form onSubmit={handleSubmit}>
                        <textarea onChange={(e) => setText(e.target.value)} />
                    <div>
                        <button>Close</button>
                        <AddButton type={"submit"}>Add Card</AddButton>
                    </div>
                    </form>
                :   <AddButton type={"button"} onClick={handleChange}>Add Card</AddButton>
            }
        </>
    )
}

export default AddCard