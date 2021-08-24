import React from 'react';

function FavCard(props) {
    return (

            <div className="dog" onClick={(e) =>props.removeFromFav(props.url,props.id)}>
            <img src={props.url} alt=''></img>
            <div className="icon">
            <img src='./heart-red.png' alt='' onClick={(e) =>props.removeFromFav(props.url,props.id)}></img>
            </div>
            </div>


        );
}

export default FavCard;