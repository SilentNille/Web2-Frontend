import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../reducer/authenticationSlice";
import type { RootState } from "../store/store";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import MyNavBar from './MyNavBar';

function StartPage() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);
    const isAdmin = useSelector((state: RootState) => state.authentication.isAdmin);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    return (
        <div id="StartPage">
            <MyNavBar />
            <h1>Welcome to the Student Portal</h1>
        </div>
    );
}

export default StartPage;
