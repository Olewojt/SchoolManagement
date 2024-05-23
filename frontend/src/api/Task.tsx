import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import ProfileImg from "assets/images/Profile_student.png";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import axiosClient from "@/axios-client.tsx";

export async function getUserTasks(userId: number): Promise<TaskCardInterface[]> {
    try {
        const response: AxiosResponse<TaskCardInterface[], AxiosRequestConfig> = await axiosClient.get<TaskCardInterface[]>(`/api/v1/tasks/assigned/info/${userId}`);
        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error fetching user tasks:', error);
        throw error;
    }
}


export const DEFAULT_CARDS: TaskCardInterface[] = [
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
                name: "Dejwid Jaasper"
            },
            {
                profileImg: ProfileImg,
                name: "Marcinek"
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
                name: "Goha Goha 3 złote"
            },
            {
                profileImg: ProfileImg,
                name: "Miśkaaaa"
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
                name: "Ryszard"
            },
            {
                profileImg: ProfileImg,
                name: "aha"
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
                name: "Marcinek"
            },
            {
                profileImg: ProfileImg,
                name: "Miśkaaaa"
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
                name: "Goha Goha 3 złote"
            },
            {
                profileImg: ProfileImg,
                name: "aha"
            }
        ]
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
                name: "Ryszard"
            },
            {
                profileImg: ProfileImg,
                name: "Marcinek"
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
                name: "aha"
            },
            {
                profileImg: ProfileImg,
                name: "Dejwid Jaasper"
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
                name: "Miśkaaaa"
            },
            {
                profileImg: ProfileImg,
                name: "Goha Goha 3 złote"
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
                name: "Marcinek"
            },
            {
                profileImg: ProfileImg,
                name: "Miśkaaaa"
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
                name: "Marcinek"
            },
            {
                profileImg: ProfileImg,
                name: "Miśkaaaa"
            }
        ]
    }
];
