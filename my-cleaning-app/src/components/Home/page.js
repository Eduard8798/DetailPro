import React from 'react';
import styles from './page.module.css'

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
            <div className={styles.description_work}>


                <div className={styles.text_full_img_container}>
                    <p style={{padding:15}}>STAFF AND SERVICE</p>
                    <p>
                        We are a team of professionals who love their work.
                        <br/> We get a thrill every day from making cars clean and shiny,
                        <br/> as if they just left the showroom yesterday.
                    </p>
                </div>
                <div className={styles.text_full_img_container}>
                    <p style={{padding:15}}>
                        BEST PRODUCERS
                    </p>
                    <p>
                        We are proud of our partners and
                        <br/>gather them from all over the world.
                        <br/>We carefully select only the best brands and really working products.
                        <br/>That is why we manage to keep the quality at its highest.
                    </p>
                </div>
                <div className={styles.text_full_img_container}>
                    <p style={{padding:15}}>
                        EXCLUSIVE OFFERS
                    </p>
                    <p>
                        Each car requires a special approach.
                        <br/>Different conditions,<br/> differences in operating conditions and
                        <br/>age – all this requires thoughtfulness and
                        <br/>the use of narrowly targeted means.
                        <br/>No streamlining and the race for quantity!
                    </p>
                </div>
                <img src="https://i.postimg.cc/3JL56Jkj/2benz.jpg" alt="description" className={styles.full_img}/>
            </div>

        </div>
    );
};

export default Page;
