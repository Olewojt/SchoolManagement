import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SubjectsGrades} from "api/Grades.tsx";

export interface StudentGradesSlice {
    grades: SubjectsGrades[]
}

const initialState: StudentGradesSlice = {
    grades: []
}

const studentGradesSlice = createSlice({
    name: "studentGrades",
    initialState,
    reducers: {
        addGrades: (state, action: PayloadAction<SubjectsGrades[]>) => {
            state.grades = action.payload;
        }
    },
});

export const { addGrades } = studentGradesSlice.actions;
export default studentGradesSlice.reducer;
