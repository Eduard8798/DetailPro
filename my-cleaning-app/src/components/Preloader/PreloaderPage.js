'use client'
import React, { useEffect, useState } from 'react';
import styles from './PreloaderPage.module.css';

const Preloader = ({setLoading}) => {
       const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) return prev + 10;
                clearInterval(interval);
                return 100;
            });
        }, 70);
        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setLoading(true);
        }
    }, [progress, setLoading]);

    return (
       <div className={styles.context}>
           <p className={styles.progress}>{progress}</p>
           <p className={styles.textLabel}>CarCleanPro</p>
           <p className={styles.textLoading}>{progress < 95? "Loading" : "Ready" }</p>
        </div>
    );
};

export default Preloader;
