import React from 'react';
import './FavoriteWriter.css';

const FavoriteWriter = (props) => {
    //console.log(props.favorites)
    const { favorites } = props;
    let names = [];
    let TotalBooks = 0;
    //let writerName = '';
    for (const favorite of favorites) {
        TotalBooks += favorite.numberOfBook;
        //writerName += favorite.name;
        names = [...names, favorite.name];
        //console.log(names)
    }

    return (
        <div className="favorite-writer">
            <h3>Total Favorite Writer: {favorites.length}</h3>
            <p>Total Book: {TotalBooks}</p>
            {/* <p>{names.join('<br>')}</p> */}
            {
                names.map((name, i) => (
                    <p key={i}>
                        {name}
                        <br />
                    </p>
                ))
            }
        </div >
    );
};

export default FavoriteWriter;