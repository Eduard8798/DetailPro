import React, {useEffect, useState} from 'react';

const Requests = ({data}) => {

    return (
        <div>
            <h1>Client Requests</h1>
            <ul>
                {data.map((req) => (
                    <li key={req.id}>
                        <strong>{req.name}</strong>
                        <p>{req.phone}</p>createdAt
                        {req.message ? <p>{req.message}</p> : req.message='Message empty'}
                        <p>{new Date(req.createdAt).toLocaleDateString('ua-UA')}</p>
                        <button style={{ marginLeft: '10px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Requests;
