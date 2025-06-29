'use client'
import React from 'react';
import FeedbackForm from '../../components/FeedbackForm/page'
import styles from './contact.module.css';

const Page = () => {

    return (
        <div>
            <div className={styles.heroVideo}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline

                >
                    <source src="https://res.cloudinary.com/druvfoz4x/video/upload/v1751201742/contactVideo_ftwxjz.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className={styles.video_overlay_text}>
                    <p >Contact</p>

                </div>
            </div>
           <FeedbackForm/>
        </div>
    );
};

export default Page;
