import React from 'react';
import styles from './about.module.css';
import DescriptionWork from '../../components/Home/DescriptionWork/page'
const Page = () => {
    return (
        <div>
        <div className={styles.aboutWrapper}>
            <div className={styles.heroVideo}>
            <video
                autoPlay
                muted
                loop
                playsInline

            >
                <source src="https://res.cloudinary.com/druvfoz4x/video/upload/v1751191847/aboutVideo_tnpouj.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

                <div className={styles.video_overlay_text}>
                <p >About</p>

            </div>
            </div>
            <div className={styles.yellowLine}>About Us</div>

            <h1 className={styles.title}>CAR Cleaning PRO</h1>

            <p className={styles.description}>
                This is a place where car care is carried out comprehensively and professionally,
                where special attention is paid to details and trifles. We promote world trends in
                restoration, protection and maintenance of the beauty of the car's exterior and interior.
                <br /><br />
                Today we can protect the car body from aggressive environmental influences, chemical reagents,
                chips and scratches, increase the gloss and color depth of the paintwork, protect optics from aging,
                perform deep and delicate dry cleaning of the interior, restore leather and much more.
                <br /><br />
                In our work we use only professional products from leading global manufacturers.
                Each of them guarantees consistently high quality and excellent efficiency of their products.
            </p>
        </div>
    <DescriptionWork/>
        </div>
    );
};

export default Page;
