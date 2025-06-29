import React from 'react';
import styles from './service.module.css'

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
                        <source
                            src="https://res.cloudinary.com/druvfoz4x/video/upload/v1751224116/serviceVideo_pjubmn.mp4"
                            type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className={styles.video_background}> </div>
                    <div className={styles.video_overlay_text}>
                        <p>Service</p>

                    </div>

            </div>
            <section className={styles.services_section}>
                <h2 className={styles.title}>CarCleaningPro</h2>
                <h3 className={styles.subtitle}>Our Services</h3>

                <div className={styles.services_list}>
                    <div className={styles.service_item}>
                        <span className={styles.number}>01</span>
                        <p className={styles.service_name}>Dry Cleaning</p>
                    </div>
                    <div className={styles.service_item}>
                        <span className={styles.number}>02</span>
                        <p className={styles.service_name}>Polishing</p>
                    </div>
                    <div className={styles.service_item}>
                        <span className={styles.number}>03</span>
                        <p className={styles.service_name}>Glass Tinting</p>
                    </div>
                    <div className={styles.service_item}>
                        <span className={styles.number}>04</span>
                        <p className={styles.service_name}>Leather Restoration</p>
                    </div>
                    <div className={styles.service_item}>
                        <span className={styles.number}>05</span>
                        <p className={styles.service_name}>Preparatory Sale Complex</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
