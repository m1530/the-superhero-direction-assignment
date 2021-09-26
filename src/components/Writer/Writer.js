import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Writer.css';

const Writer = (props) => {
    //fontawesome icon generate
    const icon = <FontAwesomeIcon className="icon-color" icon={faHeart} />
    //destructuring array of object
    const { name, img, language, numberOfBook, majorWork, maxEstSales } = props.writer;

    return (
        //display writer in card
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
                <button onClick={() => props.handleClick(props.writer)} className="make-favorite-btn">{icon} Add to Favorite</button>
            </div>
        </div>
    );
};

export default Writer;