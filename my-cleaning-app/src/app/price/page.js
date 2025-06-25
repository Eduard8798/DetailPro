import img from '../../../image/audiPrice.jpg'
import ServiceList from './components/ServiceList'
import Image from "next/image";
import styles from './page.module.css'

const Page = () => {


    return (
        <div>
            <div className={styles.imageContainer}>
                <div className={styles.imageOverlay}>
                    <h1 className={styles.overlayText}>Price</h1>
                </div>
                <Image
                    src={img}   // Путь к изображению в папке public
                    alt="awesome image"
                    width={800}  // Указываем ширину
                    height={600} // Указываем высоту
                    layout="responsive"  // Указываем layout
                />
            </div>

            <ServiceList /> {/* Компонент после изображения */}
        </div>
    );
};

export default Page;
