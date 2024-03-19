import './App.css'
import Login from "pages/Login/Login.tsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import Reset from "pages/Login/Reset.tsx";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/reset" element={<Reset />}></Route>
            </Routes>
        </HashRouter>
    )
}
export default App
