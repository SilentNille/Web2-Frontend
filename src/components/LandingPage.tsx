import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store/store";
import LoginDialog from "./LoginDialog";
import { Button, Container } from 'react-bootstrap';

function LandingPage() {
    const [showLoginDialog, setShowLoginDialog] = useState(false);
    const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/start");
        }
    }, [isLoggedIn, navigate]);

    const handleOpenLoginDialog = () => {
        setShowLoginDialog(true);
    };

    const handleCloseLoginDialog = () => {
        setShowLoginDialog(false);
    };

    return (
        <Container id="LandingPage">
            <h1>Welcome to Student Application Portal</h1>
            <p className="lead">Please log in</p>

            <Button
                variant="primary"
                id="OpenLoginDialogButton"
                onClick={handleOpenLoginDialog}
            >
                Login
            </Button>

            {showLoginDialog && <LoginDialog onClose={handleCloseLoginDialog} />}
        </Container>
    );
}

export default LandingPage;
