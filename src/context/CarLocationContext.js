import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';
import { navigate } from '../navigationRef';

const carLocationReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_locations_car':
            return {...state, locationCar:action.payload};
        case 'addLocationCar':
            let newlocationCar = action.payload
            return { ...state, 
                locationCar:[...state.locationCar,newlocationCar]
                };          
        default:
            return state;
    }
};
const fetchLocationsCar = dispatch => {
    return async (carid) => {
        const response = await nicuApi.get('/cars-location/'+carid); 
        dispatch({ type: 'fetch_locations_car', payload: response.data });
    };
} 

const addLocationCar = dispatch => {
    return async ( car_id, street, city, state, country ) => {
        try {
            console.log("*** addLocationCar ",car_id)
            const response = await nicuApi.post('/car-location/', {car_id,street, city, state, country});
            dispatch({ type: 'addLocationCar', payload: response.data });
            navigate('CarLocations'); 
        } catch (err) {
            console.log("Error URL",err)
            dispatch({ 
               type: 'add_error', 
                payload: 'Exista o erroare, nu sa creat localizarea pt masina !!' });
            }
    }; 
} 



export const { Context, Provider } = createDataContext(
    carLocationReducer,
    { fetchLocationsCar,addLocationCar},
    []
);