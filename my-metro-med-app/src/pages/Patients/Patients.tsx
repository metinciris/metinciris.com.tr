import React from 'react';
import styles from './Patients.module.css';
import MetroCard from '../../components/MetroCard/MetroCard';

const Patients = () => {
    const patientData = [
        { id: 1, name: 'John Doe', age: 30, condition: 'Flu' },
        { id: 2, name: 'Jane Smith', age: 25, condition: 'Cold' },
        { id: 3, name: 'Alice Johnson', age: 40, condition: 'Headache' },
    ];

    return (
        <div className={styles.patientsContainer}>
            <h1>Patients</h1>
            <div className={styles.grid}>
                {patientData.map(patient => (
                    <MetroCard key={patient.id} patient={patient} />
                ))}
            </div>
        </div>
    );
};

export default Patients;