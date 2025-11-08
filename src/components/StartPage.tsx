import { useEffect } from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store/store";
import MyNavBar from './MyNavBar';
import StartPageButton from './StartPageButton';

function StartPage() {
    const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    return (
        <div id="StartPage">
            <MyNavBar />
            <Container className="py-4">
                <Row className="justify-content-center mb-4">
                    <Col md={10} className="text-center">
                        <h2 className="fw-semibold">Welcome back</h2>
                        <p className="text-muted">Use the navigation to access user management, degree courses, or your applications. Below you’ll find quick tips and recent actions.</p>
                    </Col>
                </Row>

                <Row className="g-3 mb-4">
                    <Col md={4}>
                        <Card className="h-100 border-0 shadow-sm" bg="light">
                            <Card.Body>
                                <Card.Title>Get started</Card.Title>
                                <Card.Text>Open Degree Courses to create new courses or submit an application for the upcoming semester.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 border-0 shadow-sm" bg="white">
                            <Card.Body>
                                <Card.Title>Your profile</Card.Title>
                                <Card.Text>Keep your user information up to date. Admins can maintain all users in the system.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 border-0 shadow-sm" bg="light">
                            <Card.Body>
                                <Card.Title>Help</Card.Title>
                                <Card.Text>Buttons are always visible in the top bar. Use them to navigate without the browser back button.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="text-center">
                    <StartPageButton />
                </div>
            </Container>
        </div>
    );
}

export default StartPage;
