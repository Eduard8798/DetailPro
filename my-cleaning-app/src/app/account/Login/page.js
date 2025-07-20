import styles from './Page.module.css';
import React, {useState} from 'react';

const LoginPage = ({setAuthStep}) => {

    const [phone,setPhone] = useState(null);
    const [password,setPassword] = useState(null);
    const backLogin = (e) => {
        setAuthStep('admin');
    }
    const inputEmail = (e) => {
        setPhone(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault();


        try {
            const res = await fetch("/api/auth/login", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({phone,password}),
                credentials: 'include'
            });

            const data = await res.json();
            if (res.ok) {
                console.log('JWT token:', data.token);
                backLogin();
            } else {
                console.error(data.message);
            }
        }
        catch (e){
            console.log('error',e)
        }
    }

    return (
        <div className={styles.loginPage}>
            <form className={styles.form} onSubmit={handleLogin}>
                <h2 className={styles.title}>Login</h2>

                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone"
                    required
                    className={styles.input}
                    onChange={inputEmail}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    className={styles.input}
                    onChange={inputPassword}
                />

                <button type="submit" className={styles.button}>
                    Login
                </button>
                <button type="button" className={styles.secondaryButton} >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
