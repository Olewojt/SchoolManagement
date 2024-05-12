import { useEffect, useState } from "react";
import Column from "layouts/TaskBoard/Column.tsx";
import classes from "./Board.module.scss";
import Task from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import ProfileImg from "assets/images/Profile_student.png";

const Board = () => {
    const [cards, setCards] = useState<Task[]>([]);
    const [hasChecked, setHasChecked] = useState(false);

    useEffect(() => {
        hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards, hasChecked]);

    useEffect(() => {
        const cardData = localStorage.getItem("cards");

        setCards(cardData ? JSON.parse(cardData) : DEFAULT_CARDS);
        setHasChecked(true);
    }, []);

    return (
        <div className={classes.board}>
            <Column title="TO-DO" column="todo" cards={cards} setCards={setCards} />
            <Column title="DONE" column="done" cards={cards} setCards={setCards} />
            <Column title="ASSESSED" column="assessed" cards={cards} setCards={setCards} />
        </div>
    );
};

export default Board;

const DEFAULT_CARDS = [
    // ASSESSED
    {
        title: "Look into render bug in dashboard",
        id: "1",
        column: "assessed",
        subject: "UI/UX",
        date: "2024-03-20",
        description: "There's a recurring issue with rendering in the dashboard that needs investigation.",
        members: [
            {
                profileImg: ProfileImg,
                name: "Dejwid Jaasper",
                lider: true
            },
            {
                profileImg: ProfileImg,
                name: "Marcinek",
                lider: false
            }
        ]
    },
    {
        title: "SOX compliance checklist",
        id: "2",
        column: "assessed",
        subject: "Compliance",
        date: "2024-03-21",
        description: "Prepare a checklist to ensure compliance with SOX regulations.",
        members: [
            {
                profileImg: ProfileImg,
                name: "Goha Goha 3 złote",
                lider: false
            },
            {
                profileImg: ProfileImg,
                name: "Miśkaaaa",
                lider: false
            }
        ]
    },
    {
        title: "[SPIKE] Migrate to Azure",
        id: "3",
        column: "assessed",
        subject: "Cloud Computing",
        date: "2024-03-22",
        description: "Conduct a spike to explore the feasibility of migrating our infrastructure to Azure.",
        members: [
            {
                profileImg: ProfileImg,
                name: "Ryszard",
                lider: false
            },
            {
                profileImg: ProfileImg,
                name: "aha",
                lider: false
            }
        ]
    },
    {
        title: "Document Notifications service",
        id: "4",
        column: "assessed",
        subject: "Documentation",
        date: "2024-03-23",
        description: "Create comprehensive documentation for the Notifications service.",
        members: [
            {
                profileImg: ProfileImg,
                name: "Marcinek",
                lider: false
            },
            {
                profileImg: ProfileImg,
                name: "Miśkaaaa",
                lider: false
            }
        ]
    },
    {
        title: "Research DB options for new microservice",
        id: "5",
        column: "todo",
        date: "2024-03-24",
        subject: "Mathematics",
        description: "Investigate different database options suitable for the upcoming microservice.",
        members: [
            {
                profileImg: ProfileImg,
                name: "Goha Goha 3 złote",
                lider: false
            },
            {
                profileImg: ProfileImg,
                name: "aha",
                lider: false
            }
        ]
    },
    {title: "Postmortem for outage", id: "6", column: "todo", subject: "Incident Management", date: "2024-03-25"},
    {
        title: "Sync with product on Q3 roadmap",
        id: "7",
        column: "todo",
        subject: "Project Management",
        date: "2024-03-26"
    },

    // DONE
    {
        title: "Refactor context providers to use Zustand",
        id: "8",
        column: "done",
        subject: "Software Engineering",
        date: "2024-03-27",
        description: "Refactor the context providers in the application to utilize Zustand for state management.",
        members: [
            {
                profileImg: ProfileImg,
                name: "Ryszard",
                lider: false
            },
            {
                profileImg: ProfileImg,
                name: "Marcinek",
                lider: false
            }
        ]
    },
    {
        title: "Add logging to daily CRON",
        id: "9",
        column: "done",
        subject: "System Administration",
        date: "2024-03-28",
        description: "Implement logging functionality into the daily CRON job for better monitoring.",
        members: [
            {
                profileImg: ProfileImg,
                name: "aha",
                lider: false
            },
            {
                profileImg: ProfileImg,
                name: "Dejwid Jaasper",
                lider: true
            }
        ]
    },
    {
        title: "Set up DD dashboards for Lambda listener",
        id: "10",
        column: "done",
        subject: "DevOps",
        date: "2024-03-29",
        description: "Configure Datadog dashboards to monitor the Lambda listener performance.",
        members: [
            {
                profileImg: ProfileImg,
                name: "Miśkaaaa",
                lider: false
            },
            {
                profileImg: ProfileImg,
                name: "Goha Goha 3 złote",
                lider: false
            }
        ]
    },
    // Duplicate entries for demonstration
    {
        title: "Document Notifications service",
        id: "11",
        column: "assessed",
        subject: "Documentation",
        date: "2024-03-23",
        description: "Create comprehensive documentation for the Notifications service.",
        members: [
            {
                profileImg: ProfileImg,
                name: "Marcinek",
                lider: false
            },
            {
                profileImg: ProfileImg,
                name: "Miśkaaaa",
                lider: false
            }
        ]
    },
    {
        title: "Document Notifications service",
        id: "12",
        column: "assessed",
        subject: "Documentation",
        date: "2024-03-23",
        description: "Create comprehensive documentation for the Notifications service.",
        members: [
            {
                profileImg: ProfileImg,
                name: "Marcinek",
                lider: false
            },
            {
                profileImg: ProfileImg,
                name: "Miśkaaaa",
                lider: false
            }
        ]
    }
];
