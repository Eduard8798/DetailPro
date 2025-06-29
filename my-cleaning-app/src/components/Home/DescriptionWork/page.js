import React from 'react';
import styles from './page.module.css'

const Page = () => {
    return (
        <div>
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
