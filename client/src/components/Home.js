import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getBands} from '../actions/index';
import Card from './Card';
import Filtro from './Filtros';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import { 
    Container,
    ContainerApp,
    Filters,
    Button
} 
from '../css/HomeStyles';

function Home(){
    const bands = useSelector((state) => state.bandsFiltered);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBands());
    }, [dispatch]);

    const clearFilters = () => { 
        dispatch(getBands());
    }

    return (
        <ContainerApp>
            <Navbar />
            <Filters>
                <SearchBar/>
                <Filtro/>
                <Button 
                onClick={() => clearFilters()}
                color="black"
                width="8rem"
                height="2.5rem"
                background= "#e0e0e0"
                font="18px"
                >
                    Clear Filters
                </Button>
            </Filters>
            <Container>
            {bands && bands ? (
                bands.map((band) => {
                return (
                    <Card
                    key={band.id}
                    id= {band.id}
                    name={band.name}
                    genre={band.genreCode}
                    year={band.year}
                    country={band.country}
                    />
                );
                })
            ) : (
                    <p>There are no existing bands</p>
            )}
            </Container>
        </ContainerApp>
    )
};

export default Home;