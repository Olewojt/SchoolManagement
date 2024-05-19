import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css'
import StudentHome from "pages/Student/Home/Home.tsx";
import Layout, {LayoutMain, LayoutAuth} from "layouts/Layout.tsx";
import Login from "pages/Login/Login.tsx";
import Reset from "pages/Login/Reset.tsx";
import Configuration from "pages/Configuration/Configuration.tsx";
import StudentGrades from "pages/Student/Grades/Grades.tsx";
import StudentTasks from "pages/Student/Tasks/Tasks.tsx";
import StudentReports from "pages/Student/Reports/Reports.tsx";
import PrincipalManage from "pages/Principal/Manage/Manage.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import TeacherReports from "pages/Teacher/Reports/Reports.tsx";

function App() {
    const user = useSelector((state: RootState) => state.login);

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route element={<LayoutAuth/>}>
                        <Route index element={<Login/>}/>
                        <Route path="reset" element={<Reset/>}/>
                    </Route>
                    {user.role === "admin" &&
                        <Route element={<LayoutMain/>}>
                            <Route path="home" element={<StudentHome/>}/>
                            <Route path="config" element={<Configuration/>}/>
                            <Route path="tasks" element={<StudentTasks/>}/>
                            <Route path="reports" element={<StudentReports/>}/>
                            <Route path="manage" element={<PrincipalManage/>}/>
                        </Route>
                    }
                    {user.role === "student" &&
                        <Route element={<LayoutMain/>}>
                            <Route path="home" element={<StudentHome/>}/>
                            <Route path="config" element={<Configuration/>}/>
                            <Route path="grades" element={<StudentGrades/>}/>
                            <Route path="tasks" element={<StudentTasks/>}/>
                            <Route path="reports" element={<StudentReports/>}/>
                        </Route>
                    }
                    {user.role === "teacher" &&
                        <Route element={<LayoutMain/>}>
                            <Route path="home" element={<StudentHome/>}/>
                            <Route path="config" element={<Configuration/>}/>
                            <Route path="tasks" element={<StudentTasks/>}/>
                            <Route path="reports" element={<TeacherReports/>}/>
                        </Route>
                    }
                    {user.role === "parent" &&
                    <Route element={<LayoutMain/>}>
                        <Route path="home" element={<StudentHome/>}/>
                        <Route path="config" element={<Configuration/>}/>
                        <Route path="grades" element={<StudentGrades/>}/>
                        <Route path="tasks" element={<StudentTasks/>}/>
                        <Route path="reports" element={<StudentReports/>}/>
                    </Route>
                }
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
