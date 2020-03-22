import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { CORS, RICKMORTY_API } from '../constants/constants';

const CardSpecific = props => {
    const [cardResult, setCardResult] = useState('');

    useEffect(() => {
        axios.get(CORS + RICKMORTY_API + props.match.params.id)
            .then(result => {
                console.log('rick and morty', result.data)
                setCardResult(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [props.match.params.id]);

    return (
        <div>
            <p>{cardResult.name}, id: {cardResult.id}</p>
            <img src={cardResult.image} alt={cardResult.name} />
            <p>Species: {cardResult.species}</p>
            <p>Status: {cardResult.status}</p>
            <p>Gender: {cardResult.gender}</p>
        </div>
    );
}

export default CardSpecific;