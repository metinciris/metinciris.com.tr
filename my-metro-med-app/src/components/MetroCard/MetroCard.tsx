import React from 'react';
import styles from './MetroCard.module.css';

interface MetroCardProps {
    title: string;
    content: string;
    footer?: string;
}

const MetroCard: React.FC<MetroCardProps> = ({ title, content, footer }) => {
    return (
        <div className={styles.metroCard}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
};

export default MetroCard;