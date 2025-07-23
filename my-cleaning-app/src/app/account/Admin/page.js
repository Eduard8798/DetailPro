import React, {useEffect, useState} from 'react';
import Dashboard from './Dashboard'
import Requests from './Requests'
import styles from './Admin.module.css'
import { toast } from 'react-toastify';
import CreateRequests from "./CreateRequests";

const Page = ({setAuthStep}) => {

    const backLogin = (e) => {
        e.preventDefault();
        // Тут должна быть логика авторизации
        // если success:
        setAuthStep('register');
    }
    const [activeTab, setActiveTab] = useState('dashboard');
    const [data,setData] = useState(null);

    const getData = async () => {

        const res = await fetch('/api/account/profile',{
            method: 'GET',
            credentials: 'include'

        })
        const data = await res.json();
        if (res.ok) {
            setData(data)
            toast.success("Requests success");

            console.log('Requests',data)
        }
        else {
            console.error(data.message);
        }
    }
    useEffect(()=>{
        getData();
        console.log('start get data')
    },[])
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
                {activeTab === 'requests' && <Requests data={data} setData={setData} />}
            </main>
        </div>
    );
};

export default Page;
