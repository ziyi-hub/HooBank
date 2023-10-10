import './App.css';
import React from "react";
import styles from "./style";
import { Navbar } from "./components";
import AuthProvider from "./context/AuthContext";
import Routers from "./routers/Routers";

const App = () => (
    <AuthProvider>
        <div className="bg-black w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <Routers />
        </div>
    </AuthProvider>
);

export default App;
