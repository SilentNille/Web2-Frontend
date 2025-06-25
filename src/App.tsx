import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import StartPage from "./components/StartPage";
import UserManagementPage from "./components/UserManagement";
import { store } from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/start" element={<StartPage />} />
                    <Route path="/user-management" element={<UserManagementPage />} />
                    <Route
                        path="/degree-course-management"
                        element={<div>Degree Course Management Page</div>}
                    />
                    <Route
                        path="/application-management"
                        element={<div>Application Management Page</div>}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
