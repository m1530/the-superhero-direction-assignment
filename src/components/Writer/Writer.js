import React from 'react';
import './Writer.css';

const Writer = (props) => {
    console.log(props.writer);
    const { name, img, language } = props.writer;

    return (
        <div>
            <img className="writer-img" src={img} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default Writer;