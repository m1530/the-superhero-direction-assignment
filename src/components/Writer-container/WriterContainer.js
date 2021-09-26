import React, { useEffect, useState } from 'react';
import Writer from '../Writer/Writer';
import './WriterContainer.css';

const WriterContainer = () => {
    const [writers, setWriters] = useState([]);
    useEffect(() => {
        fetch('./writer.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, []);
    return (
        <div>
            <div>
                {
                    writers.map(writer => <Writer key={writer.id} writer={writer}></Writer>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default WriterContainer;