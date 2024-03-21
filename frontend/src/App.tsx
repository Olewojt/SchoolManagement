import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css'
// import Login from "pages/Login/Login.tsx";
// import Reset from "pages/Login/Reset.tsx";
// import Home from "pages/Student/Home/Home.tsx";
import Home from "pages/Student/Home/Home.tsx";
import Layout from "layouts/Layout.tsx";

function App() {
    return (

        <>
            <HashRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />}/>
                    </Route>
                </Routes>
            </HashRouter>
        </>

    )
}
export default App
