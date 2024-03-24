import classes from "./Board.module.scss"
import {useState} from "react";
import Column from "layouts/TaskBoard/Column.tsx";

const Board = () => {
    const [cards, setCards] = useState(DEFAULT_CARDS)
    return (
        <div className={classes.board}>
            <Column title="TO-DO" column="todo" cards={cards} setCards={setCards}/>
            <Column title="DONE" column="done" cards={cards} setCards={setCards}/>
            <Column title="ASSESSED" column="assessed" cards={cards} setCards={setCards}/>
        </div>
    )
}

export default Board

const DEFAULT_CARDS = [
    // ASSESSED
    {title: "Look into render bug in dashboard", id: "1", column: "assessed", subject: "UI/UX", date: "2024-03-20"},
    {title: "SOX compliance checklist", id: "2", column: "assessed", subject: "Compliance", date: "2024-03-21"},
    {title: "[SPIKE] Migrate to Azure", id: "3", column: "assessed", subject: "Cloud Computing", date: "2024-03-22"},
    {title: "Document Notifications service", id: "4", column: "assessed", subject: "Documentation", date: "2024-03-23"},
    {title: "Document Notifications service", id: "4", column: "assessed", subject: "Documentation", date: "2024-03-23"},
    {title: "Document Notifications service", id: "4", column: "assessed", subject: "Documentation", date: "2024-03-23"},
    // TODO
    {
        title: "Research DB options for new microservice",
        id: "5",
        column: "todo",
        date: "2024-03-24",
        subject: "Mathematics"
    },
    {title: "Postmortem for outage", id: "6", column: "todo", subject: "Incident Management", date: "2024-03-25"},
    {title: "Sync with product on Q3 roadmap", id: "7", column: "todo", subject: "Project Management", date: "2024-03-26"},

    // DONE
    {
        title: "Refactor context providers to use Zustand",
        id: "8",
        column: "done",
        subject: "Software Engineering",
        date: "2024-03-27"
    },
    {title: "Add logging to daily CRON", id: "9", column: "done", subject: "System Administration", date: "2024-03-28"},

    {
        title: "Set up DD dashboards for Lambda listener",
        id: "10",
        column: "done",
        subject: "DevOps",
        date: "2024-03-29"
    },
];
