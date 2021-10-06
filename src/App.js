import * as styles from './App.module.css';
import React from 'react';
import {ChatOpened} from './pages/ChatOpened/ChatOpened';

function App() {

    return (
        <div className={styles.App}>
            <ChatOpened/>
        </div>
    );
}

export default App;
