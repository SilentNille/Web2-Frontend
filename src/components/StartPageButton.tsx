import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function StartPageButton() {
    const navigate = useNavigate();

    const goToStart = () => {
        navigate("/start");
    };

    return (
        <Button id="OpenStartPageButton" onClick={goToStart} >
            Home
        </Button>
    );
}

export default StartPageButton;
