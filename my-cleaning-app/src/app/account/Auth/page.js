import React from 'react';
import styles from './Page.module.css';

const RegisterPage = ({setAuthStep}) => {

    const backLogin = (e) => {
        e.preventDefault();
        // Тут должна быть логика авторизации
        // если success:
        setAuthStep('login');
    }
    return (
        <div className={styles.authPage}>
            <form className={styles.form}>
                <h2 className={styles.title}>Register</h2>

                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone"
                    required
                    className={styles.input}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
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

                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.primaryButton}>
                        Register
                    </button>
                    <button type="button" className={styles.secondaryButton} onClick={backLogin}>
                        Cancel
                    </button>
                    <button type="button" className={styles.secondaryButton}>
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
