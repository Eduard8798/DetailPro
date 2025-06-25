import React from 'react';
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer role="contentinfo" aria-label="Footer with contact information">
            <small className={styles.footer}>
                <div className={styles.main_footer_phone}>
                    <p className={styles.footer_p_name}>Phone</p>
                    <a href="tel:+380675463996" aria-label="Call phone number">+380675463996</a>
                </div>
                <div className={styles.main_footer_phone}>
                    <p className={styles.footer_p_name}>Email</p>
                    <a href="mailto:eduard9999997@gmail.com" aria-label="Send email">eduard9999997@gmail.com</a>
                </div>
                <div className={styles.main_footer_phone}>
                    <p className={styles.footer_p_name}>LinkedIn</p>
                    <a href="https://www.linkedin.com/in/eduard-bilan-77a7a431b/" aria-label="Visit LinkedIn profile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <div className={styles.main_footer_phone}>
                    <p className={styles.footer_p_name}>Telegram</p>
                    <a href="https://t.me/bilan08" aria-label="Message on Telegram" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane />
                    </a>
                </div>
                <div className={styles.main_footer_phone}>
                    <p className={styles.footer_p_name}>Address</p>
                    <p>Anatolia Lupinosa</p>
                </div>
                <div className={styles.main_footer_phone}>
                    <p className={styles.footer_p_name}>© 2025</p>
                    <p>All rights reserved</p>
                </div>
            </small>
        </footer>
    );
};

export default Footer;
