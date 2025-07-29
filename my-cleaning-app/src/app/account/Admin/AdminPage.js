"use client";
import React, {useEffect, useState} from 'react';
import Dashboard from './Dashboard'
import Requests from './Requests'
import styles from './Admin.module.css'
import { toast } from 'react-toastify';
import CreateRequests from "./CreateRequests";

const AdminPage = () => {

    const [activeTab, setActiveTab] = useState('dashboard');
    const [data,setData] = useState(null);
    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(4);

    const getData = async () => {

        const res = await fetch(`/api/account/profile?page=${page}&limit=${limit}`,{
            method: 'GET',
            credentials: 'include'

        })
        const data = await res.json();
        if (res.ok) {
            setData(data)
            toast.success("Requests success");
        }
        else {
            console.error(data.message);
        }
    }
    useEffect(()=>{
        getData();

    },[limit,page])


    return (
        <div className={styles.adminContainer}>
            <aside className={styles.sidebar}>
                <h2 className={styles.logo}>Admin Panel</h2>
                <button onClick={() => setActiveTab('dashboard')}>Dashboard</button>
                <button onClick={() => setActiveTab('requests')}>Requests</button>
                <button onClick={() => setActiveTab('create')}>Create</button>
                <button onClick={() => window.location.reload()}>Logout</button>
            </aside>

            <main className={styles.main}>
                {activeTab === 'dashboard' && <Dashboard />}
                {activeTab === 'create' && <CreateRequests getData={getData}/>}
                {activeTab === 'requests' && <Requests data={data} setData={setData}
                                                       page={page} setPage={setPage} setLimit={setLimit} limit={limit}/>}
            </main>
        </div>
    );
};

export default AdminPage;
