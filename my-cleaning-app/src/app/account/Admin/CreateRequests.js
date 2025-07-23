import React, { useState } from 'react';
import styles from './CreateRequests.module.css';
import {Bounce, toast} from "react-toastify";

const CreateRequests = ({getData}) => {
    const [formData, setFormData] = useState({
        message:''
    });

    const refreshReq = async () => {
        await getData();
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/account/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include',

            });

            const data = await res.json();
            console.log('fetch data ', data)

            if (res.ok) {
                toast('📧 Requests create success!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                setFormData({message:''});
                await refreshReq();
            } else {
                toast.error(`❗️ Error ,${data.message}`|| 'Error with send ' )

            }
        } catch (err) {
            console.error(err);
            toast.error(`❗️ Error ,${err}` )

        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
                name="message"
                placeholder="Сообщение"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={4}
            />
            <button type="submit" className={styles.button}
            onClick={()=> console.log('formData',formData)}
            >Отправить</button>
        </form>
    );
};

export default CreateRequests;
