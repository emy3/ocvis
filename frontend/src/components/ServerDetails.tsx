import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServerDetails: React.FC = () => {
    const [status, setStatus] = useState<string | null>(null);

    useEffect(() => {
        const fetchServerStatus = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/server-status');
                setStatus(response.data.status);
            } catch(error) {
                console.error('Error fetching server status:', error);
            }
        };

        fetchServerStatus();
    }, []);

    return (
        <div>
            <h1>Server Status</h1>
            <p>{status ? status : 'loading...'}</p>
        </div>
    );
};

export default ServerDetails;