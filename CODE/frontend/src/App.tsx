import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css'
import StudentHome from "pages/Student/Home/Home.tsx";
import Layout, {LayoutAuth, LayoutMain} from "layouts/Layout.tsx";
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
import PrincipalReports from "pages/Principal/Reports/Reports.tsx";
import {ADMIN, PARENT, STUDENT, TEACHER} from "utilitiesconstants.tsx/";
import {useEffect, useState} from "react";
import {getAuthToken} from "@/axios-client.tsx";
import Loading from "layouts/Loading.tsx";
import {pingServer} from "api/Ping.tsx";

function App() {
    const user = useSelector((state: RootState) => state.login);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        let timeoutId;
        const checkToken = async () => {
            if (isLoading) {
                timeoutId = setTimeout(checkToken, 1000);
                console.log("Test async");
            } else {
                clearTimeout(timeoutId);
                return;
            }
            try {
                setIsAuthenticated(true);
                const ping = await pingServer();
                if (ping) {
                    const token = getAuthToken();
                    if (!token) {
                        setIsAuthenticated(false);
                    }
                    setIsLoading(false);
                    clearTimeout(timeoutId);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        checkToken();

        return () => {
            clearTimeout(timeoutId);
        };
    }, [user]);


    useEffect(() => {
        if (isLoading)
            return

        const token = getAuthToken();
        if (token !== null) {
            setIsAuthenticated(true);

        } else {
            setIsAuthenticated(false);
            setIsLoading(false);
        }

    }, [user]);

    if (isLoading) {
        return <Loading/>;
    }

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {!isAuthenticated &&
                        <Route element={<LayoutAuth/>}>
                            <Route index element={<Login/>}/>
                            <Route path="reset" element={<Reset/>}/>
                        </Route>
                    }
                    {user.role === ADMIN && isAuthenticated &&
                        <Route element={<LayoutMain/>}>
                            <Route index element={<StudentHome/>}/>
                            <Route path="config" element={<Configuration/>}/>
                            <Route path="tasks" element={<StudentTasks/>}/>
                            <Route path="reports" element={<PrincipalReports/>}/>
                            <Route path="manage" element={<PrincipalManage/>}/>
                        </Route>
                    }
                    {user.role === STUDENT && isAuthenticated &&
                        <Route element={<LayoutMain/>}>
                            <Route index element={<StudentHome/>}/>
                            <Route path="config" element={<Configuration/>}/>
                            <Route path="grades" element={<StudentGrades/>}/>
                            <Route path="tasks" element={<StudentTasks/>}/>
                            <Route path="reports" element={<StudentReports/>}/>
                        </Route>
                    }
                    {user.role === TEACHER && isAuthenticated &&
                        <Route element={<LayoutMain/>}>
                            <Route index element={<StudentHome/>}/>
                            <Route path="config" element={<Configuration/>}/>
                            <Route path="tasks" element={<StudentTasks/>}/>
                            <Route path="reports" element={<TeacherReports/>}/>
                        </Route>
                    }
                    {user.role === PARENT && isAuthenticated &&
                        <Route element={<LayoutMain/>}>
                            <Route index element={<StudentHome/>}/>
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