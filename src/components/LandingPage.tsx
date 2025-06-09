import React from "react";
import "../layout/styles/LandingPage.css";

class LandingPage extends React.Component {

    handleOpenLoginDialog = () => {
        console.log("Login dialog opened");
    };

    handleCloseLoginDialog = () => {
        console.log("Login dialog closed");
    };

    render() {
        return (
            <div className="landing-page-container" id="LandingPage">
                <h1>Landing Page!</h1>
                <p>This is a simple React application built with Vite.</p>

                <button className="login-button" onClick={this.handleOpenLoginDialog}>
                    Open Login Dialog
                </button>
            </div>
        );
    }
}

export default LandingPage;
