import { GET_BANDS, FILTER_BY_COUNTRY, GET_ALMBUS_BY_BAND, GET_BAND_DETAILS, SORT_ALPHABETICALLY_REVERSE, FILTER_BY_NAME, SORT_ALPHABETICALLY, FILTER_BY_GENRE } from "../actions/index";
import{ sortAlphabeticallyAz } from "../filtersFunction/index";

const initialState = {
    bands : [],
    bandAlbums : [],
    bandsFiltered: [],
    bandDetails : {},
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BANDS:{
            return{
                ...state,
                bands: action.payload,
                bandsFiltered: action.payload
            }
        }
        case GET_BAND_DETAILS:{
            return{
                ...state,
                bandDetails: action.payload
            }
        }
        case FILTER_BY_COUNTRY:{
            return{
                ...state,
                bandsFiltered: state.bands.filter((b)=> b.country === action.payload)
            }
        }
        case GET_ALMBUS_BY_BAND:{
            return{
                ...state,
                bandAlbums: action.payload
            }
        }
        case FILTER_BY_NAME:{
            return{
                ...state,
                bandsFiltered: state.bands.filter((b)=> b.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        }
        case FILTER_BY_GENRE:{
            return{
                ...state,
                bandsFiltered: state.bands.filter((b)=> b.genreCode === action.payload)
            }
        }
        case SORT_ALPHABETICALLY:{
            return {
                ...state,
                bandsFiltered: state.bands.slice().sort(sortAlphabeticallyAz)
            }
        }
        case SORT_ALPHABETICALLY_REVERSE:{
            return {
                ...state,
                bandsFiltered: state.bands.slice().sort(sortAlphabeticallyAz).reverse()
            }
        }

        default: return state
    }
}
export default rootReducer;