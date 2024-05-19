import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Grade} from "api/Grades.tsx";

export interface GradeSlice {
    subject: string;
    grades: Grade[];
}

const initialState: GradeSlice = {
    subject: "Math",
    grades: [
        {
            grade: 2,
            date: new Date("2024-02-02")
        }
    ]
}

const gradeSlice = createSlice({
    name: "grade",
    initialState,
    reducers: {
        addGrade: (state, action: PayloadAction<{ subject: string; grades: Grade[] }>) => {
            const { subject, grades } = action.payload;
            state.subject = subject;
            state.grades.push(...grades); // Dodaj nowe oceny do istniejących
        }
    },
});

export const { addGrade } = gradeSlice.actions;
export default gradeSlice.reducer;
