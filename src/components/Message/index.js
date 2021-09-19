import React from 'react';
import * as styles from './index.module.css';

export const Message = (props) => {
    return (
        <div>
            <p className={styles.textStyle}>
                {props.text}
            </p>
        </div>
    )
}