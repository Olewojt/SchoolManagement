import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Grade, GradeAPI} from "api/Grades.tsx";
import {GradeSlice} from "./gradeSlice.tsx"
interface StudentGradeSlice {
    grades: GradeSlice[]
}

const initialState: StudentGradeSlice = {
    grades: []
}

function convertToGradeSlices(gradeAPIs: GradeAPI[]): GradeSlice[] {
    const gradeSlicesMap: { [key: string]: Grade[] } = {};

    // Group grades by subject
    for (const gradeAPI of gradeAPIs) {
        const { subjectName, grade, gradedAt } = gradeAPI;
        if (!gradeSlicesMap[subjectName]) {
            gradeSlicesMap[subjectName] = [];
        }
        gradeSlicesMap[subjectName].push({ grade, date: new Date(gradedAt) });
    }

    // Convert grouped grades to GradeSlice array
    const gradeSlices: GradeSlice[] = Object.entries(gradeSlicesMap).map(([subject, grades]) => ({
        subject,
        grades
    }));

    return gradeSlices; // Return StudentGradeSlice object directly
}

const studentGradesSlice = createSlice({
    name: "studentGrades",
    initialState,
    reducers: {
        addGrades: (state, action: PayloadAction<GradeAPI[]>) => {
            state.grades = convertToGradeSlices(action.payload);
        }
    },
});

export const { addGrades } = studentGradesSlice.actions;
export default studentGradesSlice.reducer;
