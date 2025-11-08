import { useEffect } from "react";
import { Button, Nav, Navbar } from 'react-bootstrap';
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
        <Navbar id="NavBar" bg="light" expand="md" className="mb-4 shadow-sm px-3" sticky="top">
            <Navbar.Brand className="fw-semibold">Student Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
                <Nav className="me-auto gap-2">
                    <Nav.Link id="OpenStartPageButton" onClick={goToStart}>Start</Nav.Link>
                    {isAdmin && (
                        <Nav.Link id="OpenUserManagementPageButton" onClick={goToUserManagement}>Users</Nav.Link>
                    )}
                    <Nav.Link id="OpenDegreeCourseManagementPageButton" onClick={goToDegreeCourseManagement}>Degree Courses</Nav.Link>
                    <Nav.Link id="OpenDegreeCourseApplicationManagementPageButton" onClick={goToApplicationManagement}>Applications</Nav.Link>
                </Nav>
                <div className="d-flex">
                    <Button id="LogoutButton" variant="primary" size="sm" onClick={handleLogout}>Logout</Button>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavBar;
