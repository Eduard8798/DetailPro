
import ServiceList from './components/ServiceList'
import styles from './page.module.css'
import React from "react";
import FeedbackForm from '../../components/FeedbackForm/page'

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
                        src="https://res.cloudinary.com/druvfoz4x/video/upload/v1751285277/PriceVideo_ysqkjh.mp4"
                        type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className={styles.video_background}> </div>
                <div className={styles.video_overlay_text}>
                    <p>Price</p>

                </div>

            </div>
            <ServiceList />
            <FeedbackForm/>
        </div>
    );
};

export default Page;
