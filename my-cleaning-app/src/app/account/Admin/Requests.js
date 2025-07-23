import React, {useState} from 'react';
import styles from './Requests.module.css';
import {Bounce, toast} from "react-toastify";

const Requests = ({ data,setData }) => {


    const updateList = (id) =>{
        setData(prev => prev.filter(item => String(item._id) !== String(id)));
    }
    const deleteRequest = async (id) => {
        const res = await fetch(`/api/account/profile/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        const data = await res.json();
        if (res.ok) {
            toast('🦄 Delete Requests success!', {
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
            updateList(id);
        }
        else {
            toast.error(`🦄${data.message}` , {
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
            console.error(data.message);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Client Requests</h1>
            <ul className={styles.list}>
                {data.map((req) => (
                    <li key={req._id} className={styles.item}>
                        <p className={styles.containerInfo}>{req.name}</p>
                        <p className={styles.containerInfo}>{req.phone}</p>
                        <p className={styles.containerInfo}>{req.message ? req.message : 'Message empty'}</p>
                        <p className={styles.containerInfo}>{new Date(req.createdAt).toLocaleDateString('uk-UA')}</p>
                        <button
                            className={styles.button}
                            onClick={() => deleteRequest(req._id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Requests;
