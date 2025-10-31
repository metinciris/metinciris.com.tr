import React from 'react';
import styles from './Grid.module.css';

const Grid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles.gridContainer}>
            {children}
        </div>
    );
};

export default Grid;