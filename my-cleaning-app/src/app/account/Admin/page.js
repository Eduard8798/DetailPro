import React, {useState} from 'react';
import Dashboard from './Dashboard'
import Requests from './Requests'
import styles from './Admin.module.css'

const Page = ({setAuthStep}) => {

    const backLogin = (e) => {
        e.preventDefault();
        // Тут должна быть логика авторизации
        // если success:
        setAuthStep('register');
    }
    const [activeTab, setActiveTab] = useState('dashboard');
    return (
        <div className={styles.adminContainer}>
            <aside className={styles.sidebar}>
                <h2 className={styles.logo}>Admin Panel</h2>
                <button onClick={() => setActiveTab('dashboard')}>Dashboard</button>
                <button onClick={() => setActiveTab('requests')}>Requests</button>
                <button onClick={() => window.location.reload()}>Logout</button>
            </aside>

            <main className={styles.main}>
                {activeTab === 'dashboard' && <Dashboard />}
                {activeTab === 'requests' && <Requests />}
            </main>
        </div>
    );
};

export default Page;
