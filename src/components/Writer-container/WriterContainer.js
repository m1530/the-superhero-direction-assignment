import React, { useEffect, useState } from 'react';
import FavoriteWriter from '../Favorite/FavoriteWriter';
import Writer from '../Writer/Writer';
import './WriterContainer.css';

const WriterContainer = () => {
    const [writers, setWriters] = useState([]);
    const [favorite, setFavorite] = useState([]);
    useEffect(() => {
        fetch('./writer.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, []);
    const handleClickButton = (writer) => {

        if (favorite.some(fav => fav.id === writer.id)) {
            alert("Writer already added!!!.");
        } else {
            const newFavorite = [...favorite, writer];
            setFavorite(newFavorite);
        }
    }
    return (
        <div className="writers-container">
            <div className="writers">
                {
                    writers.map(writer => <Writer key={writer.id} handleClick={handleClickButton} writer={writer}></Writer>)
                }
            </div>
            <div>
                <FavoriteWriter favorites={favorite}></FavoriteWriter>
            </div>
        </div>
    );
};

export default WriterContainer;