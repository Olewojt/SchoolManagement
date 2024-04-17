import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Home from "pages/Student/Home/Home.tsx";
import Layout, {LayoutAuth} from "layouts/Layout.tsx";
import Login from "pages/Login/Login.tsx";
import Reset from "pages/Login/Reset.tsx";
import Configuration from "pages/Configuration/Configuration.tsx";
import Grades from "pages/Student/Grades/Grades.tsx";
import Tasks from "pages/Student/Tasks/Tasks.tsx";
import Reports from "pages/Student/Reports/Reports.tsx";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<LayoutAuth />}>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/reset" element={<Reset/>}></Route>
                </Route>
                <Route element={<Layout/>}>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/config" element={<Configuration/>}/>
                    <Route path="/grades" element={<Grades/>}/>
                    <Route path='/tasks' element={<Tasks/>}/>
                    <Route path='/reports' element={<Reports/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
