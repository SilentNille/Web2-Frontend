import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store/store";
import LoginDialog from "./LoginDialog";

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
        <div id="LandingPage" className="py-5">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">
                        <h1 className="display-5 fw-semibold mb-3">Student Application Portal</h1>
                        <p className="lead mb-4">Manage degree courses and applications in a single place. Simple. Focused. Secure.</p>
                        <Button
                            variant="primary"
                            id="OpenLoginDialogButton"
                            onClick={handleOpenLoginDialog}
                        >
                            Login
                        </Button>
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col md={4}>
                        <Card className="h-100 shadow-sm border-0" bg="light">
                            <Card.Body>
                                <Card.Title className="fw-semibold">Track Applications</Card.Title>
                                <Card.Text>Submit and review your study applications. Administrators can oversee all submissions.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 shadow-sm border-0" bg="white">
                            <Card.Body>
                                <Card.Title className="fw-semibold">Manage Degree Courses</Card.Title>
                                <Card.Text>Create, edit and remove degree courses with a clean interface designed for fast updates.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 shadow-sm border-0" bg="light">
                            <Card.Body>
                                <Card.Title className="fw-semibold">User Administration</Card.Title>
                                <Card.Text>Administrators can add and maintain user accounts with role control.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {showLoginDialog && <LoginDialog onClose={handleCloseLoginDialog} />}
        </div>
    );
}

export default LandingPage;
