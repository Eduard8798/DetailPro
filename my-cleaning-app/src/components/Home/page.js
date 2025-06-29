import React from 'react';
import styles from './page.module.css'
import DescriptionWork from './DescriptionWork/page'
const Page = () => {
    return (
        <div>
            <div className={styles.context}>
                <p className={styles.tittle}> DETAILING </p>
                <p className={styles.tittle}> STUDIO </p>
            </div>
            <div className={styles.tittle_about}>
                <strong className={styles.brand}>CAR Cleaning PRO</strong>
                <p className={styles.text_about}>About Us</p>
                <p className={styles.text_description_about}>
                    This is a place where car care is carried out comprehensively and professionally,
                    <br/>
                    where special attention is paid to details and trifles. We promote world trends in restoration,
                    <br/>
                    protection and maintenance of the beauty of the exterior and interior of the car.
                    <br/>
                    Today, offering detailing services in Cherkasy,
                    <br/>
                    we can protect the car body from aggressive environmental influences,
                    <br/>
                    chemical reagents, chips and scratches, increase the shine and depth of the paintwork,
                    <br/>
                    protect optics from aging, perform deep and delicate dry cleaning of the interior,
                    <br/>
                    restore leather and much more.
                    In our work we use only professional products
                    <br/>
                    from leading global manufacturers.
                    <br/>
                    Each of them guarantees consistently high quality and excellent efficiency of their products.
                </p>
            </div>
            <div className={styles.content_gallery}>
                <div className={styles.gallery_one}>

                </div>
                <div className={styles.gallery_two}>

                </div>
                <div className={styles.gallery_three}>

                </div>
                <div className={styles.gallery_four}>

                </div>

            </div>

<DescriptionWork/>
        </div>
    );
};

export default Page;
