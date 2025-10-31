import React from 'react';
import styles from './Topbar.module.css';

const Topbar: React.FC = () => {
    return (
        <div className={styles.topbar}>
            <h1 className={styles.title}>My Metro Med App</h1>
            <div className={styles.buttons}>
                <button className={styles.button}>Home</button>
                <button className={styles.button}>Patients</button>
                <button className={styles.button}>Settings</button>
            </div>
        </div>
    );
};

export default Topbar;