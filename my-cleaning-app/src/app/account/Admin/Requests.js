import React from 'react';

const mockRequests = [
    { id: 1, name: 'John', phone: '1234567890', problem: 'Engine noise' },
    { id: 2, name: 'Anna', phone: '0987654321', problem: 'Oil leak' },
];

const Requests = () => {
    return (
        <div>
            <h1>Client Requests</h1>
            <ul>
                {mockRequests.map((req) => (
                    <li key={req.id}>
                        <strong>{req.name}</strong> ({req.phone}): {req.problem}
                        <button style={{ marginLeft: '10px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Requests;
