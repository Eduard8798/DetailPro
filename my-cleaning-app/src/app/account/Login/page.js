import styles from './Page.module.css';
import React from 'react';

const LoginPage = ({setAuthStep}) => {

    const backLogin = (e) => {
        e.preventDefault();
        // Тут должна быть логика авторизации
        // если success:
        setAuthStep('admin');
    }

    return (
        <div className={styles.loginPage}>
            <form className={styles.form}>
                <h2 className={styles.title}>Login</h2>

                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone"
                    required
                    className={styles.input}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    className={styles.input}
                />

                <button type="submit" className={styles.button}>
                    Login
                </button>
                <button type="button" className={styles.secondaryButton} onClick={backLogin}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
