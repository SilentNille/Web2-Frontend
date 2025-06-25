import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducer/authenticationSlice";
import type { RootState } from "../store/store";
import "../layout/styles/StartPage.css";
import { useNavigate } from 'react-router';

function StartPage() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);
    const isAdmin = useSelector((state: RootState) => state.authentication.isAdmin);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
    };

    const goToUserManagement = () => {
        navigate('/user-management');
    };

    if (!isLoggedIn) return null;

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
