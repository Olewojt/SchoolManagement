import { useDispatch } from "react-redux";
import { addGrade } from "state/grades/gradeSlice";
import {useEffect} from "react";

//TODO: Narazie jest to wywoływane w <Home/>, ale przy pobieraniu z axiosa i używaniu async trzeba sprawdzić czy można bez tego exporta ;D
const Grades = () => {
    const dispatch = useDispatch();

    const saveGrades = () => {
        DUMMY_GRADES.forEach(gradeData => {
            dispatch(addGrade(gradeData));
        });
    };

    useEffect(() => {
        saveGrades();
    }, []);

    return null;
}

export default Grades;

export interface Grade {
    grade: number;
    gradedAt: Date;
}
export interface SubjectsGrades {
    subjectName: string;
    grades: Grade[];
}

export const DUMMY_GRADES: SubjectsGrades[] = [
    {
        "subjectName": "Physics",
        "grades": [
            {"grade": 4, "gradedAt": new Date("2024-04-10")},
            {"grade": 3, "gradedAt": new Date("2024-04-25")},
            {"grade": 5, "gradedAt": new Date("2024-05-08")}
        ]
    },
    {
        "subjectName": "Religion",
        "grades": [
            {"grade": 1, "gradedAt": new Date("2024-03-28")},
            {"grade": 2, "gradedAt": new Date("2024-04-15")}
        ]
    },
    {
        "subjectName": "History",
        "grades": [
            {"grade": 3, "gradedAt": new Date("2024-05-02")},
            {"grade": 4, "gradedAt": new Date("2024-05-10")}
        ]
    },
    {
        "subjectName": "Geography",
        "grades": [
            {"grade": 5, "gradedAt": new Date("2024-04-15")},
            {"grade": 3, "gradedAt": new Date("2024-04-30")}
        ]
    },
    {
        "subjectName": "Chemistry",
        "grades": [
            {"grade": 4, "gradedAt": new Date("2024-04-19")},
            {"grade": 5, "gradedAt": new Date("2024-05-05")}
        ]
    },
    {
        "subjectName": "Biology",
        "grades": [
            {"grade": 4, "gradedAt": new Date("2024-04-25")},
            {"grade": 3, "gradedAt": new Date("2024-05-12")}
        ]
    },
    {
        "subjectName": "Art",
        "grades": [
            {"grade": 5, "gradedAt": new Date("2024-05-06")},
            {"grade": 4, "gradedAt": new Date("2024-05-11")}
        ]
    },
    {
        "subjectName": "English",
        "grades": [
            {"grade": 4, "gradedAt": new Date("2024-05-10")},
            {"grade": 5, "gradedAt": new Date("2024-05-12")}
        ]
    }
]