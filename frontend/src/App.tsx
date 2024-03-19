import './App.css'
import Login from "pages/Login/Login.tsx";
import {HashRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
            </Routes>
        </HashRouter>
    )
}
export default App
