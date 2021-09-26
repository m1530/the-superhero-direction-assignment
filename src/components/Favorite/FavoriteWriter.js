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
        <div>
            <div className="favorite-writer">
                <h3>Total Favorite Writers: {favorites.length}</h3>
                <p>Total Books: {TotalBooks}</p>
            </div>
            <div>
                {
                    names.map((name, i) => (
                        <p key={i} className="writer-name favorite-writer">
                            {name}
                            <br />
                        </p>
                    ))
                }
            </div>
        </div >
    );
};

export default FavoriteWriter;