import React from 'react';

function DogCard(props) {
    return (
        <div className="dog" onClick={(e) =>props.addToFav(props.url,props.id)}>
        <img src={props.url} alt=''></img>
        <div className="icon">
        <img src='./heart.png' alt='' onClick={(e) =>props.addToFav(props.url,props.id)}></img>
        </div>
        </div>


    );
}

export default DogCard;