import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "../layout/styles/StartPage.css";
import { logout } from "../reducer/authenticationSlice";
import type { RootState } from "../store/store";

function StartPage() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);
    const isAdmin = useSelector((state: RootState) => state.authentication.isAdmin);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    const goToUserManagement = () => {
        navigate('/user-management');
    };

    const goToDegreeCourseManagement = () => {
        navigate('/degree-course-management');
    };

    const goToApplicationManagement = () => {
        navigate('/application-management');
    };

    return (
        <div id="StartPage">
            <div className="header">
                <h1>Willkommen in der Anwendung</h1>
                <button id="LogoutButton" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div>
                <p>Login erfolgreich</p>
                {isAdmin && (
                    <>
                        <p>
                            Sie sind als Administrator angemeldet.
                        </p>
                        <button id="OpenUserManagementPageButton" onClick={goToUserManagement}>
                            User Management öffnen
                        </button>
                        <button id="OpenDegreeCourseManagementPageButton" onClick={goToDegreeCourseManagement}>
                            Studiengang Management öffnen
                        </button>
                        <button id="OpenDegreeCourseApplicationManagementPageButton" onClick={goToApplicationManagement}>
                            Studienbewerbung Management öffnen
                        </button>
                    </>
                )}
                {!isAdmin && (
                    <p>
                        Sie sind als normaler Benutzer angemeldet.
                    </p>
                )}
            </div>
        </div>
    );
}

export default StartPage;
