import { useSelector } from "react-redux";
import { RootState } from "state/store.tsx";
import Column from "layouts/TaskBoard/Column.tsx";
import classes from "./Board.module.scss";
import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import SelectOptions from "forms/SelectOptions.tsx";
import AddCard from "ui/Card/TaskCard/AddCard.tsx";
import { useState } from "react";

function getSubjects(cards: TaskCardInterface[]): string[] {
    const subjectsSet = new Set<string>();
    cards.forEach(card => subjectsSet.add(card.subject));
    return Array.from(subjectsSet);
}

const Board = () => {
    const tasks = useSelector((state: RootState) => state.studentTasks.tasks);
    const subjects = getSubjects(tasks);

    const [selectedSubjects, setSelectedSubjects] = useState<{ [key: string]: boolean }>({});

    const onSubjectChange = (subject: string) => {
        const newSelectedSubjects = { ...selectedSubjects };
        newSelectedSubjects[subject] = !newSelectedSubjects[subject];
        setSelectedSubjects(newSelectedSubjects);
    };

    const filteredCards = tasks.map(card => {
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
            <div className={classes.headers}>
                <SelectOptions
                    name={"Subject"}
                    options={subjects}
                    onCheckboxChange={onSubjectChange}
                    checkedItems={selectedSubjects}
                    className={classes.headers__select}
                />
                <AddCard />
            </div>

            <div className={classes.board}>
                <Column title="TO-DO" status="TO_DO" cards={filteredCards} setCards={() => {}} />
                <Column title="DONE" status="DONE" cards={filteredCards} setCards={() => {}} />
                <Column title="GRADED" status="GRADED" cards={filteredCards} setCards={() => {}} />
            </div>
        </>
    );
};

export default Board;
