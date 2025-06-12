import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducer/authenticationSlice";
import type { RootState } from "../store/store";
import "../layout/styles/StartPage.css";

function StartPage() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);

    const handleLogout = () => {
        dispatch(logout());
    };

    if (!isLoggedIn) return null;

    return (
        <div id="StartPage" className="start-page">
            <div className="header">
                <h1>Willkommen in der Anwendung</h1>
                <button id="LogoutButton" className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className="content">
                <p>Logging was successful</p>
            </div>
        </div>
    );
}

export default StartPage;
