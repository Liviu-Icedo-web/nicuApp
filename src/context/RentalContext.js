import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';
import { navigate } from '../navigationRef';

const RentalReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_rentals':
            return {...state, rental:action.payload};              
        default:
            return state;
    }
};
const fetchRentals = dispatch => {
    return async (userid) => {
        const response = await nicuApi.get('/rental-user/'+userid); 
        dispatch({ type: 'fetch_rentals', payload: response.data });
    };
} 

export const { Context, Provider } = createDataContext(
    RentalReducer,
    { fetchRentals},
    []
);