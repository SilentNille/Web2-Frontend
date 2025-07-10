import { useEffect } from "react";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../reducer/authenticationSlice";
import type { RootState } from "../store/store";

function MyNavBar() {
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

    const goToStart = () => {
        navigate("/start");
    };

    const goToUserManagement = () => {
        navigate("/user-management");
    };

    const goToDegreeCourseManagement = () => {
        navigate("/degree-course-management");
    };

    const goToApplicationManagement = () => {
        navigate("/application-management");
    };

    return (
        <Container id="NavBar">
            <Navbar>
                <Container>
                    <Navbar.Brand>Student Portal</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link id="OpenStartPageButton" onClick={goToStart} >
                                Home
                            </Nav.Link>
                            {isAdmin && (
                                <Nav.Link id="OpenUserManagementPageButton" onClick={goToUserManagement}>
                                    User Management
                                </Nav.Link>
                            )}
                            <Nav.Link id="OpenDegreeCourseManagementPageButton" onClick={goToDegreeCourseManagement} >
                                Degree Courses
                            </Nav.Link>
                            <Nav.Link id="OpenDegreeCourseApplicationManagementPageButton" onClick={goToApplicationManagement} >
                                Applications
                            </Nav.Link>
                        </Nav>
                        <Button onClick={handleLogout} id="LogoutButton" >
                            Logout
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}

export default MyNavBar;
