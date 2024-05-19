import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Grade, SubjectsGrades} from "api/Grades.tsx";

export interface GradeSlice {
    subject: string;
    grades: Grade[];
}

const initialState: GradeSlice = {
    subject: "Math",
    grades: [
        {
            grade: 2,
            gradedAt: new Date("2024-02-02")
        }
    ]
}

const gradeSlice = createSlice({
    name: "grade",
    initialState,
    reducers: {
        addGrade: (state, action: PayloadAction<SubjectsGrades>) => {
            const { subjectName, grades } = action.payload;
            state.subject = subjectName;
            state.grades.push(...grades); // Dodaj nowe oceny do istniejących
        }
    },
});

export const { addGrade } = gradeSlice.actions;
export default gradeSlice.reducer;
