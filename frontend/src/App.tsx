import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Home from "pages/Student/Home/Home.tsx";
import Layout, {LayoutMain, LayoutAuth} from "layouts/Layout.tsx";
import Login from "pages/Login/Login.tsx";
import Reset from "pages/Login/Reset.tsx";
import Configuration from "pages/Configuration/Configuration.tsx";
import Grades from "pages/Student/Grades/Grades.tsx";
import Tasks from "pages/Student/Tasks/Tasks.tsx";
import Reports from "pages/Student/Reports/Reports.tsx";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";

function App() {
    const user = useSelector((state: RootState) => state.login.loggedInUser);

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route element={<LayoutAuth/>}>
                        <Route index element={<Login/>}/>
                        <Route path="reset" element={<Reset/>}/>
                    </Route>
                    {user === "admin" &&
                        <Route element={<LayoutMain/>}>
                            <Route path="home" element={<Home/>}/>
                            <Route path="config" element={<Configuration/>}/>
                            <Route path="grades" element={<Grades/>}/>
                            <Route path="tasks" element={<Tasks/>}/>
                            <Route path="reports" element={<Reports/>}/>
                        </Route>
                    }
                    {user === "student" &&
                        <Route element={<LayoutMain/>}>
                            <Route path="home" element={<Home/>}/>
                            <Route path="config" element={<Configuration/>}/>
                            <Route path="grades" element={<Grades/>}/>
                            <Route path="tasks" element={<Tasks/>}/>
                            <Route path="reports" element={<Reports/>}/>
                        </Route>
                    }{user === "teacher" &&
                        <Route element={<LayoutMain/>}>
                            <Route path="home" element={<Home/>}/>
                            <Route path="config" element={<Configuration/>}/>
                            <Route path="grades" element={<Grades/>}/>
                            <Route path="tasks" element={<Tasks/>}/>
                            <Route path="reports" element={<Reports/>}/>
                        </Route>
                    }
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
