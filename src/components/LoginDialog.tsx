import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Alert, Button, Form, InputGroup, Modal, Spinner } from "react-bootstrap";
import { FaLock, FaUser } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginSuccess } from "../reducer/authenticationSlice";
import { login } from "../services/authenticationService";

interface LoginDialogProps {
    onClose?: () => void;
}

function LoginDialog({ onClose }: LoginDialogProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setShowError(false);

        login({ username, password })
            .then((response) => {
                dispatch(loginSuccess({
                    token: response.token,
                    isAdmin: response.isAdmin
                }));
                setIsLoading(false);
                onClose?.();
                navigate("/start");
            })
            .catch(() => {
                dispatch(loginFailure());
                setIsLoading(false);
                setShowError(true);
            });
    };

    const handleClose = () => {
        onClose?.();
    };

    return (
        <Modal show={true} centered backdrop="static" id="LoginDialog" >
            <Modal.Header className="login-header">
                    <Modal.Title className="login-title">User Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {showError && (
                    <Alert variant="danger" className="login-alert mb-4">
                        <span>Invalid username or password. Please try again.</span>
                    </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <FaUser />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                id="LoginDialogUserIDText"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                                required
                                autoFocus
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <FaLock />
                            </InputGroup.Text>
                            <Form.Control
                                type="password"
                                id="LoginDialogPasswordText"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            id="PerformLoginButton"
                            disabled={isLoading}
                            className="login-button"
                        >
                            <span>Login</span>
                        </Button>
                        <Button variant="light" onClick={handleClose} className="close-button" >
                            Cancel
                        </Button>
                </Form>

                {isLoading && (
                    <>
                        <Spinner />
                        <span>Logging in...</span>
                    </>
                )}

            </Modal.Body>
        </Modal>
    );
}

export default LoginDialog;
