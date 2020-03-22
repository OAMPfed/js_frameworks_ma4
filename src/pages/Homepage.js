import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { CORS, RICKMORTY_API } from '../constants/constants';

const Homepage = props => {
    const [cardResult, setCardResult] = useState([]);
    const [searchParam, setSearchParam] = useState('');

    useEffect(() => {
        axios.get(CORS + RICKMORTY_API + '?name=' + searchParam)
            .then(result => {
                console.log('rick and morty', result.data.results)
                setCardResult(result.data.results)
            })
            .catch((error) => {
                console.log(error);
                setSearchParam('');
            })
    }, [searchParam]);

    const renderRickmortyCards = cardResult.map((card, index) => {
        return (
            <Card   key={index}
                    name={card.name}
                    image={card.image}
                    id={card.id}
                    species={card.species}
                    status={card.status}
                    gender={card.gender}/>
        )
    })

    return (
        <div>
            <p>Search for a Rick and Morty Character below!</p>
            <input type="text"
                onChange={(e => setSearchParam(e.target.value))}></input>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {cardResult.length >= 1 ? renderRickmortyCards : null}
            </div>

        </div>
    );
}

export default Homepage;