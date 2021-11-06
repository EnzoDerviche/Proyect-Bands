import React from 'react';
import { useEffect } from "react";
import Navbar from './Navbar';
import { useSelector, useDispatch } from "react-redux";
import { getAlbumsByBand, getBandDetails } from "../actions/index";
import { useParams } from 'react-router-dom';
import { Details } from "../css/HomeStyles";
import {
    Table,
    TableHead,
    TableData,
    TableHd,
    TableRow,
    TableContainer,
} from "../css/Table";

function BandDetails(){
    const albums = useSelector((state) => state.bandAlbums);
    const band = useSelector((state) => state.bandDetails);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getAlbumsByBand(id));
        dispatch(getBandDetails(id));
    }, [id, dispatch]);

    return (
        <div>
            <Navbar/>
            <Details>
                    <TableContainer>
                        <Table>
                            <TableHead>
                            <TableRow>
                                <TableHd width="20%">
                                <span>
                                    <p style={{ margin: 0 }}>Name</p>
                                </span>
                                </TableHd>
                                <TableHd width="10%">Year</TableHd>
                                <TableHd width="15%">Country</TableHd>
                                <TableHd width="20%">Genre</TableHd>
                                <TableHd width="40%">Albums</TableHd>
                            </TableRow>
                            </TableHead>
                            <tbody>
                            {band &&
                                    <TableRow key={band._id}>
                                    <TableData align="center">{band.name}</TableData>
                                    <TableData align="center">{band.year}</TableData>
                                    <TableData align="center">{band.country}</TableData>
                                    <TableData align="center">{band.genreCode}</TableData>
                                    <TableData align="center"><ul>{
                                    albums && albums.length > 0 ? (
                                        albums.map((a) => {
                                        return (
                                            <li>{a.name}</li>
                                        );
                                        })
                                    ) : (
                                        <p>There are no albums</p>
                                    )}
                                    </ul>
                                    </TableData>
                                    </TableRow>
                            }
                            </tbody>
                        </Table>
                    </TableContainer>
            </Details>
        </div>
    )
}

export default BandDetails;