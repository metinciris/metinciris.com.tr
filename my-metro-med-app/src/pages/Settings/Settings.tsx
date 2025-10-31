import React from 'react';
import styles from './Settings.module.css';

const Settings: React.FC = () => {
    return (
        <div className={styles.settingsContainer}>
            <h1>Ayarlar</h1>
            <div className={styles.settingsGrid}>
                <div className={styles.settingItem}>
                    <h2>Kullanıcı Bilgileri</h2>
                    <p>Buradan kullanıcı bilgilerinizi güncelleyebilirsiniz.</p>
                </div>
                <div className={styles.settingItem}>
                    <h2>Gizlilik Ayarları</h2>
                    <p>Gizlilik ayarlarınızı buradan yönetebilirsiniz.</p>
                </div>
                <div className={styles.settingItem}>
                    <h2>Bildirim Ayarları</h2>
                    <p>Bildirim tercihlerinizi buradan ayarlayın.</p>
                </div>
                <div className={styles.settingItem}>
                    <h2>Hesap Güvenliği</h2>
                    <p>Hesap güvenliğinizi artırmak için ayarları kontrol edin.</p>
                </div>
            </div>
        </div>
    );
};

export default Settings;