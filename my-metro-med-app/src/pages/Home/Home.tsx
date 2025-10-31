import React from 'react';
import styles from './Home.module.css';
import MetroCard from '../../components/MetroCard/MetroCard';
import Grid from '../../components/Grid/Grid';

const Home: React.FC = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.title}>Ana Sayfa</h1>
            <Grid>
                <MetroCard title="Kardiyoloji" description="Kardiyoloji ile ilgili içerikler" />
                <MetroCard title="Dahiliye" description="Dahiliye ile ilgili içerikler" />
                <MetroCard title="Cerrahi" description="Cerrahi ile ilgili içerikler" />
                <MetroCard title="Pediatri" description="Pediatri ile ilgili içerikler" />
            </Grid>
        </div>
    );
};

export default Home;