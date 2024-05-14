import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Grade {
    grade: number;
    date: string;
}

interface GradeSlice {
    subject: string;
    grades: Grade[];
}

const initialState: GradeSlice = {
    subject: "Math",
    grades: [
        {
            grade: 2,
            date: "2024-02-02",
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
