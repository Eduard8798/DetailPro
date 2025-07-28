"use client";

import React, {useState} from 'react';
import styles from './Page.module.css';
import {toast} from "react-toastify";

const RegisterPage = ({setAuthStep}) => {

    const [phone,setPhone] = useState(null);
    const [name,setName] = useState(null);
    const [password,setPassword] = useState(null);
    const [repeatPassword,setRepeatPassword] = useState(null);
    const [register,setRegister] = useState(false)

    const userNew = async (event) =>{
        event.preventDefault();
        if (password !== repeatPassword){
            alert('Register is not done!')
            return setRegister(false)
        }
        const res = await fetch('/api/auth/register',{
           method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name,phone,password}),
            credentials:'include'
        })

        const data = await res.json();

        if (data){
            toast.success("New User Add success");
            console.log('dataAuth',data);
            setRegister(true)
            setAuthStep('login');
        }
        else {
            toast.warn("Error Registration");
            console.error(data.message);
        }
    }


    const changeName = (e) =>{
        setName(e.target.value)
    }
    const changePassword = (e) =>{
        setPassword(e.target.value)
    }
    const changeRepeatPassword = (e) =>{
        setRepeatPassword(e.target.value)
    }
    const changeTel = (e) =>{
        setPhone(e.target.value)
    }

    return (
        <div className={styles.authPage}>
            <form className={styles.form} onSubmit={userNew}>
                <h2 className={styles.title}>Register</h2>

                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone"
                    required
                    className={styles.input}
                    onChange={changeTel}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    required
                    className={styles.input}
                    onChange={changeName}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    className={styles.input}
                    onChange={changePassword}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Repeat password"
                    required
                    className={styles.input}
                    onChange={changeRepeatPassword}
                />

                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.primaryButton}>
                        Register
                    </button>
                    <button type="button" className={styles.secondaryButton} onClick={()=> setAuthStep('login')}>
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
