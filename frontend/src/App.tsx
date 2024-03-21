import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css'
// import Login from "pages/Login/Login.tsx";
// import Reset from "pages/Login/Reset.tsx";
// import Home from "pages/Student/Home/Home.tsx";
import Sidebar from "layouts/Sidebar/Sidebar.tsx";

function App() {
    return (
        <HashRouter>
            <Routes>
                {/*<Route path="/" element={<Login />}></Route>*/}
                {/*<Route path="/reset" element={<Reset />}></Route>*/}
                <Route path="/" element={<Sidebar />} />
            </Routes>
        </HashRouter>
    )
}
export default App
