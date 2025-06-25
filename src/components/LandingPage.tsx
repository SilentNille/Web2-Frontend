import { useState } from "react";
import { useSelector } from "react-redux";
import "../layout/styles/LandingPage.css";
import type { RootState } from "../store/store";
import LoginDialog from "./LoginDialog";

function LandingPage() {
    const [showLoginDialog, setShowLoginDialog] = useState(false);
    const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);

    const handleOpenLoginDialog = () => {
        setShowLoginDialog(true);
    };

    const handleCloseLoginDialog = () => {
        setShowLoginDialog(false);
    };

    if (isLoggedIn) return null;

    return (
        <div id="LandingPage">
            <h1>Landing Page!</h1>
            <p>Bitte einloggen.</p>

            <button id="OpenLoginDialogButton" onClick={handleOpenLoginDialog}>
                Login
            </button>

            {showLoginDialog && <LoginDialog onClose={handleCloseLoginDialog} />}
        </div>
    );
}

export default LandingPage;
