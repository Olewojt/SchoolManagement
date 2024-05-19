import { useEffect, useState } from "react";
import Column from "layouts/TaskBoard/Column.tsx";
import classes from "./Board.module.scss";
import Task from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import SelectOptions from "forms/SelectOptions.tsx";
import {DEFAULT_CARDS} from "api/Task.tsx";

function getSubjects(cards: Task[]): string[] {
    const subjectsSet = new Set<string>();
    cards.forEach(card => subjectsSet.add(card.subject));
    return Array.from(subjectsSet);
}

const Board = () => {
    const subjects = getSubjects(DEFAULT_CARDS)

    const [cards, setCards] = useState<Task[]>([]);
    const [hasChecked, setHasChecked] = useState(false);
    const [selectedSubjects, setSelectedSubjects] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards, hasChecked]);

    useEffect(() => {
        const cardData = localStorage.getItem("cards");
        setCards(cardData ? JSON.parse(cardData) : DEFAULT_CARDS);
        setHasChecked(true);
    }, []);

    const onSubjectChange = (subject: string) => {
        const newSelectedSubjects = { ...selectedSubjects };
        newSelectedSubjects[subject] = !newSelectedSubjects[subject];
        setSelectedSubjects(newSelectedSubjects);
    };

    const filteredCards = cards.map(card => {
        if (Object.keys(selectedSubjects).length === 0 || Object.values(selectedSubjects).every(value => !value)) {
            return { ...card, isSelected: true };
        } else {
            if (selectedSubjects[card.subject]) {
                return { ...card, isSelected: true };
            } else {
                return { ...card, isSelected: false };
            }
        }
    });


    return (
        <>
            <div className={classes.filters}>
                {/* SelectOptions component for selecting subjects */}
                <SelectOptions name={"Subject"} options={subjects} onCheckboxChange={onSubjectChange} checkedItems={selectedSubjects}/>
            </div>

            <div className={classes.board}>
                {/* Render columns with filtered cards */}
                <Column title="TO-DO" column="todo" cards={filteredCards} setCards={setCards}/>
                <Column title="DONE" column="done" cards={filteredCards} setCards={setCards}/>
                <Column title="ASSESSED" column="assessed" cards={filteredCards} setCards={setCards}/>
            </div>
        </>
    );
};

export default Board;


