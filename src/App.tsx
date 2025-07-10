import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import StartPage from "./components/StartPage";
import UserManagementPage from "./components/UserManagement/UserManagement";
import { store } from "./store/store";
import ApplicationManagementPage from './components/ApplicationManagement/ApplicationManagement';
import DegreeCourseManagementPage from './components/DegreeCourseManagment/DegreeCourseManagement';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/start" element={<StartPage />} />
                    <Route path="/user-management" element={<UserManagementPage />} />
                    <Route path="/degree-course-management" element={<DegreeCourseManagementPage />} />
                    <Route path="/application-management" element={<ApplicationManagementPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
