import * as styles from './App.module.css';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Routes} from "./routes";

function App() {

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>
    );
}

export default App;
