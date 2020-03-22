import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { name, image, id} = props;

    return(
    <div>
        <p>{name}</p>
        <img src={image} alt={name} />
        <Link to={'/card/' + id}>
            <p>Read More!</p>
        </Link>
    </div>
    )
};

export default Card;