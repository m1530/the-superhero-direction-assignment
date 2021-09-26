import React from 'react';
import './Writer.css';

const Writer = (props) => {
    //console.log(props.writer);
    const { name, img, language, numberOfBook, majorWork, maxEstSales } = props.writer;

    return (
        <div className="writer-card">
            <div className="writer-img">
                <img src={img} alt="" />
            </div>
            <div className="writer-info">
                <h3>{name}</h3>
                <p>Language: {language}</p>
                <p>Number of books: {numberOfBook}</p>
                <p>Major Work: {majorWork}</p>
                <p>Max Est. sales: {maxEstSales}</p>
                <button onClick={() => props.handleClick(props.writer)} className="make-favorite-btn">Make Favorite</button>
            </div>
        </div>
    );
};

export default Writer;