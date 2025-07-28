'use client'
import React, {useState} from 'react';
import Login from './Login/LoginPage';
import Auth from './Auth/AuthPage';
import Admin from './Admin/AdminPage'
import styles from './Page.module.css'
const Page = () => {
    const [authStep, setAuthStep] = useState('login');

    return (
        <div className={styles.content}>
            {authStep === 'login' && <Login setAuthStep={setAuthStep} />}
            {authStep === 'register' && <Auth setAuthStep={setAuthStep} />}
            {authStep === 'admin' && <Admin setAuthStep={setAuthStep} />}
        </div>
    );
};

export default Page;
