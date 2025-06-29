import React from 'react';
import styles from './FeedbackForm.module.css'
const Page = () => {
    return (
        <div className={styles.contact_section}>
            <div className={styles.map_container}>
                <iframe
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d713.9926357424695!2d32.069604018287265!3d49.41077592193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d49.41052824587658!2d32.06955975440797!5e0!3m2!1sru!2sua!4v1751143260657!5m2!1sru!2sua"
                    // width="600" height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className={styles.contact_info}>
                <h2 className={styles.contact_title}>Time to visit us</h2>
                <p className={styles.contact_subtitle}>Welcome to our showroom</p>

                <form className={styles.contact_form}>
                    <input type="text" placeholder="Your Name" className={styles.input}/>
                    <input type="tel" placeholder="Phone Number" className={styles.input} />
                    <textarea placeholder="Your Message" className={styles.textarea}></textarea>
                    <button type="submit" className={styles.submit_btn}>Send Message</button>
                </form>
            </div>
        </div>


    );
};

export default Page;

