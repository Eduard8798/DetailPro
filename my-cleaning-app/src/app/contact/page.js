'use client'
import React, {useState} from 'react';

const Page = () => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    return (
        <div>
            Contact
            Map
            <p>Your name</p>
            <input
                value={name}
            placeholder={'name'}
                onChange={(event)=>setName(event.target.value)}
            />
            <p>Your phone</p>
            <input
                value={phone}
            placeholder={'phone'}
                onChange={(event)=>setPhone(event.target.value)}
            />
        </div>
    );
};

export default Page;
