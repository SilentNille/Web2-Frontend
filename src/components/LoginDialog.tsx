import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../layout/styles/LoginDialog.css";
import { loginFailure, loginSuccess } from "../reducer/authenticationSlice";
import { login } from "../services/authenticationService";

interface LoginDialogProps {
    onClose?: () => void;
}

function LoginDialog({ onClose }: LoginDialogProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Call the login service with the provided credentials
        login({ username, password })
            .then((response) => {
                dispatch(loginSuccess({ token: response.token, isAdmin: response.isAdmin }));
                onClose?.();
                navigate("/start");
            })
            .catch(() => {
                dispatch(loginFailure());
            });
    };

    const handleClose = () => {
        onClose?.();
    };

    return (
        // TODO use bootstrap maybe next time
        <div className="modal-overlay">
            <div className="login-dialog" id="LoginDialog">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            id="LoginDialogUserIDText"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            id="LoginDialogPasswordText"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" id="PerformLoginButton">
                        Login
                    </button>
                    <button type="button" className="closing-button" onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginDialog;
