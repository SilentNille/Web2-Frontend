import "../styles/LandingPage.css";

function LandingPage() {

    const handleOpenLoginDialog = () => {
        console.log("Login dialog opened");
    };

    const handleCloseLoginDialog = () => {
        console.log("Login dialog closed");
    };

    return (
        <div className="landing-page-container" id="LandingPage">
            <h1>Landing Page!</h1>
            <p>This is a simple React application built with Vite.</p>

            <button className="login-button" onClick={handleOpenLoginDialog}>
                Open Login Dialog
            </button>
        </div>
    );
}

export default LandingPage;
