import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';
import { navigate } from '../navigationRef';


const RentalReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_rentals':
            return {...state, rental:action.payload};  
        case 'edit_rental':
            let editRental = action.payload
            return { ...state, 
                rental:[...state.rental.filter(rental => rental.id != editRental.id),editRental]
            }; 
        case 'delete_rental':
            return { ...state, rental:state.rental.filter( rental  => rental.id !== action.payload)};                  
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

const editRental = dispatch => {
    return async (id, car_id, user_id, start_date, end_date, pickup_location, dropoff_location ) => {  
        start_date = new Date(start_date.replace(' ', 'T'));
        end_date = new Date(end_date.replace(' ', 'T'));  
        try {
            const response = await nicuApi.put(`/rental-user/`+id, { id, car_id, user_id, start_date, end_date,pickup_location, dropoff_location });
            //dispatch({ type: 'edit_rental', payload: response.data });
            navigate('Rental'); 
        } catch (error) {
            dispatch({ 
                type: 'add_error', 
                 payload: 'Exista o erroare, editando rental cu ID: `${id}` !!' });
             }         
        };
}

const deleteRental = dispatch => {
    return async (id)=> {
        await nicuApi.delete(`/rental-user/${id}`);
        dispatch({ type: 'delete_rental', payload: id});
        navigate('Rental'); 
    };
 }


export const { Context, Provider } = createDataContext(
    RentalReducer,
    { fetchRentals, editRental, deleteRental},
    []
);
