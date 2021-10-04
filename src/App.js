import * as styles from './App.module.css';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Routes} from "./routes";
import { Provider } from 'react-redux';
import {store} from "./store";

function App() {

    return (
        <div className={styles.App}>
            <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
