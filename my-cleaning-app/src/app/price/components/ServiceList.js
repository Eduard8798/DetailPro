'use client'

import styles from '../components/Service.module.css'
import {useState} from "react";


const ServiceList = () => {

    const arrService = ['Cleaning', 'Tinted Window', 'Vacuum the car'];
    const arrTableService = ['Service', 'Time', 'S', 'M', 'L'];
    const [changeServiceClick, setChangeServiceClick] = useState('');
    const [typeServiceShow, setTypeServiceShow] = useState([]);
    const [infoService, setInfoService] = useState([
        {
            Type: 'Cleaning',
            details: ['All item', '12h', '3500', '4000', '5000'],
        }, {
            Type: 'Cleaning',
            details: ['Set item', '8h', '1500', '2000', '3000']
        }, {
            Type: 'Cleaning',
            details: ['Item', '2h', '500', '1000', '1500']
        },
        {
            Type: 'Tinted Window',
            details: ['Full set', '6h', '2000', '2500', '3500'],
        },
        {
            Type: 'Vacuum the car',
            details: ['Basic cleaning', '1h', '700', '1200', '1700'],
        },
    ]);

    const changeTypeService = (event) => {
        setChangeServiceClick(event.target.textContent);
        const setTextService = event.target.textContent;

        const selectedServiceData = infoService.filter(item => item.Type === setTextService);
        if (selectedServiceData.length > 0) {

            const allDetails = selectedServiceData.flatMap(item => item.details);
            setTypeServiceShow(allDetails);
        }

    }

    return (
        <div>
<div className={styles.container}>
            <div className={styles.service}>
                {arrService.map((item, index) => (
                    <p
                        key={index}
                        className={`${styles.itemServiceName} ${changeServiceClick === item ? styles.selected : ''}`}
                        onClick={changeTypeService}
                    >
                        {item}
                    </p>
                ))}
            </div>


            <div className={styles.tableService}>
                <div className={styles.tableContent}>
                    {arrTableService.map((title, index) => (
                        <p key={index} className={styles.itemTableServiceName}>{title}</p>
                    ))}
                </div>

                <div className={styles.tableContent}>
                    {typeServiceShow.map((item, index) => (
                        <p key={index} className={styles.itemTableServiceName}>{item}</p>
                    ))}
                </div>
            </div>

</div>
        </div>
    );
};

export default ServiceList;
