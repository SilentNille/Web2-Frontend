import { useEffect } from "react";
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
            <h1>Welcome to the Student Portal</h1>
            <StartPageButton />
        </div>
    );
}

export default StartPage;
