import React from 'react';
import {Link} from 'react-router-dom';
import { 
    CardContainer,
    Info,
    Fact,
    Band,
} 
from '../css/HomeStyles';

function Card({id, name, genre, year, country}){

    return (
        <CardContainer>  
                <Band>
                    <Link style={{color:'white', textDecoration: 'none' }} to={`/band/${id}`}><h2>{name}</h2></Link>
                </Band>
                <Info>
                    <Fact background="#ABAAAA">{genre}</Fact>
                    <Fact background="black">{year}</Fact>
                </Info>
                <Fact background="#ABAAAA">{country}</Fact>        
        </CardContainer>
    )
};

export default Card;