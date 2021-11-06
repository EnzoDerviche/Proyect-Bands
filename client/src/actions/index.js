import axios from "axios";
export const GET_BANDS = "GET_BANDS";
export const GET_BAND_DETAILS = "GET_BAND_DETAILS";
export const GET_ALMBUS_BY_BAND = "GET_ALMBUS_BY_BAND";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_COUNTRY = "FILTER_BY_COUNTRY";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const SORT_ALPHABETICALLY = "SORT_ALPHABETICALLY";
export const SORT_ALPHABETICALLY_REVERSE = "SORT_ALPHABETICALLY_REVERSE";

export const getBands = () => {
    return async function (dispatch) {
        let data = await axios
        .get("https://my-json-server.typicode.com/improvein/dev-challenge/bands")
        return dispatch({type: GET_BANDS, payload: data.data});
    };
};

export const getBandDetails = (id) => {
    return async function (dispatch) {
        let data = await axios
        .get("https://my-json-server.typicode.com/improvein/dev-challenge/bands")
        let bands = data.data.find((a) => parseInt(a.id) === parseInt(id))
        return dispatch({type: GET_BAND_DETAILS, payload: bands});
    };
};

export const getAlbumsByBand = (id) => {
    return async function (dispatch) {
        let data = await axios
        .get("https://my-json-server.typicode.com/improvein/dev-challenge/albums")
        let albums = data.data.filter((a) => parseInt(a.bandId) === parseInt(id))
        return dispatch({type: GET_ALMBUS_BY_BAND, payload: albums});
    };
};

export const filterByName = (payload) => {
    return {
        type: FILTER_BY_NAME,
        payload,
    };
};

export const filterByCountry = (payload) => {
    return {
        type: FILTER_BY_COUNTRY,
        payload,
    };
};

export const filterByGenre = (payload) => {
    return {
        type: FILTER_BY_GENRE,
        payload,
    };
};

export const sortAlphabetically = (payload) => {
    return {
        type: payload === "asc" ? SORT_ALPHABETICALLY : SORT_ALPHABETICALLY_REVERSE,
    };
};