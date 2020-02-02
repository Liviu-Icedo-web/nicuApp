import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';
import { navigate } from '../navigationRef';




const RentalReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_rentals_all':
            return {...state, rental:action.payload};
        case 'fetch_rentals_owner':
            return {...state, rental:action.payload};
        case 'fetch_rentals':
            return {...state, rental:action.payload};  
        case 'edit_rental':
            let editRental = action.payload
            console.log('*** EDITRENTAL',action.payload)
            return { ...state, 
                rental:[...state.rental.filter(rental => rental.id != editRental.id),editRental]
            }; 
        case 'delete_rental':
            return { ...state, rental:state.rental.filter( rental  => rental.id !== action.payload)};              
        default:
            return state;
    }
};

const fetchRentalsAll = dispatch => async (car_id) => {
    const response = await nicuApi.get('/rental-car/'+car_id);
    dispatch({ type: 'fetch_rentals_all', payload: response.data });
};

const fetchRentalsbyOwner = dispatch => async (user_owner_id) => {
    const response = await nicuApi.get('/rental-owners/'+user_owner_id);
    dispatch({ type: 'fetch_rentals_owner', payload: response.data });
};

const fetchRentals = dispatch => {
    return async (userid) => {
        const response = await nicuApi.get('/rental-user/'+userid); 
        dispatch({ type: 'fetch_rentals', payload: response.data });
    };
} 


const editRental = dispatch => {
    return async (id, car_id, user_id, user_owner_id,start_date, end_date, pickup_location, dropoff_location ) => {  
        start_date = new Date(start_date.replace(' ', 'T'));
        end_date = new Date(end_date.replace(' ', 'T'));  
        try {
            const updateData = await nicuApi.put(`/rental-user/`+id, { id, car_id, user_id,user_owner_id, start_date, end_date,pickup_location, dropoff_location });
            const response = await nicuApi.get('/rental-user/'+user_id); 
        dispatch({ type: 'fetch_rentals', payload: response.data });
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
    { fetchRentalsAll,fetchRentalsbyOwner,fetchRentals, editRental, deleteRental},
    []
);
