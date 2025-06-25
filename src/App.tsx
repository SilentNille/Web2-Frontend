import { Provider, useSelector } from "react-redux";
import "./App.css";
import LandingPage from "./components/LandingPage";
import StartPage from "./components/StartPage";
import type { RootState } from "./store/store";
import { store } from "./store/store";

function AppContent() {
    const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);

    return <div className="app-container">
        {isLoggedIn ? (<StartPage />) : (<LandingPage />)}
    </div>
}

function App() {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
}

export default App;
